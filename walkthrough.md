# Cinematic Portfolio Application Walkthrough: Diyon George

An immersive, festival-grade web portfolio application created for **Diyon George**—award-winning screenwriter, film director, narrative architect, and cinephile—built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and a custom **Web Audio API Sound Engine**.

---

## 📽️ Summary of Accomplishments

### 1. Visual & Auditory Aesthetic ("Midnight Noir")
- **Color Tokens**: Obsidian Black (`#050507`), Warm Projector Gold (`#D4AF37`), Midnight Charcoal (`#121218`), Off-White Script (`#E2E8F0`).
- **35mm Film Grain Simulation**: Real-time canvas overlay rendering dynamic celluloid grain at 14 FPS with subtle vignette.
- **Director's Viewfinder HUD & Frame Shifts**:
  - Live aspect ratio shifting with true letterbox masks (`FULL`, `2.39:1 SCOPE`, `1.85:1 FLAT`, `4:3 ACADEMY`).
  - Viewfinder optical marks: corner brackets, center crosshair, 24.00 FPS indicator, shutter angle, lens info, and recording status.
- **Web Audio Soundscape Engine**:
  - 100% self-contained synthesized audio (no external audio files or network dependencies).
  - Continuous 35mm projector motor & optical audio track hum (toggleable in navbar).
  - Crisp wooden film slate clapboard snap when opening drawers and modals.
  - Delicate acoustic reel sprocket clicks on hover and navigation.
  - Animated live audio frequency waveform visualizer.

---

## 🎬 Portfolio Architecture: The 5 Acts

### Act I: The Hook (Hero)
- **Anchor Quote**: *"The most personal is the most creative." — Martin Scorsese* with subtext: *"...and I'm damn personal about cinema."*
- **Director Slate**: `DIYON GEORGE` — Screenwriter | Film Director | Narrative Architect.
- **Directorial Status**: Kannur University Arts Festival Winner badge, 6+ years narrative experience, 24 FPS markers.
- **Action Buttons**: "Explore Repertoire" (wooden clapboard sound & smooth scroll) and "Request Full Script" (opens pitch desk modal).

### Act II: The Featured Cut (Award-Winning Showcase)
- **Title**: `'വിശപ്പ്, മനിതൻ, നീതി' (Hunger, Man, Justice)`.
- **Accolade**: Kannur University Arts Festival Award Winner (2025–26) with golden laurels.
- **35mm Poster Frame**: Dedicated film poster slot with laurels, technical specifications (2.39:1 Scope, 22 Min, Malayalam), and hover triggers.
- **Directorial Matrix**: Breakdown cards for Lighting (low-key chiaroscuro), Camera Blocking (claustrophobic proximity vs low angles), and Sound Cadence (rain hum and courtroom gavel reverberations).
- **Interactive CTAs**:
  - *"Read Script Excerpt"*: Slides open the Courier Prime screenplay drawer.
  - *"Screener Available Upon Request"*: Launches the protected screener request modal.

### Act III: The Genre Repertoire (Featured Works)
Interactive 3-card grid showcasing Diyon's signature genres:
1. `'വിശപ്പ്, മനിതൻ, നീതി'` (Social Justice / Drama) — Kannur Arts Fest Winner.
2. `'Leg Piece'` (Sarcastic Political / Satire) — Biting dark comedy examining banquet table politics.
3. `'5 Symbols'` (Mystery / Psychological Thriller) — Cryptic occult sigils and high-range noir realism.
- Warm golden spotlight glow on hover, loglines, shot-planning notes, aspect ratio indicators, and moodboard color swatches.
- Treatment dossier viewer modal for each project.

### Act IV: The Chronicle (Discipline & Experience)
- **The Collaborative Creed**: *"I thrive on collaborating with both visionary newcomers and seasoned veterans—fresh heads bring bold energy, while experienced creators bring refined craft. Together, they shape the filmmaker inside me."*
- **The Structural Foundation**: Bachelor of Business Administration (BBA) from Don Bosco Arts and Science College—integrating operational discipline, budgeting, and schedules into artistic filmmaking.
- **The Director's Toolkit**: 4 methodological pillars (Script Separation, Camera Blocking, Genre Versatility, Structural Delivery).
- **6-Year Trajectory**: Milestone timeline from Don Bosco foundations to the Kannur University Arts Festival victory.
- **Action**: "Download Screenplay CV" button.

### Act V: Roll Credits (Directorial Office & Contact)
- **Rolling End Credits Screen**: Minimalist Hollywood credits scroll with speed controller (`PAUSE`, `1X`, `FAST`).
- **Direct Contact Cards**:
  - Direct Phone: `+91 8075865642` with 1-click WhatsApp launcher and copy feature.
  - Direct Email: `diyongeorge136@gmail.com` with compose mail button and copy feature.
  - Location: `Iritty, Kerala, India` with coordinates (`11.9791° N, 75.6669° E`) and live IST clock.
- **Action Buttons**: "Pitch a Project", "Request Script Sample", and "Download CV".

---

## 📜 Interactive Drawers & Modals

1. **Screenplay Drawer (`ScreenplayDrawer.jsx`)**:
   - Industry-standard Courier Prime formatting (sluglines, action lines, centered character names, parentheticals, indented dialogue blocks).
   - Project tab switcher ('Hunger, Man, Justice', 'Leg Piece', '5 Symbols').
   - "Director's Commentary & Camera Blocking" toggle revealing lens choices and lighting notes.
2. **Screener Request Modal (`ScreenerModal.jsx`)**:
   - Dynamic security watermark preview with customized viewer and organization stamps.
3. **Pitch & Script Request Desk (`ProjectPitchModal.jsx`)**:
   - Direct mail and WhatsApp submission generator with pre-filled cinema collaboration briefs.
4. **Director's CV Modal (`DirectorCVModal.jsx`)**:
   - Full professional screenplay & directorial CV formatted with 1-click print / PDF export support.
5. **Project Detail Treatment Modal (`ProjectDetailModal.jsx`)**:
   - In-depth director's treatment breakdown with color palettes, technical blueprints, and cast & crew staging.

---

## 🔍 Validation & Build Verification

- **Vite Production Build**: Verified with `npm run build`
  - Output: `dist/index.html` (1.46 kB), `dist/assets/index-*.css` (41.60 kB), `dist/assets/index-*.js` (384.15 kB)
  - Exit code: `0` (Success, 0 errors, 0 warnings).
- **Audio Context**: Verified zero external asset dependencies; all acoustic sounds (projector hum, clapboard, reel clicks) are synthesized via Web Audio API.
