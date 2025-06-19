# Demava Design Guidelines

This document outlines the visual identity and user experience principles that guide the design of the Demava platform, logo, and ecosystem. It ensures consistency across contributions and deployments.

---

## 🎨 Brand Identity

### Logo

* Symbolizes **freedom**, **unity**, and **bottom-up power**
* Elements:

  * Mount Damavand: Stability and rootedness
  * Bird (Ghoghnoos/Phoenix): Freedom, rebirth, and civic spirit

### Wordmark

* Preferably set in **uppercase sans-serif** fonts (e.g., Inter, Montserrat, or DM Sans)
* Placed either below or beside the symbol
* Avoid overly decorative typefaces

### Logo Usage

| Do                               | Don’t                             |
| -------------------------------- | --------------------------------- |
| Use solid background             | Place over complex photos         |
| Keep padding                     | Stretch or crop the logo          |
| Use monochrome or primary colors | Overlay with shadows or gradients |

---

## 🎨 Color Palette

| Color         | Role                      | HEX       |
| ------------- | ------------------------- | --------- |
| Primary Blue  | Identity, links, buttons  | `#2342A4` |
| Freedom White | Backgrounds, content base | `#FFFFFF` |
| Charcoal Gray | Text, borders, depth      | `#2B2B2B` |
| Emerald Green | Success, votes passed     | `#32A35E` |
| Signal Red    | Errors, flags             | `#D9423A` |

Use limited accent colors for accessibility.

---

## 🧭 UX Principles

* **Clarity first**: UI should never confuse; always help users navigate decisions
* **Minimalism**: Reduce noise, especially in civic tools
* **Modularity**: Components should be reusable across councils, proposals, layers
* **Mobile-first**: Works well on phones and low-bandwidth environments
* **International-ready**: Support for Persian, Arabic, English — RTL and LTR
* **AI-friendly UI**: Space for summarizer, assistant, and transparency indicators

---

## 🧩 Components

### Layouts

* Page layout with fixed sidebar or top nav
* Proposal layout: Title, author, summary, full text, vote bar
* Voting: Thumb/Yes/No/Abstain + explanation option

### Reusable Elements

* Avatar + role badge
* Field + layer tags
* Proposal status chips
* Progress bars (quorum, support)
* AI assistant modal

---

## 🖼️ Image Assets

* Store SVG and PNG exports of logos under `/assets/branding/`
* Provide dark/light versions
* Include `.ico` for favicon, and `512x512` PNG for PWA support

---

## 📐 Figma/Design System (optional)

* Maintain shared Figma project for community design updates
* Use component variants for buttons, chips, proposal cards

> Interested designers can join the working group via GitHub Discussions or Discord.

---

## 📚 References

* [Material UI](https://mui.com)
* [Tailwind CSS](https://tailwindcss.com)
* [Figma Design System Starter](https://www.figma.com/community/file/1141065482757574785)

---

> Demava's design should make civic participation beautiful, accessible, and inspiring — for everyone.
