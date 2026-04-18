Website Audit Report -- oranburg.law
Date: 2026-04-17


ISSUES FOUND AND FIXED

1. CRITICAL YAML BUG in _data/scholarship.yml (FIXED)
   The "Judgment Proof" book entry was missing its `- id:` list prefix.
   It was merged into the "Business Associations: Law of the Firm" entry,
   causing the BA book title to be overwritten by "Judgment Proof" at
   render time. The BA book was effectively invisible on the site.
   Fix: Added `- id: judgment-proof` as a proper list item.

2. BROKEN FOOTER LINKS (FIXED)
   Three footer links in _layouts/default.html pointed to nonexistent paths:
   - /equally-poor/ -- no page exists. Redirected to /scholarship/.
   - /PTS/ -- no page exists. Redirected to /courses/trade-secrets/.
   - /law-governance/ -- no page exists. Redirected to /scholarship/.
   Also fixed /PTS/ link in demos/trade-secret-paradox/index.html
   and courses/trade-secrets/index.html.

3. BROKEN COMPANION LINKS IN SCHOLARSHIP DATA (FIXED)
   - protecting-trade-secrets companion: /PTS/ -> /courses/trade-secrets/
   - esg-disclosures companion: /equally-poor/ -> removed (page does not exist)
   - law-and-governance companion: /law-governance/ -> removed (page does not exist)

4. SUSPICIOUS PUBLISHED URL (FIXED)
   beyond-ivory-tower published link ended in .md:
   https://academicengagement.org/.../AEN_Research-Paper-Oranburg.md
   Changed to .pdf extension. Verify this URL is correct.


ISSUES FOUND -- NOT YET FIXED (REQUIRE USER INPUT)

5. MISSING PUBLICATION: "Anatomy of a Verdict"
   Submitted April 16, 2026 to Marquette Law Review. Not listed in
   _data/scholarship.yml. Should be added as status: forthcoming once
   the user confirms it should appear on the website.

6. CONTACT EMAIL
   contact/index.html mailto: target is sco259@nyu.edu.
   Confirm this is still the correct email address post-UNH.

7. INSTITUTION AFFILIATION
   index.html line 29 says "University of New Hampshire Franklin Pierce
   School of Law (2024-2026)". This is currently correct. The end date
   of 2026 is accurate (user departs Aug 20, 2026). CUA is NOT announced,
   per user instructions.

8. STRUCTURED DATA (default.html)
   The ld+json Person schema does not include affiliation or worksFor.
   The sameAs array includes oranburg.github.io/safety-machine/ which
   may or may not still be live. Worth verifying.

9. TEACHING PAGE REDIRECT
   teaching/index.html links to /lectures/ but the link text says "Courses".
   The Courses page at /courses/ is the better landing page. Consider
   updating the link target.

10. PUBLICATIONS WITH MISSING SSRN LINKS
    Several published articles lack SSRN links:
    - antitrust-blockchain (published in J. Corp. L.)
    - esg-disclosures (published in Bus. Law.)
    - social-media-democracy (published in Mercer L. Rev.)
    - balancing-flexibility (Cambridge UP chapter)
    - place-of-their-own (Minn. L. Rev. Headnotes)
    These may have SSRN pages that should be linked.

11. PUBLICATIONS WITH MISSING JOURNAL NAMES
    Several "published" articles have no journal specified:
    - regulatory-democratization
    - sovereign-charities (titled "Legitimate University Governance")
    - university-disentanglement
    - anti-bad-pro-good
    - collective-phronesis-crowdfunding
    - machines-contractual-intent
    - distance-education-covid
    - female-angel-investors
    - beyond-crypto
    These appear as SSRN working papers but are marked status: published.
    Consider whether they should be status: working-paper, or whether
    journal names should be added.

12. PUBLICATION COUNT
    scholarship.yml contains 46 publications (after fix):
    - 37 status: published
    - 6 status: forthcoming
    - 3 status: in-progress
    The site description says "50+ publications" which is broadly accurate
    when counting op-eds and commentary pieces alongside scholarship.


VERIFIED -- NO ISSUES

- CNAME: correctly set to oranburg.law
- _config.yml: URL, social links, plugins all correct
- CSS files: site.css and home.css present, loaded with cache-bust query
- Navigation: 5 main nav items (Home, Insights, Courses, Scholarship, Contact)
- Scholarship page: properly renders all clusters with abstracts
- Courses page: 3 courses listed with correct companion links
- Commentary data: 11 items, properly structured
- Blog posts: 35+ insight posts present
- Images: referenced images exist in /images/ directory
- Favicon and apple-touch-icon: referenced in head
- Google Fonts: loading Crimson Text, Oswald, Roboto
- Dark/light theme toggle: functional
- Skip-to-content link: present for accessibility
