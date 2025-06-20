# Demava: Influence and Reputation System

This document outlines the proposed **influence rating system** for the Demava platform. It introduces a structured and transparent method to determine user effectiveness and credibility based on roles, community impact, delegation weight, and activity.

---

## 🎯 Objective

To ensure democratic integrity while enabling **high-impact contributors** to gain proportionate influence in decision-making — particularly within communities, professional domains, and nested organizations.

---

## 🧱 Key Concepts

### 🧑 Member Influence Score (MIS)

Each user is assigned a dynamic **Influence Score**, which represents their effectiveness and role in the governance network. It is calculated within the scope of each domain/layer.

---

## 🧮 Influence Score Formula

The influence score (`MIS`) is a weighted combination of:

```
MIS = (A × Membership Size Weight) + (B × Delegated Voting Power) + (C × Contribution Score) + (D × Endorsements) + (E × Regional Equity Score)
```

### Parameters:

| Parameter | Description                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A         | **Membership Size Weight**: Reflects how many people are under the user’s layer or control (e.g., a CEO of 1,000 staff has more weight than one of 10) |
| B         | **Delegated Voting Power**: How many members delegated their vote to this user (adjusted per layer)                                                    |
| C         | **Contribution Score**: Participation in proposals, voting, discussion, moderation, authorship, issue resolution, etc.                                 |
| D         | **Peer Endorsements**: Verified positive ratings from users in the same or lower layer                                                                 |
| E         | **Regional Equity Score (RES)**: Bonus for contributing to underdeveloped or underrepresented regions                                                  |

---

## 🌍 Regional Equity Score (RES)

To encourage experts to support underserved areas, RES is added to the influence score to reward high-impact work in low-activity regions.

### Formula:

```math
RES = K × (1 / sqrt(RegionalActivity + 1)) × (EffectiveContribution)
```

Where:

* `RegionalActivity` = Number of active users + proposals + votes in the region
* `EffectiveContribution` = User's measurable input in the region
* `K` = Tuning coefficient (e.g., 0.5–2)

### Impact:

| Region       | Active Users | Proposal Count | Your Role        | RES Boost? |
| ------------ | ------------ | -------------- | ---------------- | ---------- |
| North Tehran | 5000         | 1200           | Observer         | ❌ Low      |
| Bam, Kerman  | 80           | 4              | Lead Proposer    | ✅ High     |
| Zahedan      | 150          | 15             | Community Leader | ✅ Medium   |

### UI Incentives:

* Display “Equity Impact” badge on profile
* Leaderboards for “Top Builders in Underserved Regions”
* Regional impact map visualization
* Extra weight or visibility for equity-building proposals

### Governance Checks:

* Anti-gaming mechanisms (e.g., prevent spam contributions)
* RES must be transparent and auditable
* Community moderation of valid contributions

---

## 🧩 Layer-Aware Weighting

Higher-layer members have **relative influence** over broader groups. Influence scales **non-linearly** with member counts:

```math
Layer Influence Weight = log2(membership{\_}size + 1)
```

This prevents over-concentration while still rewarding structural importance.

---

## 🔍 Influence Badge Tiers (UX Element)

| Tier      | Score Range | Label                    |
| --------- | ----------- | ------------------------ |
| 🟢 Seed   | 0–100       | New / Minimal impact     |
| 🔵 Core   | 100–500     | Active contributor       |
| 🟣 Pillar | 500–2000    | Recognized leader        |
| 🟠 Beacon | 2000+       | Institutional influencer |

Badges appear next to names in proposals, dashboards, and ballots.

---

## 🔄 Updating Scores

* Updated **nightly or hourly** using batch jobs or event streams
* Tracked historically for transparency
* Available via API and visible in user profile

---

## 🔐 Anti-Gaming & Fairness

* Delegation caps per user or domain
* Penalty for inactivity or abuse
* Contribution score decay over time without activity
* Community challenge process for contested influence ratings

---

## 📡 Future Extensions

* Reputation staking (tie influence to commitments)
* Voting weight redistribution (quadratic or conviction voting)
* Domain-specific influence (e.g., you're a Pillar in BJJ but a Seed in ClimateTech)
* Regional grant incentives or proposal funding pools

---

## ✅ Summary

Demava’s Influence & Reputation Model supports:

* Transparency in weighted civic participation
* Bottom-up accountability
* Recognition of those who lead, build, and contribute
* Equitable growth by rewarding contributions to underserved regions

This hybrid reputation system allows the platform to remain democratic while rewarding real-world impact and domain-based leadership.
