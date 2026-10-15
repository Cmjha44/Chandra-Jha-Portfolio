# Chandra Jha — Generative AI & Systems Engineering Portfolio

A modern, production-grade personal portfolio website tailored for **Chandra Jha**, Master of Science candidate in Generative Artificial Intelligence (Applied AI for Business) at CUNY SPS, Information Systems professional, and Six Sigma Green Belt with expertise in AI systems, data pipelines, healthcare operations, and financial advisement.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> **Privacy update applied**: Personal telephone / cell phone numbers have been completely excluded from all site views, metadata, resume modals, contact cards, and source data in accordance with user feedback. Direct communication is routed securely via professional channels (Email, LinkedIn, and the interactive contact form).

- **Confirmed Identity & Contact Channels**:
  - Full Name: **Chandra Jha**
  - Professional Headline: **Generative AI & Data | Workflow Automation & Process Optimization | MS in GenAI @ CUNY SPS | Six Sigma Green Belt | Google Certified**
  - Location: **New York City Metropolitan Area**
  - Contact Channels: `chandra.jha44@gmail.com` · `linkedin.com/in/chandrajha44` · `gamma.app/docs/CHANDRA-JHA-swfki67sjc82xvw` *(No cell phone number)*
- **Core Areas of Expertise**:
  - **AI & Technical Solutions**: Generative AI workflows, system integration, technical mentorship, and workflow automation.
  - **Operations & Quality**: Process mapping, Six Sigma Green Belt methodology, discrepancy reduction, and operational audit support.
  - **Data & Systems**: Enterprise administration (CUNYfirst, Brightspace, EI Hub), structured reporting, and database synchronization.
- **Visual Aesthetic & Styling**: Modern slate canvas with high-intent electric violet & indigo accents (`#6366F1` / `#4F46E5`), clean unboxed metadata with typographic separators, subtle hairline borders, and fluid light/dark mode persistence.
- **Interactive Capabilities**:
  - Filterable project matrix with interactive category buttons.
  - Interactive Project Detail Lightbox Modal.
  - Interactive Live Profile & Project Customizer Drawer with JSON import/export (allowing real-time updates without code editing).
  - Validated contact form with simulated delivery feedback and one-click email client dispatch.
  - Interactive "View & Download Resume / CV" modal and direct printer-friendly clean layout (strictly without phone numbers).

---

## 1. Overview & Core Concept

