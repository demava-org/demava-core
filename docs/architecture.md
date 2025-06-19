# Demava Architecture

## 🔧 Overview

Demava is a full-stack, modular platform that supports decentralized, domain-based, layered governance. It is built with scalability, transparency, and extensibility in mind — and enhanced with GenAI tools to facilitate participation, summarization, and moderation.

The platform uses a monorepo structure and consists of the following primary subsystems:

* **Frontend**: Web application for end-users
* **Backend API**: FastAPI-based service for data processing and business logic
* **AI Engine**: Modular NLP tools for assistance and summarization
* **Database Layer**: Relational schema with support for multi-layer governance
* **Infrastructure**: Dockerized, cloud-deployable, and optionally federated

---

## 🧱 High-Level Architecture

```
+---------------------------+
|      Frontend (React)     |
|  - User auth              |
|  - Proposal form          |
|  - Vote dashboard         |
|  - AI assistants (UI)     |
+-------------+-------------+
              |
              v
+-------------+-------------+
|       Backend API (FastAPI) |
|  - Auth (JWT/OAuth)         |
|  - Proposal routes          |
|  - Vote handling            |
|  - Domain-layer logic       |
+-------------+-------------+
              |
     +--------+--------+
     |                 |
     v                 v
+----+----+     +------+------+
| Postgres |     | AI Engine   |
|  Users   |     | GPT + LangChain |
| Proposals|     | Whisper STT |
| Votes    |     | Moderation AI |
+----------+     +-------------+
```

---

## 🗳️ Governance Model

### 10-Layer Structure (Customizable)

| Layer | Scope                      |
| ----- | -------------------------- |
| 1     | Neighborhood / Team        |
| 2     | Local councils             |
| 3     | District/Faculty           |
| 4     | Municipal/Field            |
| 5     | Provincial committees      |
| 6     | National field councils    |
| 7     | Inter-field working groups |
| 8     | Regional federations       |
| 9     | National advisory boards   |
| 10    | Executive Governance       |

Each layer has:

* Proposal aggregation or creation
* Delegate elections or vote rollups
* Transparent results, debates, and thresholds

---

## 🧩 Modules Overview

### Frontend

* Built with **React** + **TailwindCSS**
* Uses Vite for performance
* Responsive and mobile-first
* Multi-language support via i18n

### Backend (API)

* Built with **FastAPI** (or Node.js alt.)
* Handles:

  * User management & role logic
  * Field-based eligibility checks
  * Proposal CRUD
  * Voting sessions and tallying
  * Notification hooks (email, webhook)

### Database (PostgreSQL)

* Tables:

  * `users`
  * `proposals`
  * `votes`
  * `fields` (e.g., Medicine, Engineering)
  * `regions`
  * `layers` (L1–L10)
  * `comments`, `delegations`, etc.
* Uses Alembic (or Prisma) for migrations

### AI Engine

* GenAI integration:

  * GPT-4 or Claude for proposal rewriting
  * BERTopic / SentenceTransformers for argument clustering
  * Whisper (STT) for speech-to-proposal
  * Detoxify for toxicity detection

---

## 🔐 Security & Access

* Authentication: JWT or OAuth2
* Role-based access control:

  * Basic citizen, verified member, delegate, moderator
* Voting anti-fraud mechanisms

  * Time-locked voting sessions
  * One vote per field per proposal per layer

---

## 🌐 Deployment

* Docker Compose for local dev
* Kubernetes manifests for production
* Reverse proxy with NGINX
* Deployed on GCP or Azure with Cloudflare DNS
* CI/CD with GitHub Actions

---

## 🧠 AI Design Notes

* Each GenAI tool is sandboxed and auditable
* Prompts are version-controlled for transparency
* Optional AI summary layer per proposal
* Future vision includes explainability + argument visualizations

---

## 🔄 Extensibility

* Plugin interface for:

  * Slack/Discord bots
  * Alternative voting models (ranked choice, quadratic)
  * Domain-specific decision templates
* API-first architecture enables third-party use

---

## 🛣️ Next Steps

* See `/docs/roadmap.md` for phased build plan
* See `/docs/api-spec.md` for endpoint design

For governance structure, see `/docs/governance.md`
