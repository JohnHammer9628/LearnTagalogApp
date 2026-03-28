# LearnTagalogApp

LearnTagalogApp is a lightweight web app for English speakers learning Tagalog through active recall.

## Features

- Flashcards: reveal English meanings from Tagalog prompts
- Multiple-choice quiz mode
- Typing challenge mode
- Category filtering (Greetings, Basics, Questions, Everyday, Numbers, Food)
- Direction toggle (`Tagalog -> English` or `English -> Tagalog`)
- Adaptive study focus (`Smart Mix`, `New First`, `Review Weak Items`)
- XP, accuracy tracking, and daily streak
- Per-card mastery tracking (seen count + mastery percentage)
- Keyboard shortcuts (`Enter` to reveal/check, `N` for next)
- Reset progress control
- Local progress persistence via browser `localStorage`

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Vite (dev server + hot reload)

## Run Locally With Live Reload

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Vite opens the app automatically. If needed, open `http://127.0.0.1:5173`.

Now when we edit files, the page refreshes automatically.

## Project Structure

- `index.html` - App layout and structure
- `styles.css` - Visual design and responsive styles
- `app.js` - Study data, modes, scoring, and persistence logic

## Roadmap

- Add spaced repetition scheduling
- Add audio pronunciation playback
- Add phrase-level lessons and grammar notes
- Add progress export/import

## License

MIT
