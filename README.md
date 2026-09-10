# YSIT Genuine Parts — Corporate Web Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![Platform](https://img.shields.io/badge/Platform-ysitkorea.com-DC2626?style=for-the-badge&logo=google-chrome&logoColor=white)
![Standard](https://img.shields.io/badge/OEM_Standard-1%3A1_Mobis_Spec-1E293B?style=for-the-badge)
![Compliance](https://img.shields.io/badge/QC-IATF_16949_%26_ISO_9001-059669?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)

Official high-converting B2B automotive engineering and corporate web platform for **YSIT Genuine Parts** ([ysitkorea.com](https://ysitkorea.com)).

The visual language, brand positioning, and content structure position YSIT alongside global Korean OEM tier-1 parts suppliers (such as **CTR**, **Mando**, and **Sangsin Brake**).

---

## 🏛️ The 3-Pillar Global Strategic Foundation

1. **Republic of Korea Entity (HQ & Engineering Compliance):**
   - Registered South Korean corporate standing.
   - Strict 1:1 OEM dimensional verification ($\pm 0.02\text{ mm}$ CAD tolerance) for Hyundai and Kia platforms.
2. **China Manufacturing & Sourcing Hub (Ningbo / Guangzhou):**
   - Direct factory-floor multi-stage quality assurance (spectroscopy, tensile hardness, dynamic balancing).
   - High-volume containerized capacity ($120,000+$ units/month) and VCI moisture-proof export packaging.
3. **20+ Years Oman & GCC Distribution Legacy (Muscat Hub):**
   - Over two decades of commercial distribution across Oman and GCC markets.
   - Field-engineered to endure $50^\circ\text{C}+$ desert summer heat, sand abrasion, and heavy thermal loads.

---

## ⚡ Core Features & Interactive Capabilities

- **Dynamic RFQ & Part Inquiry Engine (No-Catalog Solution):**
  - **Tab 1: Fast OEM / VIN Search & Basket Builder**: Real-time autocomplete for OEM part numbers (e.g., `58101-2VA50`, `54500-C1000`, `25310-D3000`), custom part inputs, target quantities, and destination port selector.
  - **Tab 2: Bulk Inquiry Upload**: Drag-and-drop support for `.xlsx`, `.csv`, `.pdf`, and purchase order images with a pre-formatted CSV template downloader.
  - **1-Click WhatsApp Business Integration**: Automatically compiles entered parts, quantities, and buyer logistics into a structured WhatsApp message ready to send with 1 click.
  - **Official RFQ Document Preview Modal**: Generates a clean, print/PDF-ready formal quotation sheet with unique RFQ reference IDs.
- **Vehicle Platform Matrix:**
  - **Hyundai Fleet**: Accent, Elantra, Sonata, Tucson, Santa Fe, Creta, H-100 / Porter Commercial.
  - **Kia Fleet**: Pegas, Rio, Cerato, Optima / K5, Sportage, Sorento, Bongo Commercial.
  - **Strategic Chinese Platform Line**: Geely, Chery, Haval, Changan, and BYD replacement program.
- **Core Product Systems Grid:**
  - Suspension & Steering, Braking Systems & Hydraulics, Engine & Transmission, Cooling & Climate Electrical with interactive CAD blueprint modals.
- **Quality & Testing Lab Simulator:**
  - 3D CMM coordinate verification, metallurgical spectrometer testing, 500-hour salt spray, and GCC thermal cycling chamber.
- **Global Hubs & Logistics Telemetry:**
  - Active operational telemetry bar (Seoul HQ | Ningbo/Guangzhou | Muscat) with direct GCC container transit times.

---

## 📂 Project Structure

```
.
├── index.html              # Main corporate web platform
├── 404.html                # Custom 404 error page
├── favicon.svg             # High-resolution brand wing icon
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML sitemap for ysitkorea.com
├── vercel.json             # Vercel configuration & security headers
├── package.json            # Node/npm project metadata
├── .gitignore              # Git ignore configuration
├── assets/
│   ├── css/
│   │   └── styles.css      # Industrial styling, blueprint grids, glowing badges, chamfers
│   └── js/
│       ├── catalog-data.js # Master OEM reference dataset for Hyundai, Kia, and Chinese platforms
│       └── main.js         # Reactive RFQ engine, WhatsApp payload generator, filters, modals
└── README.md               # Repository documentation
```

---

## 🚀 Quick Deployment Guide

### Option 1: Deploy to Vercel via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: initial production release of YSIT Genuine Parts platform"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ysit-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository `ysit-website`.
   - Click **Deploy** (No build configuration needed, zero-config static deployment).

3. **Add Custom Domain (`ysitkorea.com`)**:
   - In your Vercel Project Settings $\rightarrow$ **Domains**.
   - Add `ysitkorea.com` and `www.ysitkorea.com`.
   - Configure DNS records as provided by Vercel (`A Record: 76.76.21.21` or `CNAME: cname.vercel-dns.com`).

---

### Option 2: Deploy directly with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

---

### Option 3: Local Testing

You can preview the site locally using any static file server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node npx serve
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🛡️ License & Copyright

© 2026 **YSIT Korea Co., Ltd.** All rights reserved. Registered in South Korea. Dedicated to OEM-level replacement standards.
