# LiveTrack — Smart Livestock Tracking

A modern web application for farmers to track, monitor, and manage their livestock in real-time. LiveTrack provides GPS tracking, health monitoring, herd analytics, and smart alerts to help farmers make better farming decisions.

## Features

- **Real-Time GPS Tracking** — Know exactly where every animal is at all times with geo-fencing and boundary alerts
- **Health Monitoring** — Track vitals, vaccination schedules, and health events with automatic notifications
- **Herd Analytics** — Visualize weight trends, breeding cycles, and productivity metrics with intuitive dashboards
- **Smart Alerts** — Receive instant notifications for unusual behavior, boundary breaches, or missed health checks
- **Digital Records** — Replace paper logs with complete digital history for every animal, accessible anywhere
- **Works Offline** — No signal? No problem. The app syncs automatically when connectivity is restored

## Tech Stack

- **Next.js 16** — React framework with App Router for fast, scalable applications
- **React 19** — Modern UI with hooks and concurrent rendering
- **TypeScript** — Type-safe development for better code quality
- **Tailwind CSS** — Utility-first styling for responsive design
- **Heroicons & Tabler Icons** — High-quality SVG icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd livestock-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure

```
app/
├── page.tsx              # Landing/home page
├── layout.tsx            # Root layout with metadata
├── contact-sales/        # Sales inquiry page
├── register/             # User registration
├── signin/               # User authentication
└── globals.css           # Global styles
```

## License

This project is proprietary. All rights reserved.
