# GlobeTrotter — Product Requirements Document
### Personalized Multi-City Travel Planning Platform (MERN Stack)

**Version:** 1.0
**Status:** Implementation-Ready Draft
**Stack:** MongoDB, Express.js, React.js, Node.js (MERN)
**Prepared for:** Engineering, Design, and QA teams

---

## Table of Contents

1. Product Overview
2. Problem Statement
3. Product Vision
4. Goals
5. Non-Goals
6. Target Users
7. User Personas
8. User Stories
9. Functional Requirements
10. Feature Specifications
11. User Flows
12. UX/UI Requirements
13. MERN Architecture
14. MongoDB Data Model
15. API Specification
16. Authentication & Authorization
17. AI Architecture
18. Real-Time Collaboration Architecture
19. Budget Calculation Logic
20. Public Sharing Architecture
21. Security Requirements
22. Non-Functional Requirements
23. Error & Edge Cases
24. MVP Scope
25. Phase 2 Features
26. Future Features
27. Development Milestones
28. Testing Strategy
29. Deployment Architecture
30. Acceptance Criteria

---

## 1. Product Overview

GlobeTrotter is a full-stack, personalized multi-city travel planning platform built on the MERN stack. It allows users to construct complete trips composed of multiple city stops, each with dated activities, budgets, and schedules. The platform combines manual itinerary building with AI-assisted itinerary generation and budget optimization, real-time multi-user collaboration, and public trip sharing/cloning.

The system is designed as a portfolio/demo-grade application with production-quality architecture: secure authentication, a normalized MongoDB schema, a documented REST API, Socket.IO-based collaboration, and a responsive React frontend.

---

## 2. Problem Statement

Planning a multi-city trip today is fragmented across spreadsheets, notes apps, maps, and multiple booking sites. Existing consumer tools typically address a single slice of the problem — either flight/hotel booking, or static itinerary note-taking — but few combine:

- Structured multi-city, day-by-day itinerary building
- Automatic, transparent budget calculation and overspend detection
- AI-generated itineraries that a user can still fully edit before committing
- Real-time collaborative planning with multiple travelers
- Easy public sharing and cloning of complete itineraries

Travelers currently re-enter the same trip information across tools, lose track of running costs, and have no easy way to co-plan with travel companions in real time. GlobeTrotter consolidates these needs into one product.

---

## 3. Product Vision

GlobeTrotter aims to be the fastest way for a group of travelers to go from "we should take a trip" to a fully-costed, day-by-day itinerary — using AI to generate a strong starting draft, structured tools to refine it, and real-time collaboration to keep everyone aligned, all while keeping the user in full control of every AI suggestion before it is saved.

---

## 4. Goals

- Allow any authenticated user to build a complete multi-city trip itinerary with dated activities and automatic cost roll-ups.
- Provide an AI itinerary generator that turns a natural-language prompt into a structured, editable draft — never auto-committed.
- Provide an AI budget optimizer that gives specific, actionable, quantified savings recommendations rather than a generic "over budget" flag.
- Support real-time multi-user collaboration on a single trip with visible attribution of changes.
- Allow trips to be published publicly and cloned by other users into their own editable copy.
- Ship a responsive, polished UI suitable for demonstration and real usage on desktop and mobile.
- Maintain a secure, well-structured REST API and normalized MongoDB schema that a new developer can extend without guesswork.

## 5. Non-Goals (v1)

- No real payment processing, booking, or third-party inventory integration (flights/hotels) in MVP.
- No native mobile apps (responsive web only).
- No offline-first support.
- No multi-language UI translation in MVP (only a stored `languagePreference` field for future use).
- No production-grade AI model hosting/training — GlobeTrotter integrates with a third-party LLM API rather than building one.
- No enterprise/team billing or multi-tenant admin hierarchy.

---

## 6. Target Users

- Independent travelers planning multi-city domestic or international trips.
- Small groups of friends/family who want to co-plan a trip together.
- Budget-conscious travelers who want cost transparency and optimization.
- Students/travel bloggers who want to publish and share itineraries publicly.
- Users who want to skip manual planning and start from an AI-generated draft.

## 7. User Personas

**Persona 1 — "Planner Priya" (Primary)**
Age 27, plans a yearly multi-city trip with friends. Wants full control over dates, activities, and budget. Uses spreadsheets today. Needs: drag-and-drop itinerary building, clear budget breakdown, ability to invite friends to co-edit.

**Persona 2 — "Spontaneous Sam" (Primary)**
Age 24, wants a trip planned quickly with minimal effort. Will type a one-line prompt like "5 days in Goa, budget ₹15,000, beach + food lover" and expects a strong, editable starting itinerary. Needs: fast AI generation, easy edit-and-accept flow.

**Persona 3 — "Budget-conscious Ben" (Secondary)**
Age 30, tracks every rupee/dollar of trip cost. Needs: automatic cost roll-up by category, over-budget warnings, and specific ways to cut cost without losing trip quality.

**Persona 4 — "Sharer Sara" (Secondary)**
Age 29, travel blogger who publishes itineraries for others to copy. Needs: clean public trip pages, one-click clone for readers, social sharing links.

**Persona 5 — "Admin Alex" (Internal)**
Platform operator who needs visibility into usage: total users, trips, popular cities/activities, and basic moderation ability.

---

## 8. User Stories

Representative stories (full set expands per feature in Section 10):

- As a new user, I want to sign up with email/password so that I can save my trips.
- As a returning user, I want to log in and see my trips again so I don't lose my planning work.
- As a planner, I want to create a trip with a name, dates, and budget so I have a container for my itinerary.
- As a planner, I want to add multiple cities with arrival/departure dates so I can sequence a multi-city trip.
- As a planner, I want to reorder cities and activities via drag-and-drop so I can quickly adjust my plan.
- As a budget-conscious traveler, I want to see a live cost breakdown by category so I know exactly where my money goes.
- As a budget-conscious traveler, I want specific suggestions when I'm over budget so I can act on them immediately instead of guessing what to cut.
- As a spontaneous traveler, I want to type one sentence and get a full draft itinerary so I don't have to start from a blank page.
- As a planner, I want to review and edit an AI-generated itinerary before it's saved so the AI never overwrites my real trip.
- As a group traveler, I want to invite friends to co-edit a trip in real time so we can plan together without version conflicts.
- As a group traveler, I want to see who made which change so I can follow what my collaborators did.
- As a blogger, I want to publish my trip publicly and share a link so others can view (and clone) my itinerary.
- As a visitor, I want to clone a public trip into my own account so I can use it as a starting point.
- As a user, I want to update my profile and delete my account if I choose so I retain control of my data.
- As an admin, I want to see platform-wide usage metrics so I can understand engagement.

---

## 9. Functional Requirements

High-level functional requirements grouped by module (detailed spec per feature is in Section 10):

| # | Requirement | Module |
|---|---|---|
| FR-1 | System shall allow registration, login, logout, password reset via JWT auth | Auth |
| FR-2 | System shall persist sessions and protect authenticated routes | Auth |
| FR-3 | System shall let users create, edit, delete, duplicate, and share trips | Trips |
| FR-4 | System shall support draft and published trip states | Trips |
| FR-5 | System shall allow adding/removing/reordering city stops within a trip | Itinerary |
| FR-6 | System shall allow adding/editing/removing/reordering activities within a city stop | Itinerary |
| FR-7 | System shall provide searchable city and activity catalogs with filters | Discovery |
| FR-8 | System shall render itinerary in both List and Calendar/Timeline views | Itinerary |
| FR-9 | System shall auto-calculate cost totals by category and flag over-budget trips | Budget |
| FR-10 | System shall generate an AI itinerary draft from a natural-language prompt, without auto-saving | AI |
| FR-11 | System shall generate quantified budget-optimization recommendations that a user can apply individually | AI |
| FR-12 | System shall support real-time multi-user editing via Socket.IO with change attribution | Collaboration |
| FR-13 | System shall support public trip URLs with read-only access and a "Clone Trip" action | Sharing |
| FR-14 | System shall let users manage profile, settings, and delete their account | Profile |
| FR-15 | System shall expose an admin dashboard with platform usage metrics | Admin |

---

## 10. Feature Specifications

Each feature below includes: Description, User Story, Functional Requirements, API Requirements, Database Requirements, Frontend Requirements, Acceptance Criteria, and Edge Cases.

### 10.1 Authentication

**Description:** Email/password authentication using JWT, with bcrypt password hashing, protected routes, and a forgot/reset password flow.

**User Story:** As a user, I want to securely sign up and log in so my trips are private to me.

**Functional Requirements:**
- Register with name, email, password (validated: min 8 chars, at least 1 number).
- Login returns a JWT (access token) and sets session state client-side.
- Forgot-password sends a time-limited reset token via email (or logs it in dev mode).
- Reset-password consumes the token once and invalidates it after use.
- `GET /api/auth/me` returns the current authenticated user from a valid token.
- Protected routes redirect unauthenticated users to `/login`.

