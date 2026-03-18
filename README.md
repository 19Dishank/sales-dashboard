# Sales Dashboard — Dabang

A pixel-perfect React + Vite + Tailwind CSS implementation of the Figma Sales Dashboard design.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Left navigation (345px wide)
│   ├── TopBar.jsx           # Top header with search, user profile
│   ├── TodaysSales.jsx      # 4 stat cards (sales, orders, products, customers)
│   ├── VisitorInsights.jsx  # Multi-line chart (loyal/new/unique customers)
│   ├── TotalRevenue.jsx     # Grouped bar chart (online/offline sales)
│   ├── CustomerSatisfaction.jsx  # Line chart with month comparison
│   ├── TargetVsReality.jsx  # Bar chart with person stats
│   ├── TopProducts.jsx      # Table with progress bars
│   ├── SalesMapping.jsx     # World map with regional sales
│   ├── VolumeVsService.jsx  # Bar chart (volume vs service)
│   └── GetPro.jsx           # Purple gradient promo card
├── App.jsx                  # Main layout assembly
├── main.jsx                 # React entry point
└── index.css                # Global styles + Tailwind

## 🎨 Design Tokens (from Figma)

| Token | Value |
|-------|-------|
| Primary | `#5D5FEF` |
| Dark | `#05004E` |
| Text Dark | `#151D48` |
| Text Gray | `#737791` |
| Background | `#F9FAFB` |
| Card BG | `#FFFFFF` |
| Card Border | `#F8F9FA` |
| Card Shadow | `rgba(238,238,238,0.5)` |
| Font | Poppins (300–700) |
| Border Radius | 20px (cards), 16px (inner), 8px (buttons) |
```

## 📦 Dependencies

- React 18
- Vite 5
- Tailwind CSS 3
- Recharts (charts)
- Lucide React (icons)
