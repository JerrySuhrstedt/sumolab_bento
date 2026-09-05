# Helper for editorial-import.mjs: dumps an Answer The Public .xlsx to JSON rows.
import sys, json, openpyxl
wb = openpyxl.load_workbook(sys.argv[1], read_only=True)
out = []
for ws in wb.worksheets:
    rows = [r for r in ws.iter_rows(values_only=True)]
    hi = next((i for i, r in enumerate(rows) if r and any(c and str(c).strip() in ('Keyword', 'Prompt') for c in r)), None)
    if hi is None: continue
    hdr = [str(c).strip() if c is not None else '' for c in rows[hi]]
    for r in rows[hi + 1:]:
        if not r or not any(c for c in r): continue
        out.append({'sheet': ws.title, **{hdr[i]: (str(c).strip() if c is not None else '') for i, c in enumerate(r) if i < len(hdr) and hdr[i]}})
json.dump(out, sys.stdout)