**API Requirements:** See Section 15, Authentication group.

**Database Requirements:** `User` collection with hashed password, reset-token fields (`resetPasswordToken`, `resetPasswordExpires`), timestamps.

**Frontend Requirements:** Login/Register/ForgotPassword/ResetPassword pages, form validation (client + server), `AuthContext` or Redux auth slice, Axios interceptor to attach JWT and handle 401 by logging out.

**Acceptance Criteria:**
- Given valid credentials, when a user registers, then a new `User` document is created with a bcrypt-hashed password and the user is auto-logged in.
- Given an expired or reused reset token, when a user submits a new password, then the API returns 400 and the password is not changed.
- Given no/invalid JWT, when a protected API is called, then the API returns 401.

**Edge Cases:**
- Duplicate email registration → 409 Conflict with clear message.
- Password reset requested for non-existent email → generic success message (no user enumeration).
- Expired JWT mid-session → client redirects to login and preserves intended destination for post-login redirect.

---

### 10.2 Dashboard

**Description:** Post-login landing page summarizing the user's trips and quick actions.

**User Story:** As a returning user, I want an at-a-glance view of my trips so I can quickly resume planning or start a new trip.

**Functional Requirements:**
- Show welcome message with user's name.
- Show upcoming trips (start date ≥ today), recent trips (most recently updated), trip count, and next upcoming travel date.
- Show a "Plan New Trip" CTA and a small set of recommended destinations.
- Show a budget highlight (e.g., total planned spend across upcoming trips).

**API Requirements:** `GET /api/trips?filter=upcoming`, `GET /api/trips?filter=recent`, `GET /api/dashboard/summary` (aggregated counts/highlights).

**Database Requirements:** Aggregation query over `Trip` collection filtered by `userId`, sorted/filtered by `startDate`/`updatedAt`.

**Frontend Requirements:** `DashboardPage` composed of `TripSummaryCard`, `RecommendedDestinations`, `BudgetHighlightWidget`; skeleton loading states; empty state ("You have no trips yet — plan your first trip").

**Acceptance Criteria:**
- Given a user with 0 trips, when they visit the dashboard, then an empty state with a CTA to create a trip is shown instead of empty lists.
- Given a user with trips, then upcoming and recent trips are correctly filtered/sorted by date.

**Edge Cases:**
- All trips are drafts (no published trips) → still shown in "recent trips."
- Trip with no `startDate` set → excluded from "upcoming," included in "recent."

---

### 10.3 Create Trip / My Trips

**Description:** Trip creation form and a card-based trip management list.

**User Story:** As a planner, I want to create a trip shell with core metadata and budget so I can start adding cities.

**Functional Requirements:**
- Create trip with: name, start date, end date, description, cover image, total budget, currency, status (draft/published).
- Trips list displays as cards with name, cover image, date range, city count, estimated cost, and status.
- Card actions: View, Edit, Delete, Duplicate, Share.
- Duplicate creates a full deep copy of a trip (stops, activities) owned by the same user, status reset to draft.

**API Requirements:** `POST /api/trips`, `GET /api/trips`, `GET /api/trips/:id`, `PUT /api/trips/:id`, `DELETE /api/trips/:id`, `POST /api/trips/:id/clone` (used for both self-duplicate and public clone), `POST /api/trips/:id/share`.

**Database Requirements:** `Trip` collection (see Section 14) referencing `userId`; cover image URL stored after Cloudinary upload.

**Frontend Requirements:** `CreateTripForm` (multi-step or single form with image upload via Multer/Cloudinary), `TripCard`, `MyTripsPage` grid with filter/sort (status, date), confirm-delete modal, toast notifications on all mutating actions.

**Acceptance Criteria:**
- Given required fields (name, start date, end date) are filled, when the user submits, then a new `Trip` document is created with `status: "draft"` by default.
- Given `endDate < startDate`, then client and server both reject with a validation error.
- Given a user deletes a trip, then all associated `TripStop`, `TripActivity`, and `Expense` documents are also removed (cascade) or the trip is soft-deleted (implementation choice documented — recommended: cascade hard delete for MVP).

**Edge Cases:**
- Cover image upload fails → trip still created with a default placeholder image; user can retry upload later.
- Trip with 0 cities marked "published" → allowed but flagged in UI as incomplete.

---

### 10.4 Itinerary Builder (Cities & Activities)

**Description:** Core module for adding city stops with dates and nesting activities within each stop, with drag-and-drop reordering.

**User Story:** As a planner, I want to add, sequence, and schedule cities and activities so my trip has a concrete day-by-day plan.

**Functional Requirements:**
- Add a city stop with arrival/departure dates; search cities via the City Search module.
- Reorder city stops via drag-and-drop; order persists as an `order` integer field.
- Remove a city stop (cascades to its activities).
- Add/edit/delete activities within a stop: name, description, category, date, start time, end time, duration, estimated cost, image, notes.
- Reorder activities within a day via drag-and-drop.
- Prevent an activity's date from falling outside its parent stop's date range (validation).

**API Requirements:** Stops and Activities endpoint groups in Section 15.

**Database Requirements:** `TripStop` (references `tripId`, `cityId`, `order`, `arrivalDate`, `departureDate`) and `TripActivity` (references `tripStopId`, `order`, plus activity fields) — see Section 14 for embedding-vs-reference rationale.

**Frontend Requirements:** `ItineraryBuilderPage` with a stop list (React DnD sortable list), `ActivityForm` modal, `ActivityCard`, optimistic UI updates on reorder with rollback on API failure.

**Acceptance Criteria:**
- Given a user drags stop B above stop A, when the drop completes, then the API persists the new `order` values and a page refresh preserves the new order.
- Given an activity's date is outside the parent stop's date range, then the form blocks submission with an inline error.

**Edge Cases:**
- Two stops with overlapping date ranges → allowed (e.g., overnight travel between cities) but UI shows a soft warning, not a hard block.
- Deleting a stop that has activities with real-time collaborators actively viewing it → collaborators receive a Socket.IO event removing the stop from their view immediately.

---

### 10.5 City Search

**Description:** Searchable, filterable catalog of cities used to add stops to a trip.

**User Story:** As a planner, I want to search and filter cities so I can quickly find and add stops to my trip.

**Functional Requirements:**
- Search by city name/country (text search).
- Filter by country, region, cost index (range), popularity (range/sort).
- Each result shows name, country, image, short description, cost index, popularity.
- "Add to Trip" adds the city as a new `TripStop` on the currently open trip.

**API Requirements:** `GET /api/cities?search=&country=&region=&costIndex=&popularity=&page=&limit=`.

**Database Requirements:** `City` collection, indexed on `name` (text index), `country`, `region`, `costIndex`, `popularity`.

**Frontend Requirements:** `CitySearchPage`/modal with filter sidebar, debounced search input, paginated/infinite-scroll results grid, `CityCard`.

**Acceptance Criteria:**
- Given a search term, when results return, then only cities matching the text/filters are shown, paginated server-side.
- Given "Add to Trip" is clicked while no trip context is active, then the user is prompted to select or create a trip first.

**Edge Cases:**
- No results match filters → empty state with "clear filters" action.
- City already added to the trip → "Add to Trip" shows as "Already Added" (disabled) instead of duplicating.

---

### 10.6 Activity Search

**Description:** Searchable, filterable catalog of activities scoped to a selected city.

**User Story:** As a planner, I want to discover activities for a city so I can populate my itinerary quickly.

**Functional Requirements:**
- Filter by activity type/category, cost (range), duration (range).
- Activity card shows image, name, description, category, duration, estimated cost.
- Actions: Add to itinerary (creates a `TripActivity` under the selected stop/day), Remove, View details.

**API Requirements:** `GET /api/cities/:cityId/activities?type=&cost=&duration=`.

**Database Requirements:** `Activity` collection (catalog, city-scoped) distinct from `TripActivity` (trip-instance copy — see Section 14 embedding rationale).

**Frontend Requirements:** `ActivitySearchPanel` opened from within a city stop, filter chips, `ActivityCard`, "View details" modal.

