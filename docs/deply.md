# Demava Deployment Guide

This guide helps developers, civic organizations, or institutions deploy a working instance of Demava — locally or in the cloud.

---

## ⚙️ Requirements

### ✅ Software Prerequisites:

* Docker + Docker Compose
* Git
* Python 3.11+
* Node.js 18+
* PostgreSQL (if deploying manually)

### 📦 External Services (optional):

* OpenAI API key (for GenAI features)
* Mail server (for notifications)
* Cloud provider (GCP, Azure, AWS, or Fly.io)

---

## 🧪 Local Development Setup (Dockerized)

```bash
# Clone the repository
$ git clone https://github.com/demava/demava-core.git
$ cd demava-core

# Copy environment variables
$ cp .env.example .env

# Run the system
$ docker-compose up --build
```

* Frontend will run at: `http://localhost:3000`
* Backend API at: `http://localhost:8000`
* Database: PostgreSQL container (port 5432)

---

## 🛠️ Manual (Non-Docker) Setup

### 1. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Cloud Deployment (Beta)

### Option A: Fly.io Quick Deploy

1. Install Fly CLI
2. Run `fly launch`
3. Accept defaults and connect PostgreSQL add-on
4. Deploy with `fly deploy`

### Option B: GCP or Azure (Docker Compose)

* Use GCP Cloud Run or Azure Container Instances
* Define secrets using their respective secret managers
* Use Cloud SQL or Azure Database for Postgres

---

## 🔐 Environment Variables

| Variable         | Description                            |        |
| ---------------- | -------------------------------------- | ------ |
| `DATABASE_URL`   | PostgreSQL connection URI              |        |
| `OPENAI_API_KEY` | GenAI access (optional)                |        |
| `JWT_SECRET`     | Secret key for auth tokens             |        |
| `FRONTEND_URL`   | Used for CORS config                   |        |
| `ALLOWED_FIELDS` | Pipe-separated list (e.g. "Engineering | Arts") |

---

## 🧠 Enabling AI Modules

To use GPT-based summarization or proposal assistance:

```bash
OPENAI_API_KEY=sk-...  # Add to .env file
```

Then enable AI services in the backend config or `.env`.

---

## 🛡️ Security & Updates

* Rotate JWT secret and DB password regularly
* Set rate limits and CSRF protection
* Keep dependencies up to date with Dependabot or Renovate
* Monitor logs (e.g., via Grafana or GCP Logging)

---

## 🧭 Next Steps

* For governance model, see `/docs/governance.md`
* For API reference, see `/docs/api-spec.md`
* For roadmap and setup tasks, see `/docs/roadmap.md`

> Demava can run on a laptop or across a continent — it's your decision platform, your way.
