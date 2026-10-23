# Figma file "Portfolio — Vincent Le Quang"

https://www.figma.com/design/oMenQL0XteqazfFdGNPSUx — built through the Figma MCP (`use_figma`) on 2026-10-22.

- Page **Site**: section **Components** (Button set Ink/Ghost, Card set Plain/Soft, Stat, Section head, Figure, Shipped strip, Nav bar),
  frame **Desktop · 1440** (nav, hero, stats, case 01 Power Troll, About, footer), frame **Mobile · 390**.
- Variable collection **Portfolio tokens** (one mode, Starter plan): color/*, accent/*, hero/*, dark/* (reference only), space/*, radius/*.
- Text styles: Display/H1, H1 italic, H2, H3, Stat, Quote; Text/Lede, Body, Body medium, Small, Caption, Button, Nav; Label/Mono, Mono small.

## Known leftovers

- An empty frame named "02 · World of Turtle" sits before "About" in the Desktop frame: the script that fills cases 02–04
  hit the Starter plan's MCP call limit after creating it. Delete it or rerun `extend-cases.js` (it removes `0[234] · *` first).
- Images were uploaded as PNG (WebP fills did not render in the MCP screenshots).

## Pitfalls met

- `resize()` after setting sizing modes resets them to FIXED; set `primaryAxisSizingMode = "AUTO"` after resizing.
- Instance child ids (`I5:54;3:26`) are refused by `upload_assets` nodeIds: upload untargeted, then copy the `imageHash`.
- Instance children of a FILL-width component cannot be resized; detach the instance first.
- Custom properties on nodes (`node._foo = …`) throw; keep state in a Map keyed by node id.