**Acceptance Criteria:**
- Given a city with no cataloged activities, then an empty state is shown with an option to add a custom activity manually.
- Given "Add to itinerary," then a new `TripActivity` is created referencing the catalog `Activity` (copy-on-add pattern so future edits to the catalog don't retroactively change saved trips).

**Edge Cases:**
- Activity added twice to same day → allowed (e.g., user wants two visits), no dedup enforced.
- Catalog activity later deleted from `Activity` collection → does not affect already-added `TripActivity` copies.

---

### 10.7 Itinerary View (List + Calendar/Timeline)

**Description:** Two read/edit views of the full itinerary: chronological List View (Day → City → Activities) and a Calendar/Timeline view.

**User Story:** As a planner, I want to view my whole trip chronologically so I can see the full plan at a glance and make quick edits.

**Functional Requirements:**
- List View groups activities by Day, then City, in chronological order.
- Calendar/Timeline View shows the full trip on a horizontal or vertical timeline with expandable/collapsible days.
- Inline editing of activity details from either view.
- Reordering and moving an activity between days supported from the Timeline view.

**API Requirements:** `GET /api/trips/:id` (returns full nested itinerary — see Section 15 response shape), `PUT /api/trips/:tripId/activities/:activityId` for inline edits and day moves.

**Database Requirements:** Computed server-side or client-side grouping from `TripStop` + `TripActivity` collections ordered by `date`, `startTime`.

**Frontend Requirements:** `ListView` and `TimelineView` components sharing a common itinerary data hook (`useItinerary`), toggle switch between views, inline edit popovers, drag handles for cross-day moves.

**Acceptance Criteria:**
- Given a trip with activities across 3 days, then List View renders exactly 3 day groups in date order, each with correctly nested city/activity data.
- Given a user drags an activity from Day 1 to Day 2 in Timeline View, then the activity's `date` field updates and the change persists.

**Edge Cases:**
- Activity moved to a day outside any stop's date range → blocked with inline validation message.
- Empty day (stop spans a day with no activities) → still rendered with an "Add activity" prompt, not hidden.

---

### 10.8 Budget Management

**Description:** Automatic, category-based cost roll-up with visual breakdown and over-budget warnings.

**User Story:** As a budget-conscious traveler, I want an automatic, categorized cost breakdown so I always know my trip's financial status.

**Functional Requirements:**
- Auto-calculate: transportation, accommodation, activity, food/meals, miscellaneous, total cost, average cost/day.
- Display pie chart (cost by category) and bar chart (cost by day or by city) via Recharts.
- Show budget progress bar and remaining budget.
- If `totalEstimatedCost > userBudget`, display a persistent over-budget warning banner and trigger the Smart Budget Optimizer (Section 10.9).

**API Requirements:** `GET /api/trips/:id/budget` (returns computed breakdown; can also be computed client-side from itinerary data for MVP simplicity — documented decision in Section 19).

**Database Requirements:** `Expense` collection (category, amount, tripId, optional `tripActivityId`/`tripStopId` reference) OR computed on the fly from `TripActivity.estimatedCost` plus stop-level transport/accommodation entries — see Section 19 for the recommended approach.

**Frontend Requirements:** `BudgetDashboard` with Recharts `PieChart`/`BarChart`, `BudgetProgressBar`, `OverBudgetBanner` linking to optimizer.

**Acceptance Criteria:**
- Given itinerary activities with costs, when the budget view loads, then totals match the sum of all `TripActivity.estimatedCost` plus stop-level cost fields, grouped correctly by category.
- Given `totalEstimatedCost > userBudget`, then the over-budget banner is shown; otherwise it is hidden.

**Edge Cases:**
- Trip with `userBudget` unset (0/null) → over-budget logic skipped; UI shows "no budget set" state instead of a false warning.
- Activity cost edited while budget view is open in another collaborator's browser → Socket.IO event triggers a live recalculation.

---

### 10.9 AI Smart Itinerary Generator

**Description:** Users enter a natural-language trip prompt; the system calls an LLM API and returns a structured JSON draft itinerary that the user previews, edits, and explicitly accepts before it is saved.

**User Story:** As a spontaneous traveler, I want to describe my trip in one sentence and get a full, editable draft so I don't have to start planning from scratch.

**Functional Requirements:**
- Accept free-text prompt (e.g., "5 days in Goa, budget ₹15,000, beach + food lover").
- Backend constructs an LLM prompt requesting a JSON-only response matching a defined schema (trip title, duration, cities, day-wise itinerary with activities incl. name/category/startTime/duration/estimatedCost, budget breakdown, suggestions).
- Backend validates the LLM's JSON response against the schema (e.g., using a JSON schema validator); on validation failure, retry once with a stricter prompt, then surface a friendly error.
- The generated draft is **never** written directly to the user's trip. It is returned to the client as a preview object.
- User can edit any field of the draft in the preview UI.
- On "Accept," the draft (with any edits) is converted into real `Trip`/`TripStop`/`TripActivity` documents.
- User can discard the draft without any database writes.

**API Requirements:** `POST /api/ai/generate-itinerary` — Request: `{ prompt: string, existingTripId?: string }`. Response: `{ draft: { tripName, duration, cities[], days[], budgetBreakdown, suggestions[] } }`. No DB writes occur in this call.
Saving the accepted draft reuses standard trip/stop/activity creation endpoints (`POST /api/trips`, bulk stop/activity creation) so there is one source of truth for trip persistence logic.

**Database Requirements:** No dedicated collection required for drafts in MVP (draft lives in-memory/client-state only); optionally log generation requests in an `AIGenerationLog` collection (prompt, response, timestamp, userId) for Phase 2 analytics/debugging.

**Frontend Requirements:** `AIGeneratorModal` (prompt input, loading state with progress messaging), `AIDraftPreview` (editable day-by-day preview reusing `ListView`/`ActivityForm` components), `Accept`/`Discard`/`Regenerate` actions.

**Acceptance Criteria:**
- Given a valid prompt, when generation completes, then a structured draft is shown for preview and **no** `Trip` document exists yet.
- Given the user clicks "Accept," then a new (or updated) `Trip` with corresponding `TripStop`/`TripActivity` documents is created exactly matching the (possibly edited) draft.
- Given the LLM returns malformed JSON, then the system retries once, and if still malformed, shows an error without leaving partial data in the database.

**Edge Cases:**
- Prompt with no clear budget → AI still generates a itinerary; budget breakdown fields default to estimated costs with `suggestions` noting budget was assumed.
- Prompt targeting a city not in the `City` catalog → AI-generated city is stored as a free-text city reference (not linked to `City` collection) until/unless matched.
- User regenerates repeatedly → each call is independent and stateless; no draft history retained in MVP (Phase 2: keep last N drafts).

---

### 10.10 Smart Budget Optimizer

**Description:** When a trip is over budget, the system returns specific, quantified, actionable recommendations rather than a generic warning.

**User Story:** As a budget-conscious traveler, I want concrete suggestions with dollar amounts so I can immediately act to bring my trip under budget.

**Functional Requirements:**
- Triggered automatically when `totalEstimatedCost > userBudget`, or manually via an "Optimize Budget" button.
- Backend sends current itinerary + budget gap to the LLM (or a rules-based cost-ranking algorithm as a fallback/complement) requesting specific recommendations.
- Each recommendation includes: item affected, current cost, suggested alternative, estimated savings, and reason.
- User can apply a recommendation directly from the list, which updates the relevant `TripActivity`/stop cost fields.
- Recommendations recompute (or are dismissed) after any relevant edit.

**API Requirements:** `POST /api/ai/optimize-budget` — Request: `{ tripId }`. Response: `{ recommendations: [{ id, itemType, itemId, currentCost, suggestedAlternative, estimatedSavings, reason }] }`. Applying a recommendation uses `PUT /api/trips/:tripId/activities/:activityId` (or equivalent stop-cost update endpoint) with the suggested value.

**Database Requirements:** No new collection required; recommendations are computed on demand and not persisted (Phase 2: `BudgetRecommendation` log for analytics).

**Frontend Requirements:** `BudgetOptimizerPanel` listing `RecommendationCard`s with "Apply" buttons, running savings total, toast confirmation on apply.

**Acceptance Criteria:**
- Given a trip ₹3,500 over budget, when optimization runs, then returned recommendations' combined `estimatedSavings` is sufficient to close (or clearly communicate a shortfall against) the gap.
- Given the user applies a recommendation, then the corresponding activity/stop cost is updated and the budget total recalculates immediately.

**Edge Cases:**
- No viable recommendations found (e.g., trip already minimal) → system returns an empty list with a message suggesting the user raise their budget or remove a city.
- Applying a recommendation that a collaborator has just deleted → API returns 404 for that item; UI shows "This item was already changed" and refreshes recommendations.

---

### 10.11 Real-Time Collaboration

**Description:** Multiple invited users can co-edit a trip simultaneously via Socket.IO, with visible attribution of each change.

**User Story:** As a group traveler, I want to co-plan a trip live with my friends so we don't overwrite each other's work or lose track of changes.

**Functional Requirements:**
- Trip owner can invite collaborators by email (creates a `Collaboration` record with role, e.g., `editor`).
- Collaborators join a Socket.IO room scoped to `tripId` upon opening the trip.
- Actions broadcast in real time: add/remove city, add/edit/delete activity, budget change, reorder.
- Each broadcast event includes actor name for attribution messages (e.g., "Rahul added Manali").
- Basic conflict handling: last-write-wins at the field level, with real-time UI updates preventing most conflicts by reflecting others' changes immediately.

**API Requirements:** REST: `POST /api/trips/:id/collaborators` (invite), `DELETE /api/trips/:id/collaborators/:userId` (remove), `GET /api/trips/:id/collaborators`.
Socket.IO events (namespaced per trip room `trip:{tripId}`):
- `stop:added`, `stop:removed`, `stop:reordered`
- `activity:added`, `activity:updated`, `activity:removed`, `activity:reordered`
- `budget:updated`
- `user:joined`, `user:left`
Each event payload includes `{ actorId, actorName, timestamp, payload }`.

**Database Requirements:** `Collaboration` collection (`tripId`, `userId`, `role`, `invitedAt`, `status: pending|accepted`). `Notification` collection for invite notifications.

**Frontend Requirements:** Socket.IO client hook (`useTripSocket`), live "activity feed" toast/log component showing attribution messages, presence indicators (avatars of currently active collaborators).

**Acceptance Criteria:**
- Given two collaborators have the trip open, when User A adds a city, then User B's view updates within a few seconds without a manual refresh, and shows "User A added [City]."
- Given a collaborator without `editor` role, then mutating socket events from that client are rejected server-side (role re-validated on every socket event, not just on connect).

**Edge Cases:**
- Collaborator loses connection mid-edit → Socket.IO auto-reconnect rejoins the room; any missed events are reconciled by re-fetching the trip on reconnect.
- Two users edit the same activity's cost simultaneously → last write (by server receipt time) wins; both clients receive the final `activity:updated` event so no client is left stale.

---

### 10.12 Public Trip Sharing

**Description:** Trips can be published with a unique public URL; visitors can view (read-only) and clone into their own account.

**User Story:** As a blogger, I want to share a public link to my itinerary so others can view or copy it.

**Functional Requirements:**
- "Share" action generates a unique `shareId` and sets `isPublic: true` on the trip (or a linked `SharedTrip` record).
- Public page shows itinerary, cities, activities, and budget summary — no edit controls, no private data (e.g., collaborator emails) exposed.
- Copy-link and social-share buttons.
- "Clone Trip" button (visible to authenticated visitors) creates a full editable copy under the visitor's account with status `draft`.

**API Requirements:** `GET /api/public/trips/:shareId` (no auth required, returns read-only trip data), `POST /api/trips/:id/share` (auth required, generates/returns `shareId`), `POST /api/trips/:id/clone` (auth required; when called on a public trip by a non-owner, clones into caller's account).

**Database Requirements:** `SharedTrip` collection (`tripId`, `shareId` [unique, indexed], `isActive`, `createdAt`) kept separate from `Trip` so a trip can be un-shared without losing the original `shareId` history.

**Frontend Requirements:** `PublicTripPage` (unauthenticated-accessible route), `CloneTripButton` (prompts login if visitor unauthenticated, then completes clone post-login), share modal with copy-link and social icons.

**Acceptance Criteria:**
- Given a trip is not shared, then `GET /api/public/trips/:shareId` for any random id returns 404.
- Given a public trip, when an authenticated visitor clicks "Clone Trip," then a new `Trip` document is created under their `userId` with all stops/activities deep-copied and `status: draft`.

**Edge Cases:**
- Owner un-shares (revokes) a trip while someone has the public page open → subsequent API calls (e.g., loading more data) return 404; already-rendered page remains until refresh.
- Cloning a trip with 0 cities → allowed, creates an empty draft trip.

---

### 10.13 Profile & Settings

**Description:** User profile management and account deletion.

**User Story:** As a user, I want to update my profile and control my account so my information stays accurate and I retain control of my data.

**Functional Requirements:**
- Update name, profile picture (via Cloudinary), email (with re-verification in Phase 2; MVP allows direct change), language preference.
- View saved/favorited destinations.
- View account information (join date, trip count).
- Delete account — cascades deletion of the user's trips, collaborations, and notifications (or anonymizes trips shared publicly, per policy decision documented in Section 23).

**API Requirements:** `GET /api/users/me`, `PUT /api/users/me`, `DELETE /api/users/me`, `GET /api/users/me/saved-destinations`.

**Database Requirements:** Fields on `User` (see Section 14); cascade or anonymize logic executed in a service layer, not left to client orchestration.

**Frontend Requirements:** `ProfilePage` with editable form, avatar upload, "Danger Zone" delete-account section with a confirmation modal requiring the user to type their email to confirm.

**Acceptance Criteria:**
- Given a user updates their profile picture, then the old Cloudinary asset is either replaced or orphan-cleaned (documented decision), and the new URL is reflected immediately.
- Given a user confirms account deletion, then their `User` document and owned data are removed within the same request/transaction, and their JWT is invalidated client-side.

**Edge Cases:**
- User deletes account while owning a trip with active collaborators → collaborators lose edit access; trip is either deleted or ownership-transfer is offered (MVP: deleted, documented as a known limitation).
- Email changed to one already in use → 409 Conflict.

---

### 10.14 Admin Dashboard (Recommended, MVP-optional)

**Description:** Internal dashboard for platform usage visibility and basic user management.

**User Story:** As an admin, I want to see platform-wide metrics so I can understand growth and engagement.

**Functional Requirements:**
- Show total users, total trips, trips created over time (chart), most popular cities, most popular activities, basic engagement stats (e.g., DAU/WAU approximation from `updatedAt` timestamps), and a basic user list with the ability to deactivate a user.

**API Requirements:** `GET /api/admin/metrics`, `GET /api/admin/users`, `PUT /api/admin/users/:id/status`. All admin routes require `role: admin` on the `User` document, enforced via dedicated middleware.

**Database Requirements:** `role` field on `User` (`user | admin`). Aggregation pipelines over `Trip`, `TripStop` (for popular cities), `TripActivity` (for popular activities).

**Frontend Requirements:** `AdminDashboardPage` (separate protected route group), Recharts line/bar charts for trends, paginated user table.

**Acceptance Criteria:**
- Given a non-admin user, when they access `/admin`, then they are redirected/denied with 403 at the API level regardless of client-side routing.
- Given admin metrics are requested, then counts match live aggregation of the underlying collections (no stale cached values beyond a documented TTL, e.g., 5 minutes).

**Edge Cases:**
- Admin deactivates their own account → blocked with a clear error (must not lock out the only admin).

---

## 11. User Flows

Each flow below is a step sequence; error branches are noted in italics.

**1. New User Registration:** Landing page → Sign Up → fill name/email/password → client validation → submit → API creates user + returns JWT → redirect to Dashboard (empty state). *If email exists → inline error, offer login link.*

**2. Login:** Login page → enter credentials → submit → API validates → JWT stored → redirect to Dashboard. *If invalid → inline error, no user enumeration.*

**3. Create Manual Trip:** Dashboard → "Plan New Trip" → fill trip form (name, dates, budget, cover image) → Save as Draft or Continue → redirect to Itinerary Builder for that trip.

**4. Add Cities:** Itinerary Builder → "Add City" → City Search modal → filter/search → select city → set arrival/departure dates → "Add to Trip" → city appears as a stop, order = last.

**5. Add Activities:** Open a city stop → "Add Activity" → Activity Search panel or manual entry → fill/select details → save → activity appears under the correct day.

**6. Reorder Itinerary:** Drag a stop or activity handle → drop at new position → optimistic UI reorder → API call persists `order` → *on failure, UI reverts and shows a toast error.*

**7. Generate AI Itinerary:** Dashboard or Trip page → "Generate with AI" → enter natural-language prompt → submit → loading state → draft preview rendered → user edits fields inline → "Accept" → API persists real trip data → redirect to Itinerary view. *"Discard" clears the draft with no persistence.*

**8. Edit AI Itinerary:** Within Draft Preview → click any field (activity name, cost, time) → inline edit → changes held in local draft state → not saved until "Accept."

**9. Budget Optimization:** Budget view shows over-budget banner → "Optimize Budget" → API returns recommendations → user reviews list → "Apply" on one or more → costs update → banner clears once under budget (or remains with reduced gap).

**10. Invite Collaborator:** Trip page → "Invite" → enter collaborator email → API creates `Collaboration` (pending) + `Notification` → collaborator receives invite (in-app/email) → accepts → gains editor access and joins the trip's Socket.IO room.

**11. Real-Time Collaboration:** Two collaborators open the same trip → both join Socket.IO room → User A edits an activity → server persists + broadcasts `activity:updated` → User B's UI updates live with attribution toast.

**12. Publish Trip:** Trip page → "Publish" → status changes from draft to published → "Share" → API generates `shareId` → share modal shows public URL + copy/social buttons.

**13. Clone Public Trip:** Visitor opens public trip URL → reviews itinerary → "Clone Trip" → *if not logged in, prompt login/register, then resume clone* → API deep-copies trip under visitor's account → redirect to their new draft trip in Itinerary Builder.

**14. Delete Trip:** My Trips → card menu → "Delete" → confirmation modal → confirm → API cascades delete of stops/activities/expenses → card removed from list with toast confirmation.

**15. Delete Account:** Profile → Settings → "Danger Zone" → "Delete Account" → confirmation modal requiring email re-entry → confirm → API cascades/anonymizes owned data → JWT cleared → redirect to landing page with confirmation message.

---

## 12. UX/UI Requirements

- **Design system:** Consistent Tailwind design tokens (spacing, color palette, typography scale) applied across all pages; component library approach (buttons, inputs, modals, cards, badges) reused everywhere rather than one-off styles.
- **Responsiveness:** Mobile-first breakpoints; itinerary drag-and-drop must have a usable touch-friendly fallback (e.g., up/down move buttons) on small screens where drag gestures are unreliable.
- **Loading states:** Skeleton loaders for cards/lists; spinners for actions (AI generation should show descriptive progress messaging, not a bare spinner, given multi-second latency).
- **Empty states:** Every list/grid (trips, cities, activities, collaborators, recommendations) has a designed empty state with a clear next action.
- **Error states:** Inline field errors for forms; toast notifications for action-level errors; a dedicated error boundary/page for unexpected failures.
- **Feedback:** Toast notifications on all create/update/delete/apply actions.
- **Accessibility:** Semantic HTML, keyboard-navigable drag-and-drop alternative, sufficient color contrast, ARIA labels on icon-only buttons, focus management in modals.
- **Navigation:** Persistent top nav (Dashboard, My Trips, Explore/Search, Profile), trip-scoped sub-navigation (Overview, Itinerary, Budget, Collaborators) once inside a trip.

---

## 13. MERN Architecture

### Frontend Folder Structure

```
src/
├── components/        # Shared, reusable UI primitives (Button, Modal, Card, Toast)
├── pages/              # Route-level views composed from features
├── layouts/             # AppLayout, AuthLayout, TripLayout (shared chrome per route group)
├── features/
│   ├── auth/            # Auth forms, auth slice/context, auth API service
│   ├── trips/           # Trip CRUD UI, TripCard, MyTrips
│   ├── itinerary/       # Stops, activities, drag-and-drop builder, List/Timeline views
│   ├── budget/           # Charts, budget summary, optimizer UI
│   ├── ai/               # AI generator modal, draft preview
│   └── collaboration/    # Socket hook, invite UI, activity feed, presence
├── hooks/               # Cross-feature hooks (useAuth, useDebounce, usePagination)
├── services/            # Axios instance + per-resource API modules (tripService.js, aiService.js)
├── context/             # AuthContext, SocketContext (or Redux store if RTK is chosen)
├── utils/               # formatters, validators, constants
├── routes/              # Route definitions, ProtectedRoute wrapper
└── assets/              # Static images, icons
```

**Responsibilities:** `components/` holds nothing feature-specific. `features/` folders own their own components, hooks, and API calls, composed by `pages/`. `services/` centralizes all Axios calls so no component calls `axios` directly. `context/` (or Redux slices) hold cross-cutting state: auth user, active socket connection.

### Backend Folder Structure

```
server/
├── controllers/     # Request handlers, thin — delegate to services
├── models/          # Mongoose schemas
├── routes/           # Express routers, one per resource, mounted in app.js
├── middleware/        # auth (JWT verify), error handler, validation, rate limiter
├── services/          # Business logic (tripService, aiService, budgetService)
├── sockets/            # Socket.IO namespace/room handlers, per-event logic
├── utils/              # helpers (token generation, response formatting)
├── config/             # db connection, env loading, cloudinary config
└── app.js              # Express app assembly, middleware wiring
```

**Layering rule:** Controllers never contain business logic directly — they validate input, call a service, and format the response. Services never touch `req`/`res`. This keeps Socket.IO handlers and REST controllers able to share the same service functions (e.g., adding an activity via REST and having it broadcast via a socket both call `activityService.addActivity()`).

**Cross-cutting middleware:**
- `authMiddleware` — verifies JWT, attaches `req.user`.
- `errorHandler` — centralized error-to-HTTP-response mapping.
- `validateRequest` — schema-based request validation (e.g., Joi/Zod) before controller logic runs.
- `rateLimiter` — applied globally and more strictly on `/api/auth/*` and `/api/ai/*`.
- CORS configured to allow only the deployed frontend origin(s).

---

## 14. MongoDB Data Model

### Design Principle: Embedding vs. Referencing

- **Reference** when a document can grow unbounded or is independently queried/updated (e.g., activities within a trip can be many and are frequently reordered/edited individually) → `TripStop` and `TripActivity` are separate collections referencing `tripId`.
- **Embed** small, bounded, always-loaded-together data that has no independent lifecycle (e.g., a trip's `budgetSummary` cache fields, or a `City`'s short description) directly on the parent document.
- Avoid one giant `Trip` document containing all stops/activities inline — this would risk hitting document size limits on large trips and make concurrent collaborative edits (Section 18) far harder to apply atomically.

### Collections

**1. User**
| Field | Type | Required | Notes |
|---|---|---|---|
| `_id` | ObjectId | — | |
| `name` | String | Yes | |
| `email` | String | Yes | Unique, indexed |
| `password` | String | Yes | bcrypt hash |
| `profilePhoto` | String | No | Cloudinary URL |
| `languagePreference` | String | No | Default `"en"` |
| `role` | String | Yes | Enum: `user`, `admin`; default `user` |
| `resetPasswordToken` | String | No | Hashed token |
| `resetPasswordExpires` | Date | No | |
| `createdAt` / `updatedAt` | Date | Yes | Timestamps |

Indexes: `email` (unique).

**2. Trip**
| Field | Type | Required | Notes |
|---|---|---|---|
| `_id` | ObjectId | — | |
| `userId` | ObjectId (ref: User) | Yes | Owner, indexed |
| `name` | String | Yes | |
| `description` | String | No | |
| `coverImage` | String | No | Cloudinary URL |
| `startDate` | Date | Yes | |
| `endDate` | Date | Yes | Must be ≥ `startDate` |
| `totalBudget` | Number | No | |
| `currency` | String | Yes | Default `"INR"` |
| `status` | String | Yes | Enum: `draft`, `published` |
| `isPublic` | Boolean | Yes | Default `false` |
| `createdAt` / `updatedAt` | Date | Yes | |

Indexes: `userId`, compound `{ userId, status }`.

**3. City** (catalog)
| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | String | Yes | Text-indexed |
| `country` | String | Yes | Indexed |
| `region` | String | No | Indexed |
| `image` | String | No | |
| `description` | String | No | |
| `costIndex` | Number | No | 1–5 or numeric scale |
| `popularity` | Number | No | Ranking score |

Indexes: text index on `name`, `country`; compound `{ region, costIndex }`.

**4. Activity** (catalog, city-scoped)
| Field | Type | Required | Notes |
|---|---|---|---|
| `cityId` | ObjectId (ref: City) | Yes | Indexed |
| `name` | String | Yes | |
| `description` | String | No | |
| `category` | String | Yes | Indexed |
| `image` | String | No | |
| `estimatedCost` | Number | No | |
| `duration` | Number | No | Minutes |

Indexes: `cityId`, `category`.

**5. TripStop**
| Field | Type | Required | Notes |
|---|---|---|---|
| `tripId` | ObjectId (ref: Trip) | Yes | Indexed |
| `cityId` | ObjectId (ref: City) | No | Null if custom/free-text city |
| `cityName` | String | No | Fallback for AI-generated/custom cities |
| `order` | Number | Yes | Sequence within trip |
| `arrivalDate` | Date | Yes | |
| `departureDate` | Date | Yes | |
| `accommodationCost` | Number | No | |
| `transportCost` | Number | No | Cost to reach this stop |

Indexes: compound `{ tripId, order }`.

**6. TripActivity**
| Field | Type | Required | Notes |
|---|---|---|---|
| `tripStopId` | ObjectId (ref: TripStop) | Yes | Indexed |
| `activityId` | ObjectId (ref: Activity) | No | Null if custom |
| `name` | String | Yes | Copied at add-time |
| `description` | String | No | |
| `category` | String | No | |
| `date` | Date | Yes | Must fall within parent stop's range |
| `startTime` | String | No | `HH:mm` |
| `endTime` | String | No | `HH:mm` |
| `duration` | Number | No | Minutes |
| `estimatedCost` | Number | No | |
| `image` | String | No | |
| `notes` | String | No | |
| `order` | Number | Yes | Sequence within day |

Indexes: compound `{ tripStopId, date, order }`.

**7. Expense** (optional granular ledger; Section 19 documents whether MVP uses this or computes from activities directly)
| Field | Type | Required | Notes |
|---|---|---|---|
| `tripId` | ObjectId (ref: Trip) | Yes | Indexed |
| `category` | String | Yes | Enum: transport, accommodation, activity, food, misc |
| `amount` | Number | Yes | |
| `relatedActivityId` | ObjectId (ref: TripActivity) | No | |
| `relatedStopId` | ObjectId (ref: TripStop) | No | |
| `note` | String | No | |

Indexes: `{ tripId, category }`.

**8. SharedTrip**
| Field | Type | Required | Notes |
|---|---|---|---|
| `tripId` | ObjectId (ref: Trip) | Yes | Indexed |
| `shareId` | String | Yes | Unique, indexed (public URL slug) |
| `isActive` | Boolean | Yes | Default `true` |
| `createdAt` | Date | Yes | |

**9. Collaboration**
| Field | Type | Required | Notes |
|---|---|---|---|
| `tripId` | ObjectId (ref: Trip) | Yes | Indexed |
| `userId` | ObjectId (ref: User) | Yes | Indexed |
| `role` | String | Yes | Enum: `editor`, `viewer` |
| `status` | String | Yes | Enum: `pending`, `accepted` |
| `invitedAt` | Date | Yes | |

Indexes: compound unique `{ tripId, userId }`.

**10. Notification**
| Field | Type | Required | Notes |
|---|---|---|---|
| `userId` | ObjectId (ref: User) | Yes | Indexed, recipient |
| `type` | String | Yes | Enum: `invite`, `trip_update`, `system` |
| `message` | String | Yes | |
| `relatedTripId` | ObjectId (ref: Trip) | No | |
| `isRead` | Boolean | Yes | Default `false` |
| `createdAt` | Date | Yes | |

**Validation rules (applied at Mongoose schema level):**
- `Trip.endDate >= Trip.startDate` (custom validator).
- `TripActivity.date` within parent `TripStop` range (validated in service layer at write time, since cross-document validation isn't native to Mongoose).
- `User.email` matches standard email regex; uniqueness enforced by index + duplicate-key error handling.
- `Collaboration` uniqueness on `{ tripId, userId }` to prevent duplicate invites.

---

## 15. API Specification

All endpoints are prefixed `/api`. Authenticated endpoints require header `Authorization: Bearer <JWT>`. Standard error response shape:
```
{ "success": false, "error": { "code": "STRING_CODE", "message": "Human readable message" } }
```
Standard success shape: `{ "success": true, "data": { ... } }`.

### Authentication

| Method | Endpoint | Auth | Body | Response |
|---|---|---|---|---|
| POST | `/api/auth/register` | No | `{ name, email, password }` | `{ user, token }` (201) |
| POST | `/api/auth/login` | No | `{ email, password }` | `{ user, token }` (200) / 401 |
| POST | `/api/auth/forgot-password` | No | `{ email }` | `{ message }` (200, generic) |
| POST | `/api/auth/reset-password` | No | `{ token, newPassword }` | `{ message }` (200) / 400 |
| GET | `/api/auth/me` | Yes | — | `{ user }` (200) / 401 |

### Trips

| Method | Endpoint | Auth | Body / Query | Response |
|---|---|---|---|---|
| GET | `/api/trips` | Yes | Query: `status`, `filter=upcoming|recent`, `page`, `limit` | `{ trips[], total }` |
| POST | `/api/trips` | Yes | `{ name, startDate, endDate, description?, coverImage?, totalBudget?, currency?, status? }` | `{ trip }` (201) |
| GET | `/api/trips/:id` | Yes (owner or collaborator) | — | `{ trip, stops[] w/ nested activities }` / 403 / 404 |
| PUT | `/api/trips/:id` | Yes (owner/editor) | Partial trip fields | `{ trip }` (200) |
| DELETE | `/api/trips/:id` | Yes (owner) | — | `{ message }` (200) |
| POST | `/api/trips/:id/clone` | Yes | — | `{ trip }` (new copy, 201) |
| POST | `/api/trips/:id/share` | Yes (owner) | — | `{ shareId, publicUrl }` (200) |

### Stops

| Method | Endpoint | Auth | Body | Response |
|---|---|---|---|---|
| POST | `/api/trips/:tripId/stops` | Yes (owner/editor) | `{ cityId? , cityName?, arrivalDate, departureDate }` | `{ stop }` (201) |
| PUT | `/api/trips/:tripId/stops/:stopId` | Yes (owner/editor) | Partial stop fields | `{ stop }` (200) |
| DELETE | `/api/trips/:tripId/stops/:stopId` | Yes (owner/editor) | — | `{ message }` (200) |
| PUT | `/api/trips/:tripId/stops/reorder` | Yes (owner/editor) | `{ orderedStopIds: [] }` | `{ stops[] }` (200) |

### Activities

| Method | Endpoint | Auth | Body | Response |
|---|---|---|---|---|
| GET | `/api/cities/:cityId/activities` | No | Query: `type`, `cost`, `duration` | `{ activities[] }` |
| POST | `/api/trips/:tripId/activities` | Yes (owner/editor) | `{ tripStopId, activityId?, name, category?, date, startTime?, endTime?, duration?, estimatedCost?, notes? }` | `{ activity }` (201) |
| PUT | `/api/trips/:tripId/activities/:activityId` | Yes (owner/editor) | Partial activity fields | `{ activity }` (200) |
| DELETE | `/api/trips/:tripId/activities/:activityId` | Yes (owner/editor) | — | `{ message }` (200) |
| PUT | `/api/trips/:tripId/activities/reorder` | Yes (owner/editor) | `{ tripStopId, date, orderedActivityIds: [] }` | `{ activities[] }` (200) |

### Cities

| Method | Endpoint | Auth | Query | Response |
|---|---|---|---|---|
| GET | `/api/cities` | No | `search, country, region, costIndex, popularity, page, limit` | `{ cities[], total }` |

### Budget

| Method | Endpoint | Auth | Response |
|---|---|---|---|
| GET | `/api/trips/:id/budget` | Yes | `{ breakdown: { transportation, accommodation, activity, food, misc, total, avgPerDay }, isOverBudget }` |

### AI

| Method | Endpoint | Auth | Body | Response |
|---|---|---|---|
| POST | `/api/ai/generate-itinerary` | Yes | `{ prompt, existingTripId? }` | `{ draft: { tripName, duration, cities[], days[], budgetBreakdown, suggestions[] } }` (no DB write) |
| POST | `/api/ai/optimize-budget` | Yes | `{ tripId }` | `{ recommendations[] }` |

### Collaboration

| Method | Endpoint | Auth | Body | Response |
|---|---|---|---|
| POST | `/api/trips/:id/collaborators` | Yes (owner) | `{ email, role }` | `{ collaboration }` (201) |
| GET | `/api/trips/:id/collaborators` | Yes | — | `{ collaborators[] }` |
| DELETE | `/api/trips/:id/collaborators/:userId` | Yes (owner) | — | `{ message }` |

### Sharing

| Method | Endpoint | Auth | Response |
|---|---|---|---|
| GET | `/api/public/trips/:shareId` | No | `{ trip, stops[], budgetSummary }` (read-only) / 404 |

### Users / Profile

| Method | Endpoint | Auth | Body | Response |
|---|---|---|---|
| GET | `/api/users/me` | Yes | — | `{ user }` |
| PUT | `/api/users/me` | Yes | `{ name?, email?, profilePhoto?, languagePreference? }` | `{ user }` |
| DELETE | `/api/users/me` | Yes | — | `{ message }` |

### Admin

| Method | Endpoint | Auth | Response |
|---|---|---|---|
| GET | `/api/admin/metrics` | Yes (admin) | `{ totalUsers, totalTrips, tripsOverTime[], popularCities[], popularActivities[] }` |
| GET | `/api/admin/users` | Yes (admin) | `{ users[], total }` |
| PUT | `/api/admin/users/:id/status` | Yes (admin) | `{ status }` |

**Common error responses across all endpoints:** 400 (validation), 401 (missing/invalid token), 403 (insufficient permission/role), 404 (resource not found), 409 (conflict, e.g., duplicate email), 429 (rate limited), 500 (unhandled server error, logged not exposed to client).

---

## 16. Authentication & Authorization

- **Authentication:** JWT signed with a server-side secret (`process.env.JWT_SECRET`), short-lived access token (recommend 7-day expiry for this project scope, with refresh handled by requiring re-login — refresh tokens are a Phase 2 enhancement). Token stored client-side (recommend httpOnly cookie for production-grade security; localStorage acceptable for demo scope with XSS caveats documented).
- **Password security:** bcrypt with a minimum of 10 salt rounds.
- **Authorization model:**
  - `owner` — full control of a trip (edit, delete, invite, share).
  - `editor` (collaborator) — can add/edit/remove stops and activities, cannot delete the trip or manage collaborators.
  - `viewer` — read-only, used for public/shared access.
  - `admin` — platform-level role, separate from trip-level roles, gates `/api/admin/*`.
- Every trip-scoped mutating endpoint re-checks `req.user` against the trip's `userId`/`Collaboration` records server-side — client-side role checks are UX only, never security boundaries.
- Socket.IO connections authenticate via the JWT passed at handshake; every mutating socket event re-validates the user's role against the `Collaboration` collection before applying/broadcasting a change.

---

## 17. AI Architecture

- **Provider:** Any LLM API capable of structured JSON output (the PRD is provider-agnostic; the reference implementation in Section "Anthropic API" context of this workspace uses the Messages API pattern with a JSON-only system prompt).
- **Prompt construction:** Server-side service (`aiService.js`) builds a system prompt that (a) fixes the exact JSON schema expected, (b) instructs the model to output JSON only with no prose/markdown fences, and (c) includes relevant trip context (existing cities/budget) when `existingTripId` is provided.
- **Validation layer:** Response is parsed and validated against a JSON schema (e.g., using `ajv` or `zod`) before being returned to the client. Invalid responses trigger one automatic retry with a stricter instruction; a second failure returns a user-facing error, never partially-parsed or guessed data.
- **Non-destructive guarantee:** The generate-itinerary endpoint performs **zero** database writes. Only the explicit "Accept" action (a separate, standard trip-creation call) persists data. This is a hard architectural rule, not just a UI convention, so that no code path can allow the AI to silently overwrite a trip.
- **Budget optimizer logic:** Combines a deterministic pre-pass (rank activities by cost descending, identify the highest-cost/lowest-priority items) with an LLM call that turns ranked candidates into human-readable, reasoned recommendations. This hybrid approach keeps suggestions grounded in real trip data rather than hallucinated costs.
- **Rate limiting & cost control:** `/api/ai/*` routes are rate-limited per user (e.g., 10 requests/hour) to control LLM API cost and abuse.
- **Logging:** Prompts/responses may be logged (with PII minimized) for debugging and future fine-tuning of prompt templates, gated behind a feature flag.

---

## 18. Real-Time Collaboration Architecture

- **Transport:** Socket.IO server attached to the same Node/Express HTTP server; namespaced rooms per trip: `trip:{tripId}`.
- **Connection flow:** Client connects with JWT in the handshake `auth` payload → server verifies token → server checks the user has an accepted `Collaboration` (or is the owner) for the requested `tripId` before allowing room join → on success, emits `user:joined` to the room.
- **Event flow:** Every mutating REST-equivalent action (add/edit/remove stop or activity, reorder, budget change) is implemented once in the `services/` layer and invoked from **both** the REST controller and the corresponding socket handler, ensuring REST-only clients and socket-connected clients stay consistent. After a successful DB write, the service triggers a room-wide broadcast (excluding or including the originating socket depending on the event, to avoid double-applying on the actor's own UI).
- **Conflict strategy (MVP):** Last-write-wins at the document-field level; the system prioritizes low-latency broadcast over operational-transform/CRDT-style merging, which is called out explicitly as a Phase 2 enhancement for character-level concurrent text editing (e.g., simultaneous note-editing).
- **Attribution:** Every broadcast payload includes `actorId`/`actorName` so the client can render human-readable activity feed messages ("Rahul added Manali").
- **Presence:** Room membership tracked server-side (in-memory map or Redis adapter for multi-instance deployments) to show active-collaborator avatars; `user:left` emitted on disconnect.
- **Scaling note:** For a single-instance deployment (Render/Railway MVP scope) in-memory room state is sufficient; if horizontally scaled, a Redis Socket.IO adapter is required and is documented as a Phase 2/production consideration.

---

## 19. Budget Calculation Logic

**Recommended MVP approach:** Compute budget breakdown on read, directly from `TripStop` (`accommodationCost`, `transportCost`) and `TripActivity` (`estimatedCost`, `category`) — avoiding the need to keep a separate `Expense` ledger perfectly in sync. The `Expense` collection is retained in the schema for Phase 2 (manual/miscellaneous expense entries not tied to a specific activity, e.g., visas, travel insurance).

**Calculation rules:**
- `transportationCost` = sum of `TripStop.transportCost` across all stops.
- `accommodationCost` = sum of `TripStop.accommodationCost` across all stops.
- `activityCost` = sum of `TripActivity.estimatedCost` where `category` is not `food`.
- `foodCost` = sum of `TripActivity.estimatedCost` where `category === "food"`.
- `miscCost` = sum of standalone `Expense` entries with `category: "misc"` (Phase 2) or 0 in MVP if the `Expense` collection is unused.
- `totalEstimatedCost` = sum of the above.
- `averageCostPerDay` = `totalEstimatedCost / tripDurationInDays` (duration derived from `Trip.startDate`/`endDate`).
- `isOverBudget` = `totalEstimatedCost > Trip.totalBudget` (only evaluated if `totalBudget` is set and > 0).
- `remainingBudget` = `Trip.totalBudget - totalEstimatedCost` (can be negative, displayed as "over by X").

**Recalculation triggers:** Any create/update/delete of a `TripStop` or `TripActivity` cost field triggers a recompute on next read (computed, not stored, to avoid drift) — for MVP simplicity budget totals are **not** cached on the `Trip` document; Phase 2 may add a cached `Trip.cachedBudgetSummary` updated via a debounced background job for performance on very large trips.

---

## 20. Public Sharing Architecture

- Publishing a trip does not itself make it public — `status: published` and `isPublic: true`/`SharedTrip` creation are distinct concerns (a user may want a finished, published trip that stays private).
- `POST /api/trips/:id/share` generates a cryptographically random `shareId` (e.g., 10-character URL-safe slug) stored on a `SharedTrip` document, decoupled from the `Trip._id` so the internal ID is never exposed in public URLs.
- `GET /api/public/trips/:shareId` is unauthenticated, read-only, and explicitly strips any private fields (owner email, collaborator list, internal notes) before returning data — enforced by a dedicated response serializer, not by trusting the frontend to hide fields.
- Un-sharing sets `SharedTrip.isActive = false` rather than deleting the record, preserving the ability to re-activate the same URL later.
- Cloning always creates a fully independent deep copy (new `Trip`, new `TripStop`s, new `TripActivity`s) — the clone has no ongoing reference back to the original, so edits to either trip never affect the other.

---

## 21. Security Requirements

- Passwords hashed with bcrypt (≥10 rounds); plaintext passwords never logged.
- JWT signed with a strong secret from environment variables; secret never hardcoded or committed.
- All mutating trip/stop/activity/collaboration endpoints re-verify ownership/role server-side on every request (not just at route entry, but scoped to the specific resource ID in the URL).
- Input validation on every endpoint (schema-based, e.g., Joi/Zod) rejecting unexpected fields and enforcing types/ranges before reaching business logic.
- MongoDB injection protection: use Mongoose's built-in query building (avoid raw `$where`/string-concatenated queries); sanitize any user input used in `$regex` search to escape regex special characters.
- XSS protection: sanitize/escape any user-generated text rendered in the frontend (trip descriptions, activity notes); set appropriate CSP headers.
- Rate limiting: global baseline plus stricter limits on `/api/auth/*` (brute-force protection) and `/api/ai/*` (cost control).
- CORS restricted to the deployed frontend origin(s) only; credentials mode configured explicitly if cookies are used for JWT storage.
- Environment variables (`JWT_SECRET`, `MONGODB_URI`, `CLOUDINARY_*`, `LLM_API_KEY`) never exposed to the frontend bundle; all third-party API calls (LLM, Cloudinary signing) proxied through the backend.
- Authorization checks ensure a user cannot read or modify another user's private (non-public, non-collaborated) trip — verified both at the REST layer and the Socket.IO layer.

---

## 22. Non-Functional Requirements

- **Responsiveness:** Fully usable on viewports from ~360px (mobile) to desktop; itinerary builder has a touch-friendly reorder fallback.
- **Performance:** List/search endpoints paginated server-side; images served via Cloudinary CDN transformations (thumbnails for cards, full-size for detail views); Recharts data limited to relevant trip scope, not fetched over-broadly.
- **Accessibility:** WCAG 2.1 AA-oriented targets — keyboard navigation, ARIA labeling, sufficient contrast.
- **Maintainability:** Clear controller/service/model separation; consistent naming; no business logic in React components beyond presentation and local UI state.
- **Scalability:** Stateless REST layer (horizontally scalable); Socket.IO documented Redis-adapter path for multi-instance scaling (Phase 2/production).
- **Reliability:** Centralized error handling on both client (error boundaries, toast fallback) and server (errorHandler middleware, no unhandled promise rejections).
- **Consistent UX states:** Every data-fetching view implements loading, error, and empty states — no bare blank screens.

---

## 23. Error & Edge Cases

Representative cross-cutting cases (feature-specific edge cases are also listed within Section 10):

- **Concurrent edits:** Two collaborators edit the same field near-simultaneously → last write wins server-side; both clients reconcile via the broadcast event, avoiding a silently stale UI.
- **Deleted-while-viewing:** A stop/activity is deleted by one collaborator while another has it open for editing → the second user's save attempt returns 404, UI shows "This item no longer exists" and removes it from view rather than erroring generically.
- **AI failure:** LLM API times out or returns invalid JSON → user sees a clear retry prompt; no partial trip data is ever written.
- **Over-budget with no recommendations available:** Optimizer returns an empty list with a message rather than a broken/empty UI.
- **Public trip unpublished mid-view:** Visitor's page remains rendered from initial load; any further API calls (e.g., pagination) return 404 and prompt a refresh.
- **Account deletion with active collaborations:** Documented MVP behavior — owned trips are deleted; the user's `Collaboration` records on other people's trips are removed, and those trip owners' collaborator lists update accordingly (broadcast if the trip is currently open).
- **Duplicate collaborator invite:** Enforced by unique compound index on `Collaboration.{tripId, userId}` → API returns 409 rather than a duplicate record.
- **Malformed/oversized image upload:** Multer rejects file types outside an allowlist (jpg/png/webp) and files over a defined size limit before reaching Cloudinary.
- **Clock/timezone edge cases:** Activity times stored as plain `HH:mm` strings scoped to the destination's local context (no timezone conversion in MVP — documented limitation) to avoid off-by-one-day bugs across the itinerary.

---

## 24. MVP Scope

Everything required for a complete, working, demoable product:

- Authentication (register, login, logout, forgot/reset password, protected routes)
- Dashboard (upcoming/recent trips, CTA, basic highlights)
- Create Trip, My Trips (CRUD, duplicate, delete)
- Itinerary Builder: add/reorder/remove cities, add/edit/delete/reorder activities
- City Search and Activity Search with core filters
- Itinerary View: List View and Calendar/Timeline View
- Budget Management: computed breakdown, pie/bar charts, over-budget banner
- AI Smart Itinerary Generator: prompt → draft preview → edit → accept (non-destructive)
- Smart Budget Optimizer: quantified recommendations, apply action
- Real-Time Collaboration: invite, Socket.IO live sync, attribution
- Public Trip Sharing: publish, share link, clone
- Profile & Settings: update profile, delete account
- Core security requirements (Section 21) and non-functional baseline (Section 22)

**Admin Dashboard is recommended but may ship as a fast-follow immediately after MVP if timeline is constrained** — it has no dependency from other MVP features.

## 25. Phase 2 Features

- `Expense` ledger for standalone/miscellaneous costs (visas, insurance) beyond activity-tied costs.
- Cached `Trip.cachedBudgetSummary` with background recomputation for performance at scale.
- AI draft history (retain last N generated drafts per trip for comparison).
- Refresh-token-based JWT rotation (currently single access token with re-login on expiry).
- Email verification on registration and on email change.
- Redis-backed Socket.IO adapter for horizontal scaling.
- Granular collaborator roles beyond editor/viewer (e.g., budget-only editor).
- Saved/favorited destinations as a first-class, richer feature (currently basic list).
- `BudgetRecommendation` and `AIGenerationLog` persistence for analytics and prompt-tuning.

## 26. Future Features

- Third-party booking integrations (flights, hotels) with real inventory/pricing.
- Native mobile apps (iOS/Android).
- Offline-first itinerary access.
- Multi-language UI (beyond stored preference field).
- Operational-transform/CRDT-based collaborative text editing for notes.
- AI-powered packing lists and travel-document checklists.
- Group expense-splitting/settlement (Splitwise-style) built on the `Expense` ledger.
- Weather-aware activity suggestions and rescheduling prompts.

---

## 27. Development Milestones

| Milestone | Scope | Suggested Duration |
|---|---|---|
| M1 — Foundation | Repo setup, MongoDB connection, User model, Auth (register/login/JWT/protected routes) | Week 1 |
| M2 — Core Trip CRUD | Trip model + CRUD API, Dashboard, My Trips UI | Week 2 |
| M3 — Itinerary Builder | TripStop/TripActivity models, add/reorder/edit/delete APIs + drag-and-drop UI | Weeks 3–4 |
| M4 — Discovery | City/Activity catalog models + seed data, City Search, Activity Search | Week 5 |
| M5 — Budget | Budget computation service, charts, over-budget banner | Week 6 |
| M6 — AI Generator | LLM integration, schema validation, draft preview/accept flow | Week 7 |
| M7 — Budget Optimizer | Recommendation service (rules + LLM), apply-recommendation flow | Week 8 |
| M8 — Collaboration | Socket.IO server/rooms, Collaboration model, invite flow, live sync + attribution | Weeks 9–10 |
| M9 — Public Sharing | SharedTrip model, public read-only page, clone flow | Week 11 |
| M10 — Profile/Admin/Polish | Profile & settings, admin dashboard, responsive/accessibility pass, error/empty states | Week 12 |
| M11 — Testing & Deployment | Test suite completion, deployment pipelines, final QA | Week 13 |

---

## 28. Testing Strategy

- **Unit tests:** Service-layer functions (budget calculation, AI response validation, recommendation ranking, auth token logic) tested in isolation with mocked DB/LLM calls.
- **Integration tests:** API endpoint tests (Supertest + an in-memory or test MongoDB instance) covering auth flows, trip/stop/activity CRUD, authorization boundary cases (403/404), and the AI endpoints' non-destructive guarantee (assert no `Trip` write occurs on `generate-itinerary`).
- **Socket tests:** Automated tests simulating two connected clients verifying broadcast events fire correctly and that role checks reject unauthorized socket mutations.
- **Frontend tests:** Component tests (React Testing Library) for forms (validation), drag-and-drop reorder logic, and the AI draft preview edit/accept/discard flow.
- **End-to-end tests:** Critical user flows from Section 11 (registration → create trip → add city/activity → reorder → generate AI draft → accept → view budget → invite collaborator → publish → clone) via Cypress/Playwright.
- **Manual QA checklist:** Responsive layout pass across breakpoints, empty/loading/error state review per page, accessibility spot-check (keyboard nav, screen reader labels).
- **Regression gate:** CI pipeline runs unit + integration + key E2E tests on every PR before merge to main.

---

## 29. Deployment Architecture

- **Frontend:** React app built via Vite/CRA, deployed to **Vercel**; environment variables (`VITE_API_BASE_URL`, `VITE_SOCKET_URL`) configured per environment (preview/production).
- **Backend:** Node/Express + Socket.IO server deployed to **Render** or **Railway**; environment variables (`MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_*`, `LLM_API_KEY`, `CLIENT_ORIGIN`) set via the platform's secret manager, never committed to source control.
- **Database:** **MongoDB Atlas** cluster, network-access-restricted to the backend host(s); automated backups enabled.
- **Image storage:** **Cloudinary**, with signed upload presets so the frontend never handles raw Cloudinary API secrets — uploads are signed by the backend.
- **CI/CD:** GitHub Actions (or platform-native pipelines) running lint + test suite on PRs; auto-deploy `main` to production, feature branches to preview environments where supported.
- **Environment separation:** Distinct `.env` configuration and separate Atlas databases/Cloudinary folders for development, staging (optional), and production to prevent cross-contamination of demo/test data.
- **Monitoring (baseline):** Centralized server-side error logging (e.g., console + a lightweight logging service); uptime check on the backend health endpoint (`GET /api/health`).

---

## 30. Acceptance Criteria (Release-Level)

The MVP is considered release-ready when all of the following hold:

1. A new user can register, log in, and land on a populated (or correctly empty-stated) Dashboard.
2. A user can create a trip, add at least two cities with dates, add activities to each, and reorder both cities and activities, with all changes persisted after a page refresh.
3. The Budget view accurately reflects the sum of all entered costs, correctly flags over-budget trips, and renders both chart types without errors.
4. A natural-language AI prompt produces a structured, schema-valid draft that is not persisted until the user explicitly accepts it, and the accepted draft matches what was shown in preview (including any user edits).
5. The Budget Optimizer returns specific, quantified recommendations for an over-budget trip, and applying one visibly reduces the total cost.
6. Two browser sessions logged in as different collaborators on the same trip see each other's changes reflected live, with correct attribution text.
7. A published, shared trip is viewable at its public URL by a logged-out visitor with no edit controls present, and "Clone Trip" produces an independent, fully editable copy under the visitor's account after login.
8. A user can update their profile and successfully delete their account, after which their JWT is invalidated and owned data is removed per the documented deletion policy.
9. All protected/admin routes correctly reject unauthorized access with 401/403 at the API level, independent of frontend routing.
10. The application is usable end-to-end on both a desktop viewport and a ~375px-wide mobile viewport without broken layouts.

---

*End of Document.*
