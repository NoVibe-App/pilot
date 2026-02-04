# NoVibe.app MVP PRD

## Goal
Deliver a continuity loop that converts weekly intention into evidence-backed progress and a concrete next step.

## Target Users
Primary: Side Project Devs who start many repos but struggle to ship consistently.

## Problem
Vibe coding creates scattered effort without shipped outcomes. Existing tools track activity but do not preserve continuity or guide the next step.

## Success Criteria
- 70% of onboarded users complete a weekly check-in within 7 days.
- 50% of active users complete 2 consecutive weekly cycles.
- Users report increased clarity about what to do next.

## MVP Scope
### In scope
- Weekly intention check-in (single project).
- Evidence capture from GitHub or GitLab (required).
- Continuity summary + next step generation (AI).
- Weekly review and edit/accept flow.
- History view of prior weeks.

### Out of scope (MVP)
- Multi-project management.
- Team features.
- Deep integrations (Linear/Notion/Trello).
- Advanced analytics or forecasts.

## Core Loop
Intention → Evidence → Continuity Summary → Next Step

## User Stories
- As a user, I can set a weekly intention in one sentence.
- As a user, I can sign in with GitHub or GitLab.
- As a user, I can choose a project from my GitHub or GitLab repos.
- As a user, I receive a weekly summary that reflects what I actually did.
- As a user, I get one concrete next step I can ship quickly.
- As a user, I can edit and accept the weekly summary.

## Key Screens
- Onboarding + GitHub/GitLab SSO
- Weekly Check-in
- Weekly Review
- History

## Data Model (MVP)
- User: id, email, auth_provider, timezone
- Project: id, user_id, repo_id (optional), status
- WeeklyIntention: id, project_id, week_id, intent_text
- Signal: id, week_id, source, type, payload
- WeeklyReview: id, week_id, summary_text, next_step_text, status

## AI Guardrails
- Never claim “shipped” without evidence.
- Detect “no activity” and recommend recalibration.
- Keep tone neutral and non-judgmental.

## Risks
- Noisy activity → mitigated via repo selection and weekly scoping.
- Missed week → pause/recalibrate flow to prevent drop-off.
- Over-automation → keep review editable and user-approved.