- **What It Does**: Presents a comprehensive, responsive digital portfolio showcasing Chandra Jha's interdisciplinary journey across Generative AI, healthcare data reconciliation & billing automation, higher-ed instructional technology mentoring, financial advisement, and aviation operations.
- **Target Audience & Persona**: Engineering recruiters, hiring managers, AI research collaborators, academic peers, and enterprise leaders seeking applied AI engineers, automation specialists, and technical systems analysts.
- **Key Value**: Bridges the gap between practical operations (data integrity, healthcare billing, Six Sigma quality control) and modern Generative AI engineering (RAG pipelines, automated document workflows, prompt engineering).

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero & Immediate Identity**: High-impact split-screen hero featuring Chandra's name, punchy elevator pitch, quick social links (LinkedIn, GitHub, Email, Portfolio), and primary CTA buttons ("Explore Work", "Get in Touch", "View Resume").
2. **Quantitative Impact Strip**: Prominent metrics row showcasing academic honors (4x Dean's List), years of operations & advisory experience, and core domains.
3. **About Me & Philosophy Pillars**: Narrative bridging business administration, operations, and applied AI, accompanied by 3 highlight cards: *Applied AI Solutions*, *Operations & Six Sigma Quality*, and *Enterprise Data Systems*.
4. **Experience Timeline (Reverse Chronological)**:
   - Nationwide (Life Insurance Agent, 2023–2026)
   - Transamerica (Business Professional & Advisory, 2020–2026)
   - Achieve Beyond (NYS Early Intervention Billing & Admin Staffing, 2025–2026)
   - LaGuardia Community College (Instructional Design Assistant & Student Technology Mentor, 2023–2024)
   - Makalu Air & AeroStar (First Officer & ATP-CTP Aviation Program)
5. **Academic Credentials & Honors Grid**:
   - MS in Generative AI (Applied AI for Business, CUNY SPS)
   - BS in Management Information Systems and Services (CUNY SPS)
   - BS in Computer Information Systems / Data Analytics (Zicklin School of Business)
   - AS in Business Administration with Honors (LaGuardia CC)
   - AeroStar Aviation Certification
   - Dean's List Honors (4 consecutive terms: 2023, 2024, 2025)
6. **Filterable Projects Matrix**:
   - Filter categories: *All*, *Applied AI & RAG*, *Data & Automation*, *Web & EdTech*, *Financial Systems*.
   - Each project card features title, problem & impact summary, tech stack tags, live demo & source links, and opens an in-depth modal with architecture notes.
7. **Skills & Competencies Matrix**: Grouped by *Generative AI & Machine Learning*, *Data Analytics & Automation*, *Educational Technology & Platforms*, and *Professional Foundations*.
8. **Contact Section & Footer**: Contact details on the left (Email, Location, LinkedIn, Portfolio; NO phone), validated inquiry form on the right, and clean footer with back-to-top action.

### Visual Identity & Theme
- **Theme Palette**:
  - Dark Mode: Canvas `#0B0F19` (rich midnight slate), Card `#111827`, Hairline Border `#1F2937`, Text Primary `#F9FAFB`, Text Muted `#9CA3AF`.
  - Light Mode: Canvas `#F8FAFC` (soft off-white), Card `#FFFFFF`, Hairline Border `#E2E8F0`, Text Primary `#0F172A`, Text Muted `#64748B`.
  - Focal Accent: Electric Indigo / Violet (`#6366F1` hover `#4F46E5`).
- **Typography**: Clean geometric typography using modern sans stack, with tabular numbers (`tabular-nums`) for dates, metrics, and quantitative achievements.
- **Anti-Slop Restraint**: No arbitrary glowing pulsing dots on static text, no comment syntax headers (`//`), no compound pill badges, and no fake status tickers.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Complete Privacy Compliance (No Phone Numbers)**
  - *Chosen Approach*: Strictly remove phone number from all data objects, components, modals, and exportable profiles. Retain email (`chandra.jha44@gmail.com`), LinkedIn, portfolio link, and location.
  - *Why*: Protects personal privacy while maintaining direct, professional contact paths.
- **Decision 2: Authentic Resume Content Alignment**
  - *Chosen Approach*: Integrate Chandra's latest refined professional summary highlighting Six Sigma Green Belt, process mapping, and discrepancy reduction alongside Generative AI.
  - *Why*: Reflects his exact self-description and dual strength in operations rigor + AI technology.
- **Decision 3: Interactive Live Customizer & JSON Persistence**
  - *Chosen Approach*: Slide-over customizer drawer allowing Chandra to adjust copy, add new projects, or toggle sections live in the browser with localStorage persistence and JSON export/import.
  - *Why*: Enables ongoing updates without developer intervention.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          App.tsx (Root State)                          │
│  - Theme State (light/dark with localStorage sync)                     │
│  - Portfolio Data State (without phone number, localStorage sync)      │
│  - Active Project / Modal State                                        │
│  - Customizer Drawer State                                             │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼──────────────────────────────┐
    ▼                               ▼                              ▼
┌──────────────────┐    ┌───────────────────────┐    ┌──────────────────┐
│  Navigation Bar  │    │      Hero Section     │    │   Impact Strip   │
│  - Brand Wordmark│    │  - Headline & Bio     │    │  - Metrics & KPI │
│  - Nav Links     │    │  - Quick CTAs         │    │  - Dean's List   │
│  - Theme Toggle  │    │  - Social Icons       │    └──────────────────┘
│  - Resume CTA    │    └───────────────────────┘              │
└──────────────────┘                │                          │
                                    ▼                          ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Main Content Sections                           │
│  ├── About Me & Philosophy Pillars                                     │
│  ├── Experience Timeline (Nationwide, Achieve Beyond, LaGuardia, etc.) │
│  ├── Education & Academic Honors (CUNY SPS, Zicklin, LaGuardia CC)     │
│  ├── Filterable Projects Grid (AI/RAG, Automation, Web, FinTech)       │
│  ├── Certifications & Honors Badges (Six Sigma, Dean's List, Google)  │
│  ├── Skills & Domain Competencies                                      │
│  └── Contact Section (Email, LinkedIn, Portfolio + Validated Form)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┴──────────────────────────────┐
    ▼                                                              ▼
┌──────────────────────────────┐              ┌─────────────────────────┐
│ Project & Resume Modals      │              │ Profile Editor Drawer   │
│ - Full Project Deep-Dive     │              │ - Live Edit Fields      │
│ - Printable CV / Resume View │              │ - JSON Export / Import  │
│ - Direct Download Action     │              │ - Reset to Default      │
└──────────────────────────────┘              └─────────────────────────┘
```

### Component Breakdown
- `src/types/portfolio.ts`: Clean TypeScript definitions.
- `src/data/portfolioData.ts`: Chandra Jha's authentic resume data structured cleanly (no phone number).
- `src/components/Navbar.tsx`: Sticky 3-zone top navigation with mobile drawer, theme toggle, and resume trigger.
- `src/components/Hero.tsx`: Split hero with professional bio, quick-links (Email, LinkedIn, Portfolio), and CTAs.
- `src/components/ExperienceTimeline.tsx`: Reverse-chronological timeline with quantifiable achievements.
- `src/components/EducationSection.tsx`: Academic degrees, honors, and certifications.
- `src/components/ProjectsGrid.tsx`: Filterable interactive project cards with tech tags and detail modal.
- `src/components/SkillsSection.tsx`: Clean categorized competencies.
- `src/components/ContactSection.tsx`: Direct email/LinkedIn/portfolio + validated inquiry form.
- `src/components/ResumeModal.tsx`: Print-ready, structured resume viewer with download and print actions.
- `src/components/ProfileCustomizerDrawer.tsx`: In-browser live editor.
- `src/components/Footer.tsx`: Minimal footer with copyright and back-to-top scroll button.
