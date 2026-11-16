# Working on creditcardreview.org

Standing rule from Aaron (applies to every session, scheduled or not):
1. Check everything systematically: every card and every fact on every .html page, against the issuer's own page (or two agreeing sources from the last 30 days), consistent across reviews, comparisons, roundups, index.html and articles.html.
2. Correct everything systematically: fix confirmed facts and the prose that depends on them, update "Updated" stamps and sitemap lastmod; list discontinued or renamed cards for Aaron's decision.
3. Report: every change (old -> new, source), a specific "spot-check these" list, could-not-verify, needs-your-decision, quality checks. Save to Google Drive folder "creditcardreview.org audits".
4. Suggest new content: 3-5 ideas in _ideas/content_ideas.json plus one draft article as a draft/ pull request. Aaron publishes with the "creditcardreview.org: Write & Publish Article Ideas" scheduled task (Run now) or by merging the draft PR.

Never invent a number; never publish anything unverified; do not change design, CSS, URLs or images.
No build step: the HTML files are the site. Deploy: push to main (Hostinger publishes main). QA script is in the weekly audit task.

Site-wide rules added Nov 16, 2026 (every new or rebuilt page must follow them):
- Apply/Open account/Visit site buttons: href = the product's "official_url" from /links.json, plus data-product="<key>" target="_blank" rel="sponsored nofollow noopener", and <script src="links.js" defer></script> before </body>. Add a new key to links.json for any new product. Never use href="#".
- <head> must contain the AdSense loader: <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4897434778726769" crossorigin="anonymous"></script> (no manual ad units), and a self-referencing canonical on https://www.creditcardreview.org/.
- Reviews, comparisons and roundups: the one-line div.ccr-adv-disclosure bar directly after </header> (copy it from any review).
- Footer must link privacy-policy.html and disclosure.html.
