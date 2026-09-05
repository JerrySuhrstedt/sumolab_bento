// Generates an article hero with fal.ai (flux/dev) and saves it to public/blog/<slug>.jpg.
// Needs FAL_KEY in the environment. Usage: node scripts/hero-image.mjs <slug> "<prompt>"
import { writeFileSync } from 'node:fs';
const [slug, prompt] = process.argv.slice(2);
if (!process.env.FAL_KEY) { console.error('FAL_KEY not set; skipping hero. Use /photos/who-its-for-hero.jpg as a temporary imageSrc and say so in the draft note.'); process.exit(2); }
const res = await fetch('https://fal.run/fal-ai/flux/dev', {
	method: 'POST',
	headers: { Authorization: `Key ${process.env.FAL_KEY}`, 'Content-Type': 'application/json' },
	body: JSON.stringify({ prompt: `Editorial photograph, ${prompt}, natural light, realistic, candid, shallow depth of field, no text, no logos, no visible brand names`, image_size: 'landscape_16_9', num_images: 1, guidance_scale: 3.5, num_inference_steps: 28, enable_safety_checker: true }),
});
if (!res.ok) { console.error('fal error', res.status, await res.text()); process.exit(1); }
const data = await res.json();
const url = data.images?.[0]?.url; if (!url) { console.error('no image in response'); process.exit(1); }
const img = await fetch(url); writeFileSync(`public/blog/${slug}.jpg`, Buffer.from(await img.arrayBuffer()));
console.log(`saved public/blog/${slug}.jpg`);
