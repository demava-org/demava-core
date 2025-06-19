Demava Identity & Participation Structure

This document outlines how users participate in multiple domains, layers, and regions within the Demava ecosystem. It provides a flexible yet structured model to reflect the multi-dimensional nature of real-world identities.

⸻

🧠 Key Principles
	•	Users are not bound to a single role or location
	•	Identity is contextual: a user may hold different roles in different domains
	•	Domains can overlap, nest, or federate into higher levels
	•	Voting rights and delegation operate per domain–layer–region combination

⸻

🧩 Core Entities

User

Represents a unique individual in the system.

Domain

A field, community, or organization (e.g., Engineering, BJJ, Acme Inc., Chess Federation)

Layer

Level of governance within a domain (e.g., local, regional, national)

Region

Geographical scope (e.g., Tehran, Isfahan, Iran)

Membership

A relationship connecting a User to a specific Domain–Layer–Region, along with a role or status.

⸻

🧱 Data Model (Simplified)

User:
  id: u123
  name: Amir
  memberships:
    - domain: Chess
      region: Tehran
      layer: 2
      role: Player
    - domain: BJJ
      region: Iran
      layer: 3
      role: Black Belt
    - domain: AcmeCompany
      region: Tehran
      layer: 2
      role: Employee
    - domain: DataScience
      region: Tehran
      layer: 3
      role: Engineer


⸻

🗳️ Participation Rights
	•	A user can vote or propose in any domain where they have an active membership
	•	Votes and proposals are isolated by domain and region, unless explicitly federated
	•	Users can delegate their vote per domain, per layer

⸻

🧠 Identity Profiles

Each user can have multiple identity contexts, like this:

Domain	Region	Layer	Role
Chess	Tehran	2	Player
BJJ	Iran	3	Black Belt
Company X	Tehran	2	Employee
DataScience	Tehran	3	Engineer

Each profile is shown in the UI as a selectable context: “You are acting as: Engineer / L3 / Tehran”

⸻

🧩 Federated Domain Architecture

Domains can:
	•	Operate independently (e.g., Chess Federation)
	•	Belong to organizations (e.g., DataScience within Acme Inc.)
	•	Federate into umbrella networks (e.g., Sports Federation → Chess, BJJ)

This enables:
	•	Nested decision-making
	•	Cross-domain proposals
	•	Context-specific governance models

⸻

🧠 Governance Rules per Domain

Each domain can define its own:
	•	Number of layers
	•	Voting thresholds
	•	Delegation permissions
	•	Proposal rules (who can submit, time windows, etc.)

These rules will be stored as governance.yml in each domain config.

⸻

🔐 Future Enhancements
	•	Verifiable credentials per domain (e.g., digital BJJ Black Belt ID)
	•	Dynamic onboarding into domains via self-claim or admin approval
	•	Anonymous voting in sensitive communities
	•	Graph-based role visualization for transparency

⸻

📚 See Also
	•	governance.md
	•	architecture.md
	•	glossary.md

⸻

Demava reflects the real complexity of identity: you are never just one thing — and your voice should be heard in every circle you belong to.