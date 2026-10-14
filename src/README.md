# Vektor — Enterprise Cloud Monitoring & Neural IT Operations Platform

A responsive product landing page designed and built in code for **Vektor**, a fictional autonomous cloud monitoring and infrastructure telemetry platform.

## 🎨 Design System
- **Product Concept:** Autonomous multi-cloud telemetry, eBPF packet inspection, and cost arbitrage platform.
- **Color Palette:**
  - **Background (Dark Canvas):** Deep Obsidian Navy (`#060A17`, `#0A1026`)
  - **Primary Color:** Cyber Cyan (`#06B6D4`)
  - **Accent Color:** Electric Violet (`#8B5CF6`)
- **Typography:**
  - **Headings & Body:** `Plus Jakarta Sans`
  - **Telemetry & Code:** `JetBrains Mono` (`tabular-nums`)

## 📐 Page Architecture
1. **Navbar:** Sticky glassmorphic navigation with smooth section scrolling and a mobile drawer.
2. **Hero Section:** Value proposition, dual CTAs, trust indicators, and a 4-column KPI proof strip.
3. **Product Introduction & Interactive Mockup (`Dashboard.tsx`):** Interactive telemetry control surface with a live traffic spike simulator, SVG bandwidth waveforms, and node health inspection.
4. **Key Features (`ArchitectureBento.tsx` & `InteractiveTopology.tsx`):** Bento grid of core capabilities paired with an interactive topology configurator and Terraform IaC generator.
5. **Benefits & ROI (`CaseStudies.tsx` & `PricingCalculator.tsx`):** Quantified enterprise engineering results and an interactive node-scaling pricing calculator.
6. **Call to Action (`CallToAction.tsx`):** High-contrast conversion section with instant demo scheduling.
7. **Footer:** Structured multi-column sitemap and compliance badges.

## 🛠️ Tech Stack
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## 🚀 Run Locally
1. Install dependencies:
   ```bash
   npm install