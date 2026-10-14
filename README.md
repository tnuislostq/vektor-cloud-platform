<div align="center">

# Vektor — Enterprise Cloud Monitoring & Neural IT Operations Platform
*A production-ready, glassmorphic frontend UI built for enterprise cloud intelligence.*

[View Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 🌟 Overview
**Vektor** is a fictional next-generation enterprise IT infrastructure and neural cloud management platform designed as part of the Zynvixs frontend UI engineering assessment. It features an immersive dark-navy aesthetic, hardware-accelerated hexagonal vault background animations, and an interactive real-time telemetry control surface.

---

## 🎨 Design & Architecture System
- **Color Palette:** 
  - **Canvas Base:** Deep Obsidian Navy (`#060A17`, `#0A1026`)
  - **Primary Accent:** Cyber Cyan (`#06B6D4`, `#22D3EE`)
  - **Secondary Accent:** Electric Violet (`#8B5CF6`, `#6366F1`)
- **Typography:**
  - **Headings & Body:** `Plus Jakarta Sans` for clean, geometric enterprise readability.
  - **Telemetry Data & Code:** `JetBrains Mono` with tabular numerals (`tabular-nums`) for zero layout jitter.
- **Glassmorphism & Depth:** Frosted glass panels (`backdrop-blur-xl`) with subtle 1px specular borders (`border-white/10`) to eliminate heavy shadows and maintain modern spatial hierarchy.

---

## 📐 Homepage Structure (Section Flow)
1. **Sticky Navigation Bar (`Navbar.tsx`):** Clean brand monogram, smooth section scrolling links, responsive mobile drawer, and primary demo action.
2. **Hero Section (`Hero.tsx`):** Engaging value proposition, balanced typography, aurora gradient glows, and an adjacent 4-column enterprise KPI proof strip.
3. **Product Introduction & Telemetry Console (`Dashboard.tsx`):** Interactive IT ops console featuring a live traffic surge simulator (`+320% ingress spike`), SVG bandwidth waveforms, cluster container health inspector, and eBPF threat feed.
4. **Key Features Bento Grid (`ArchitectureBento.tsx`):** Asymmetric 3-column bento grid detailing predictive infrastructure, post-quantum ML-KEM encryption, spot cost arbitrage, and kernel-level observability.
5. **Interactive Topology Sandbox (`InteractiveTopology.tsx`):** Declarative cloud architecture flow with interactive toggles that generate a production-ready **Terraform HCL manifest** with one-click copy.
6. **Customer Benefits & ROI (`CaseStudies.tsx` & `PricingCalculator.tsx`):** Verified enterprise metrics, customer testimonials, and an interactive node-scaling ROI savings calculator.
7. **Call to Action (`CallToAction.tsx`):** High-impact conversion section encouraging immediate free-trial onboarding or enterprise demo booking.
8. **Footer (`Footer.tsx`):** Structured multi-column sitemap, compliance badges (SOC2, ISO-27001, HIPAA, FedRAMP), and legal links.

---

## 🛠️ Tech Stack
- **Framework:** React 18 / React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (Custom glassmorphic primitives and grid patterns)
- **Icons:** Lucide React
- **Deployment:** Netlify (Continuous deployment with zero build errors)

---

## 📱 Responsive Testing Viewports
Optimized and verified across device viewports using Chrome DevTools:
- **Desktop:** `1440px` (Multi-column bento grids, full dashboard inspection surface)
- **Tablet:** `768px` (Fluid stacking, responsive grid adjustments)
- **Mobile:** `375px` (Compact navigation drawer, single-column touch targets exceeding `44px`)

---

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/tnuislostq/vektor-cloud-platform.git](https://github.com/tnuislostq/vektor-cloud-platform.git)
   cd vektor-cloud-platform
