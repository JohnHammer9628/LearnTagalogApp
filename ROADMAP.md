# Johns Tagalog Coach Roadmap

This roadmap is intentionally incremental so we can ship in small steps, review each change, and adjust direction safely.

## Direction

- Priority: learning quality first
- Data scope: local-only for now (browser storage)
- Delivery style: small increments (one focused feature at a time)

## Step-by-Step Plan

### Step 1: Mistake Review Queue
- Resurface recently missed cards before new/random cards.
- Add a small `Review queue: N` indicator in the study UI.
- Success criteria: missed cards reappear quickly in upcoming questions.

### Step 2: Wrong-Answer Coaching
- Show a compact coaching block after incorrect answers.
- Include correct answer, pronunciation, and a short grammar/context hint.
- Success criteria: every incorrect answer provides clear next-action feedback.

### Step 3: Lightweight Spaced Repetition
- Add simple post-answer ratings (`Again`, `Good`, `Easy`).
- Use due scheduling so overdue cards are prioritized in study selection.
- Success criteria: cards move from short-term correction to longer-term review.

### Step 4: Session Summary + Weak Areas
- Add an end-of-session summary with attempts, accuracy, XP delta, and weak categories.
- Suggest what to focus on next based on session performance.
- Success criteria: each session ends with actionable guidance.

### Step 5: Custom Pack Quality Upgrade
- Add duplicate detection for custom entries.
- Add edit/delete controls and JSON export/import for backup.
- Success criteria: custom packs are easier to manage long-term.

### Step 6: Motivation Layer
- Add milestone badges (streak/mastery/XP) and light challenge goals.
- Keep engagement enhancements subtle and non-intrusive.
- Success criteria: improved motivation without slowing core study flow.

## Guardrails

- Keep backward compatibility with existing saved progress.
- After each step: quick manual QA, `npm run build`, then commit.
- No backend/cloud sync in this phase.
