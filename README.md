# vincentlequang — personal site

Static, no build: `index.html`, `css/style.css`, `js/main.js`, `img/`.
Fonts from Google Fonts (Cormorant Garamond, Inter, JetBrains Mono). Spotify and YouTube are embedded with iframes;
the 30-second previews on the singles grid use Spotify's public preview mp3 URLs.

Preview: `python3 -m http.server 8787` then open http://localhost:8787/.

Content sources: Spotify artist 2CK1benPbEJGRluk7PitmP (20 singles, covers in img/covers/),
YouTube @vincentlequang2 (latest video: Drama Queen), bug.dobuki.net (BUG, 122 pages, finalist, Royal Screenplay, at
Cinema Royale Paris Edition 2026), ilovevincent.dobuki.net (I love Vincent tee).

The tee is drawn in CSS: the Fourthwall product photos are served through an image proxy that refuses direct downloads.
Swap `.tee` for a real photo exported from the Fourthwall dashboard when you have one.

## Layout of this repo

- `/` : the personal site (music, BUG, merch, games).
- `/design/` : the design portfolio and résumé (`design/resume.html`, `design/Vincent-Le-Quang-resume.pdf`).
