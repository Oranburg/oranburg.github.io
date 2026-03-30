---
name: Podbean podcast data
description: Organized podcast — feed URL, episode count, relationship to YouTube playlist, and data file location
type: reference
---

**Podcast:** Organized: The Business Law Breakdown
**Host:** Seth C. Oranburg
**Feed:** https://feed.podbean.com/bizlawbreakdown/feed.xml
**Total episodes:** ~108 across 12+ seasons (RSS feed only returns most recent 28)
**Platform:** Podbean

**YouTube mirror:** The same podcast is the "Organized: The Business Law Breakdown" YouTube playlist (PL2OBGU7rnJY6wW-y_1zrruypofyWci9pu) with 102 videos — already captured in `_data/videos.yml`.

**Data file:** `_data/podcasts.yml` has 28 episodes from the RSS feed (season 1 contracts + 3 specials). The full catalog is in the YouTube data. Don't re-fetch — cross-reference `_data/videos.yml` for the complete episode list.

**Podbean embed pattern:** `https://www.podbean.com/player-v2/?i=p6w7w-1260bda-pbblog-playlist&share=1&download=1&order=serial&limit=30`
- Filter by season: append `&filter=season&season=NUMBER`
- The lectures page currently embeds season 12 (Trade Secrets)
