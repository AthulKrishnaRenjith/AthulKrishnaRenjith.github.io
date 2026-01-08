# Athul Krishna Renjith - Portfolio Website

A personal portfolio website showcasing my work in Robotics, AI, and Autonomous Systems. This project features a modern, responsive React frontend and a lightweight Express backend.

## Tech Stack

### Frontend
- **Framework:** React + Vite
- **Styling:** Tailwind CSS + Framer Motion
- **Icons:** React Icons
- **Animation:** Framer Motion (Scroll animations, hero effects)

### Backend
- **Framework:** Express.js (Node.js)
- **Language:** TypeScript
- **Tooling:** Tsup (for building), Nodemon (for dev)

## Project Structure

```
├── frontend/          # React application
│   ├── assets/        # Images and videos
│   ├── landing.jsx    # Main portfolio page
│   └── ...
├── backend/           # Express server
│   ├── index.ts       # Server entry point
│   └── ...
└── dist_frontend/     # Production build (frontend)
└── dist_backend/      # Production build (backend)
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AthulKrishnaRenjith/AthulKrishnaRenjith.github.io.git
   cd AthulKrishnaRenjith.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start both the frontend and backend in development mode:

```bash
npm run dev
```

- Frontend: `http://localhost:5173` (default)
- Backend: `http://localhost:3000` (default)

### Building for Production

To build both the frontend and backend:

```bash
npm run build
```

This will create production-ready assets in `dist_frontend` and `dist_backend`.

## License

[MIT](LICENSE)
