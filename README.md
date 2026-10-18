# Chandra Jha — Portfolio & Resume Website

A minimalist, high-performance professional portfolio and interactive curriculum vitae for **Chandra Jha**.

- **Focus**: Systems-level AI management and workflow orchestration
- **Education**: 
  - Master of Science in Generative Artificial Intelligence candidate at **CUNY School of Professional Studies**
  - Bachelor of Science in Information Systems at **CUNY School of Professional Studies** (Dean's List)
  - Associate of Science in Business Administration with Honors at **LaGuardia Community College (CUNY)**
- **Professional Background**:
  - Life Insurance Specialist (Universal Index Life [IUL] & Term Insurance) at **Nationwide** and **Transamerica**
  - Healthcare Data Reconciliation (NYS Early Intervention Hub) at **Achieve Beyond**
  - Instructional Design & Student Technology Mentorship at **LaGuardia CC**
  - Aviation Commercial Multi-Crew First Officer training (Makalu Air & AeroStar ATP-CTP)
- **Certifications**: Six Sigma Green Belt, CSS (Cascading Style Sheets) Certified, Google AI Professional, Google Cybersecurity Professional, Google IT Support.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or v20+)
- npm or bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be compiled to the `dist/` folder.

---

## 🌐 Deployment Guides

### Option 1: Automatic Deployment on GitHub Pages
This repository includes a configured GitHub Actions workflow in `.github/workflows/static.yml`.

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git branch -M main
   git remote add origin https://github.com/Cmjha44/Chandra-jha.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every time you push to the `main` branch, GitHub Actions will automatically install dependencies, compile Vite, and deploy `dist/` to your live GitHub Pages URL:
   `https://cmjha44.github.io/Chandra-jha/`

---

### Option 2: Deployment on Cloudflare Pages

#### Method A: Direct Upload (Fastest)
1. Download `chandra-jha-portfolio-dist.zip` (available via the Download button on the portfolio).
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
3. Name your project (e.g. `chandra-jha-portfolio`).
4. Drag and drop the `dist/` folder or the zip file, and click **Deploy site**.

#### Method B: Connect to Git
1. In Cloudflare Pages, click **Connect to Git** and choose `Cmjha44/Chandra-jha`.
2. Build Settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Click **Save and Deploy**. Cloudflare Pages will rebuild automatically upon git push.

---

## 📁 Repository Structure
```
├── .github/workflows/static.yml   # Automatic GitHub Pages CI/CD workflow
├── public/
│   ├── _redirects                 # SPA client-side routing rule for Cloudflare Pages
│   ├── chandra-jha-portfolio-dist.zip # Pre-compiled downloadable production bundle
│   └── README.md                  # Downloadable project guide
├── src/
│   ├── components/                # Modular React components
│   │   ├── Navbar.tsx             # Navigation with language switcher & theme toggle
│   │   ├── Hero.tsx               # Minimalist hero with headline & download actions
│   │   ├── AboutSection.tsx       # Administrative depth & hiking/nature balance
│   │   ├── SkillsSection.tsx      # 4 Core competencies & technical stack
│   │   ├── ExperienceTimeline.tsx # Career history
│   │   ├── EducationSection.tsx   # MS in GenAI & BS in Information Systems
│   │   ├── ProjectsGrid.tsx       # Curated projects & GitHub sync
│   │   ├── ContactSection.tsx     # Visitor information record form
│   │   └── Footer.tsx             # Minimalist footer with downloads & channels
│   ├── data/
│   │   └── portfolioData.ts       # Portfolio dataset & internationalization strings
│   ├── types/
│   │   └── portfolio.ts           # TypeScript interfaces
│   ├── App.tsx                    # Top-level state and layout
│   └── index.css                  # Tailwind CSS styling with warm neutral palette
├── index.html                     # HTML entry point with Playfair Display & Inter
├── package.json
└── vite.config.ts
```

---

## 📄 License
Apache-2.0 License. Designed and maintained for Chandra Jha.
