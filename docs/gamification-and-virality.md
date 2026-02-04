# NoVibe.app Gamification + Virality

This document defines game mechanics and viral hooks that reinforce weekly shipping and promote organic sharing.

## Gamification Principles
- Reward consistency, not volume.
- Reduce guilt; reward recovery after a miss.
- Keep rewards lightweight and visible in the weekly loop.

## Gamification Mechanics
### 1) Continuity Streak
- Counts only when: intention set + evidence ingested + review accepted.
- Breaks on missed weeks, but recovery badge encourages return.

### 2) Weekly “Ship Badge”
- Earned when the weekly next step is marked as completed.
- Visualized in history view and the weekly recap.

### 3) Drift Recovery Badge
- Earned when a user completes a weekly cycle after a missed week.
- Prevents guilt-driven drop-off.

### 4) Project “Alive” Score
- States: alive / warming / cold based on recent cycles.
- Used as a subtle indicator on the project screen.

### 5) Consistency Leveling
- Levels unlock at 4, 8, 12 consecutive cycles.
- Used as a profile badge or weekly review footer.

## Viral Hooks
### 1) Weekly Shipping Card
- Auto-generated visual summary of weekly intention + outcome.
- One-click share to X/LinkedIn.

### 2) 4‑Week Progress Snapshot
- Shareable timeline of the last four weeks for a repo.
- Highlights continuity and small shipped steps.

### 3) Opt‑in Leaderboard
- Shows users with consecutive shipping streaks.
- Defaults to private; opt-in required.

### 4) Forwardable Weekly Recap
- Email recap with a share link and CTA.

## GitHub Star Strategy
### 1) Open-source the continuity engine (optional)
- Publish the event normalizer + summary prompt as a separate repo.
- Makes the “No Vibe” concept tangible for devs.

### 2) GitHub Action (recommended)
- A simple action that posts a weekly continuity summary into:
  - A markdown file in the repo
  - A GitHub Discussion
  - A PR comment

### 3) CLI companion (optional)
- Runs locally, outputs weekly summaries in markdown.
- Encourages early adoption without the full web app.

## Fastest Viral Loop
GitHub Action → weekly public summary → shareable card → link back to NoVibe.app.
