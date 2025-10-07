# Bubbles!

An interactive chat-triggered bubble overlay for Twitch/YouTube streamers.

## Overview

Bubbles! is a fun, engaging stream overlay that responds to viewer interaction. When viewers type the `!bubbles` command in chat, colorful bubbles rise up across the broadcaster's screen, creating a playful and dynamic visual effect.

## Features

- Chat-activated bubble animation
- Bubbles rise naturally across the screen
- Simple `!bubbles` command for viewers
- Lightweight and easy to integrate

## Installation

### Prerequisites
- StreamElements account
- OBS Studio (or other streaming software with browser source support)

### Setup Instructions

1. **Download the latest release**
   - Go to the [Releases](../../releases) page
   - Download the latest version (V.YY.MM.DD format)
   - Extract the ZIP file

2. **Setup in StreamElements**
   - Log into your StreamElements dashboard
   - Navigate to Streaming Tools → My Overlays
   - Create a new overlay or select an existing one
   - Click "Add Widget" → "Static/Custom" → "Custom Widget"

3. **Install Bubbles! Widget**
   - Open the Bubbles files from the downloaded ZIP
   - In StreamElements custom widget editor:
     - Copy contents from `HTML` file → Paste into HTML tab
     - Copy contents from `CSS` file → Paste into CSS tab
     - Copy contents from `JS` file → Paste into JS tab
     - Copy contents from `Fields` file → Paste into Fields tab (if present)
   - Click "Save"

4. **Add to OBS**
   - In StreamElements, copy the overlay URL
   - In OBS, add a new Browser Source
   - Paste the StreamElements overlay URL
   - Set width and height as needed (1920x1080 recommended)
   - Click "OK"

## Usage

### Commands

**For viewers:**
- `!bubbles` - Trigger the bubble animation

That's it! Just type the command and watch the bubbles flow.

## Versioning

This project uses date-based versioning in the format `V.YY.MM.DD`.

See the [Releases](../../releases) page for version history and changelogs.

## Roadmap

Planned features for future releases:

- [ ] Audio feedback when bubbles are triggered
- [ ] Additional trigger events (follows, subs, donations, etc.)
- [ ] Customization options (bubble colors, sizes, speed)
- [ ] Multiple animation styles

## Support

If you encounter issues or have questions, please open an issue on the [Issues](../../issues) page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made to add a splash of fun to your streams! 🫧
