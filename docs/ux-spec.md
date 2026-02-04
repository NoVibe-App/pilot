# NoVibe.app MVP UX Spec

This spec defines the minimal screen flow and copy for the MVP continuity loop.

## 1) Onboarding
**Goal:** create an account and pick a primary project.

**UI elements**
- “Start with one project” prompt.
- SSO with GitHub or GitLab.
- Project picker from connected repos.

**Primary CTA**
- “Continue”

**Notes**
- If repo list is empty, prompt the user to create or select another repo.

## 2) Weekly Check‑in
**Goal:** capture intention and optional context.

**Fields**
- Intention (single sentence).
- Optional note (1–2 lines).
- Status: done/partial/paused (preselect “in progress”).

**Primary CTA**
- “Save intention”

**Helper copy**
- “Keep it small. What can you ship this week?”

## 3) Weekly Review
**Goal:** show continuity summary and concrete next step.

**Sections**
- Intention (read-only).
- Evidence (GitHub/GitLab activity).
- Summary (editable).
- Next step (editable).
- Drift prompt if intent ≠ activity: “Update the goal or pause it?”

**Primary CTA**
- “Accept and continue”

**Secondary CTA**
- “Edit summary”

## 4) History
**Goal:** show momentum and prior weeks.

**UI elements**
- Weekly cards: intention, summary, status, next step.
- Filter by status (shipped/partial/paused).

## Copy Principles
- Neutral, non-judgmental.
- Short and directive.
- Emphasize “shipping a small step.”
