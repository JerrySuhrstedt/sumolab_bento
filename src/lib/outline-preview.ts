/**
 * Turns an approved outline into the pieces needed to render a front-end
 * preview of a page that has not been written yet.
 *
 * The outline is written by Claude to the format in the vault's
 * article-prompt_09-05-2026.md (Phase 1). The parsing here is deliberately
 * tolerant: an outline that was hand-edited, half-written, or in an older
 * shape should still yield whatever it can rather than throwing. When a field
 * cannot be found the caller shows the article record's own value instead, or
 * omits the block. `found` says how much was recovered so the preview can be
 * honest about what it is showing.
 */

export interface OutlineHeading {
	level: 2 | 3;
	text: string;
	/** The one-line "what this section proves" note, when the outline carries one. */
	note?: string;
}

export interface OutlinePreview {
	h1: string | null;
	titleTag: string | null;
	hook: string | null;
	snippetQuestion: string | null;
	snippetAnswer: string | null;
	headings: OutlineHeading[];
	wordCountNote: string | null;
	/** True when the outline yielded at least a heading structure or an H1. */
	found: boolean;
}

/** Strip markdown emphasis, list bullets, and trailing colons from a heading line. */
function clean(s: string): string {
	return s
		.replace(/\*\*/g, '')
		.replace(/^\s*[-*+]\s+/, '')
		.replace(/^\s*#+\s*/, '')
		.trim();
}

/** Pull the body of a "## N. Label" section out of the brief. */
function section(text: string, label: RegExp): string | null {
	const lines = text.split('\n');
	const start = lines.findIndex((l) => /^\s*#{1,4}\s/.test(l) && label.test(l));
	if (start < 0) return null;
	const rest: string[] = [];
	for (let i = start + 1; i < lines.length; i++) {
		if (/^\s*#{1,4}\s/.test(lines[i])) break;
		rest.push(lines[i]);
	}
	return rest.join('\n').trim() || null;
}

/** First `Key: value` match anywhere in the outline. */
function labelled(text: string, key: RegExp): string | null {
	for (const raw of text.split('\n')) {
		const line = clean(raw);
		const m = line.match(key);
		if (m) {
			const v = line.slice(m[0].length).trim().replace(/^[:\-–]\s*/, '');
			if (v) return v;
		}
	}
	return null;
}

/** Drop a parenthetical character/word count that belongs to the brief, not the page. */
function stripBriefAside(s: string): string {
	return s.replace(/\s*\((?:\d+\s*(?:chars?|characters|words?)|[\d,]+\s*words?)\)\s*$/i, '').trim();
}

export function parseOutline(outline: string | null | undefined): OutlinePreview {
	const empty: OutlinePreview = {
		h1: null,
		titleTag: null,
		hook: null,
		snippetQuestion: null,
		snippetAnswer: null,
		headings: [],
		wordCountNote: null,
		found: false,
	};
	if (!outline || !outline.trim()) return empty;
	const text = outline.replace(/\r\n/g, '\n');

	const h1raw = labelled(text, /^(?:proposed\s+)?h1\b\s*:?/i);
	const h1 = h1raw ? stripBriefAside(h1raw) : null;

	const titleRaw = labelled(text, /^(?:title\s*tag|seo\s*title|meta\s*title)\b\s*:?/i);
	const titleTag = titleRaw ? stripBriefAside(titleRaw) : null;

	// Hook: the brief states the exact opening sentences, usually in quotes.
	const hookBody = section(text, /hook/i);
	let hook: string | null = null;
	if (hookBody) {
		const quoted = hookBody.match(/"([\s\S]+?)"/);
		hook = (quoted ? quoted[1] : hookBody).replace(/\s+/g, ' ').trim() || null;
	}

	// Featured snippet: a Q line and an A line inside the snippet section.
	const snipBody = section(text, /snippet/i);
	let snippetQuestion: string | null = null;
	let snippetAnswer: string | null = null;
	if (snipBody) {
		const q = snipBody.match(/^\s*Q\s*:?\s*(.+)$/im);
		const a = snipBody.match(/^\s*A\b[^:]*:\s*([\s\S]+?)$/im);
		snippetQuestion = q ? clean(q[1]) : null;
		if (a) {
			const quoted = a[1].match(/"([\s\S]+?)"/);
			snippetAnswer = (quoted ? quoted[1] : a[1].split('\n')[0]).replace(/\s+/g, ' ').trim() || null;
		}
	}

	// Headings: lines that name an H2 or H3, with the following non-empty line
	// treated as the section's "what it proves" note when it is not itself a heading.
	const headings: OutlineHeading[] = [];
	const lines = text.split('\n');
	for (let i = 0; i < lines.length; i++) {
		const line = clean(lines[i]);
		const m = line.match(/^H([23])\b\s*(?:\([^)]*\))?\s*:?\s*(.*)$/i);
		if (!m) continue;
		const body = m[2].trim();
		if (!body) continue;
		// Skip the brief's own scaffolding lines, e.g. "H2/H3" mentions in prose.
		if (/^(?:and|or|headings?)\b/i.test(body)) continue;
		// Some outlines put the heading and its "what this proves" note on one
		// line ("H3: Speed to lead. No cooling in July means..."). Split at the
		// first sentence break so the preview shows a heading, not a paragraph.
		let headingText = stripBriefAside(body);
		let note: string | undefined;
		const split = headingText.length > 70 ? headingText.match(/^(.{6,90}?[.?!])\s+(\S.*)$/) : null;
		if (split) {
			headingText = split[1].replace(/\.$/, '');
			note = split[2].trim();
		} else {
			for (let j = i + 1; j < lines.length; j++) {
				const nxt = clean(lines[j]);
				if (!nxt) continue;
				if (/^H[23]\b/i.test(nxt) || /^#{1,4}\s/.test(lines[j])) break;
				note = nxt.replace(/\s+/g, ' ').trim();
				break;
			}
		}
		headings.push({ level: m[1] === '3' ? 3 : 2, text: headingText, note });
	}

	const intent = section(text, /intent|word\s*count/i);
	const wordCountNote = intent ? intent.split('\n').map((l) => l.trim()).filter(Boolean).join(' ') : null;

	return {
		h1,
		titleTag,
		hook,
		snippetQuestion,
		snippetAnswer,
		headings,
		wordCountNote,
		found: Boolean(h1 || headings.length),
	};
}
