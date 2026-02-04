# NoVibe.app Architecture (MVP)

This document describes the MVP architecture for NoVibe.app. It is intentionally lean and focused on the continuity loop: Intention → Evidence → Continuity Summary → Next Step.

## Product Architecture
**Core loop:** Intention → Evidence → Continuity Summary → Next Step

**User surfaces**
- Weekly check-in: set intention, optional short note, done/partial/paused.
- Weekly review: intention vs. evidence, continuity summary, next step.
- Project selector: pick a single primary project per week.

**Backend services**
- API service: SSO auth + CRUD for users/projects/intentions/reviews.
- Ingestion service: code-host activity → normalized events.
- Continuity engine (AI): summary + next step from intent + evidence.

**Data stores**
- Relational DB: users, projects, weekly intents, reviews, signals.
- Event store: raw activity events (GitHub/GitLab).

## High-Level System Diagram
User → Web App → API Service → DB
                 ↘ Ingestion Service → Event Store
                  ↘ Continuity Engine → DB
Scheduler → Ingestion Service / Continuity Engine

**Async workflow**
- Weekly scheduler: triggers summaries and recap emails.
- Code-host sync: webhook/cron with de-duplication and normalization.

## System Components

### 1) Web app
- Landing, auth, onboarding.
- Weekly check-in and weekly review.
- History view for momentum over time.

### 2) API + DB
- Users: id, auth, timezone, preferences.
- Projects: id, user_id, repo_id (required), status.
- WeeklyIntentions: week_id, project_id, intent_text, created_at.
- Signals: week_id, source (github/gitlab), type, payload.
- WeeklyReviews: week_id, summary_text, next_step_text, status.

### 3) Code-host integrations (required)
- Providers: GitHub and GitLab (SSO + activity ingestion).
- OAuth scopes for auth and read-only activity ingestion.
- Ingestion: commits, PRs/MRs, active days.
- Normalize and index by week and project.

#### OAuth scope guidance (MVP)
| Provider | Purpose | Suggested scopes |
| --- | --- | --- |
| GitHub | SSO + repo list | `read:user`, `user:email`, `repo` (or `public_repo` if public-only) |
| GitHub | Activity ingestion | `repo` (commits/PRs), `read:org` (org repos) |
| GitLab | SSO + repo list | `read_user`, `read_api` |
| GitLab | Activity ingestion | `read_api` |

### 4) Continuity Engine (AI)
- Input: intent, evidence list, user note (optional), last summary.
- Output: short summary narrative + small next step.
- Store output as editable, user-approved text.

## Workflow (MVP)
- Onboarding → SSO with GitHub or GitLab → choose primary project from repo list.
- Weekly check-in sets intention and optional note.
- End of week: ingest events and generate summary + next step.
- User reviews, edits if needed, and accepts.

## Service Responsibilities
### API Service
- Handles SSO callbacks and user session creation.
- Stores core product data (users, projects, intentions, reviews).
- Enforces access control to repos and project data.

### Ingestion Service
- Fetches repo activity from GitHub/GitLab.
- Normalizes events into a shared schema (commit, PR/MR, issue).
- De-duplicates events and writes to the event store.

### Continuity Engine
- Builds a weekly evidence set from normalized events.
- Produces summary + next step with guardrails.
- Persists results for user review and edit.

## Data Model Details
### Users
- id, provider, provider_user_id, email, timezone

### Repos
- id, provider, provider_repo_id, full_name, visibility

### Projects
- id, user_id, repo_id, status (active/paused)

### WeeklyIntentions
- id, project_id, week_id, intent_text, note_text

### Signals (Normalized Events)
- id, repo_id, week_id, type, title, url, timestamp, author

#### Normalized event schema example
```
{
  "provider": "github",
  "repo_id": "gh:123456",
  "week_id": "2026-W06",
  "type": "pull_request",
  "title": "Add weekly review summary",
  "url": "https://github.com/org/repo/pull/42",
  "timestamp": "2026-02-04T18:22:31Z",
  "author": "octocat"
}
```

### WeeklyReviews
- id, project_id, week_id, summary_text, next_step_text, status

## Authentication and Permissions
- SSO via GitHub or GitLab is required for account creation.
- Repo access is scoped to the user’s granted OAuth scopes.
- Project selection is limited to repos the user can access.

## Ingestion Pipeline
- Initial sync on repo selection to backfill the current week.
- Webhooks for near-real-time updates (if supported by provider).
- Daily cron fallback to handle missed webhooks and rate limits.
- Event normalization to a shared schema used by the Continuity Engine.

## Scheduling and Weekly Cycle
- Weekly scheduler locks the week boundary based on user timezone.
- Evidence window is week start → week end (inclusive).
- Review generation runs after week end; users can edit results.

## Continuity Engine Prompt Inputs
- Intention text + optional note.
- Evidence list (normalized activity).
- Last week summary (if available).

## Observability
- Metrics: sync success rate, events ingested, weekly review completion.
- Logging: provider API errors, webhook failures, prompt failures.

## Security and Privacy
- Store only minimal OAuth tokens with encryption at rest.
- Respect provider rate limits and scopes.
- Avoid storing full code contents; store activity metadata only.

## How it stops “vibe coding”
- Evidence-backed reviews tie intentions to real activity signals.
- The continuity summary ends with one concrete, shippable next step.
- Drift detection forces a decision: update the goal, pause it, or commit to it.

## AI Guardrails
- Never claim “shipped” without evidence.
- Detect “no activity” and suggest recalibration.
- Keep tone neutral and non-judgmental.

## Risks + Mitigations
- Noisy activity signals → require repo selection and week-by-week scoping.
- Provider OAuth friction → keep SSO flow short and clear.
- Missed week → default to pause/recalibrate flow, not failure.
- Rate limits → batch and cache provider sync.

## V1+ Extensions
- Continuity streaks tied to intent + review, not commits alone.
- Drift detection: worked on X, intended Y → update?
- Weekly email recap with summary + next step.
- Optional integrations: Linear, Notion, Trello (as evidence sources).
- Provider rollout: GitLab first, then consider Bitbucket based on demand.
