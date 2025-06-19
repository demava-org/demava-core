Demava Layer and Community Model

This document outlines Demava’s dynamic, multi-domain governance structure — enabling users to participate in various roles across diverse communities, domains, and institutions.

⸻

🧭 Purpose

Unlike traditional governance systems based solely on geography or hierarchy, Demava supports:
	•	Multiple overlapping communities
	•	Field-based and identity-based participation
	•	Scalable layer-based deliberation per domain

⸻

🧱 Core Entities

🧑‍💼 User
	•	A single identity with multiple memberships
	•	Can participate in different domains and regions
	•	Voting rights depend on memberships and layers

🌐 Domain (Community)
	•	A thematic or functional group (e.g., Engineering, BJJ, Chess, Acme Inc.)
	•	Domains may be global or localized
	•	Each domain has its own layered governance tree

🏛️ Layer
	•	Represents a tier of influence within a domain
	•	Generally ranges from Layer 1 (local) to Layer 10 (national/global)
	•	Used to aggregate votes, elect delegates, and escalate proposals

📍 Region (Optional)
	•	Represents a user’s physical or community geography (e.g., Tehran, Isfahan)
	•	Can be hierarchical: City → Province → Country
	•	Used for filtering, subgrouping, or voting eligibility

🏢 Org
	•	A special type of domain representing an institution or structured community
	•	Can contain subdomains (e.g., teams, departments)
	•	Can follow internal layer logic (e.g., Team Lead → Department → Company Board)

⸻

👤 Membership Model

Each user has one or more memberships:

{
  "user_id": 123,
  "domain": "DataScience",
  "region": "Tehran",
  "layer": 3,
  "role": "Contributor"
}

Users can:
	•	Vote in proposals relevant to their domain & layer
	•	Delegate or be elected as representatives
	•	Create proposals specific to each membership context

⸻

🧠 Layer Depth Per Domain

Each domain has its own set of layers, typically:

Layer	Scope (example)
1	Club / Team / Local Unit
2	Regional Chapter
3	City-level
4	Provincial
5–6	National
7–10	Global or federated

A user may be at Layer 2 in Chess but Layer 4 in BJJ.

⸻

🧩 Federation Model

Domains can be nested, enabling larger federations:

🏛️ Acme Inc.
  ├── 🧪 R&D Team (Domain)
  └── 📈 Marketing (Domain)

Each subdomain can maintain its own proposal space and governance.

Higher layers can:
	•	Pull delegates from lower layers
	•	Aggregate decisions across domains (via meta-proposals)

⸻

🔄 Context Switching (Frontend UX)
	•	User selects “Active Context”:
	•	Domain: e.g., BJJ
	•	Layer: e.g., Layer 3
	•	Region: optional
	•	UI displays relevant proposals, votes, dashboards

⸻

🔐 Access Rules
	•	Voting is scoped by domain + layer + region
	•	Admins can define quorum thresholds per context
	•	Some domains may require verification (e.g., employee status, degree, etc.)

⸻

🔭 Future Extensions
	•	Cross-domain delegates or voting (meta-layer governance)
	•	Visual governance map (Graph view)
	•	Smart notifications by context: “You’ve been delegated voting power in Chess / Layer 4”
	•	Reputation system or badge-based trust

⸻

✅ Summary

Demava’s architecture supports:
	•	Multi-community participation
	•	Nested and federated governance
	•	Layer-based delegation and bottom-up influence

This flexible structure reflects modern civic realities — where each person can belong to multiple networks, roles, and responsibilities simultaneously.

Democracy is not one-size-fits-all. Demava adapts to you.