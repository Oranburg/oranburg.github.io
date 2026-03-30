---
name: YouTube channel data and API access
description: How to access @BizLaw YouTube channel (372 videos, 35 playlists) — API key, channel ID, data file location, and categorization
type: reference
---

**Channel:** @BizLaw (Business Law Education)
**Channel ID:** UCdLxnSUlcEHtrdOt5R51Q1g
**Uploads playlist:** UUdLxnSUlcEHtrdOt5R51Q1g
**Stats (as of 2026-03-30):** 372 videos, 8,350 subscribers, 621,149 views

**API key:** AIzaSyA0o-RUaS1jYIgNNSWVq5g99BsE25KQyE0
**API notes:** Python's urllib fails with SSL cert error on this machine. Use `curl -s` piped to `python3` with `json.JSONDecoder(strict=False)` (some video descriptions have control characters).

**Data file:** `_data/videos.yml` — complete database of all 372 videos organized into:
- `series:` (12 professional/scholarly playlists, 179 videos, mapped to scholarship clusters)
- `teaching_series:` (16 course lecture playlists, 189 videos)
- `personal:` (7 playlists, 46 videos — tennis, fitness, wedding songs, etc. — not for website)

**Key playlists for the website:**
- "Organized: The Business Law Breakdown" — 102 videos, the flagship series
- "Law Professors Mission to Israel" — 26 videos
- "What Is Antitrust Law?" — 14 episodes
- "Moral Philosophy of Business Law" — 14 symposium videos
- "Overview of Trade Secrets" — 5 videos (pairs with PTS casebook)
- "Financial Toolkit for Lawyers" — 4 videos

**To refresh:** Re-run the YouTube Data API v3 calls with the uploads playlist ID to get new videos. The API key is a YouTube Data API v3 key.
