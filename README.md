<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=white&style=for-the-badge" alt="Vite" />
  <img src="https://img.shields.io/badge/Zustand-4338ca?style=for-the-badge&logoColor=white" alt="Zustand" />
</div>

<h1 align="center">🌐 Crypto Explorer</h1>

<p align="center">
  A modern web application to explore real-time metrics of the Bitcoin network and query transactions (hashes) directly from the blockchain.
</p>

---

## 🔗 Live Demo

> **🌐 Try the live application here:**  
> [**cryptoexplorer.ronaldmode123.workers.dev**](https://cryptoexplorer.ronaldmode123.workers.dev/)

---

## ✨ Features

- 📊 **Real-Time Dashboard:** Visualization of key market metrics and on-chain activity for Bitcoin.
- 🔍 **Transaction Explorer (Hash):** Search and analyze any transaction hash to get detailed information instantly.
- 🎨 **Modern & Responsive Design:** Elegant user interface with a glassmorphism style, fully optimized for both desktop and mobile devices.
- ⚡ **High Performance:** Built with Vite, React 19, and Zustand for fast rendering and efficient global state management.
- 📡 **External API Integration:** Consumes reliable data from the **Blockchair API**.

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Bundler:** [Vite](https://vitejs.dev/)

## 🚀 Installation and Usage

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/crypto_Explorer.git
cd crypto_Explorer
```

### 2. Install dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
The project will be available at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI components (Layout, Header, StatsCard...)
├── hooks/           # Custom React hooks for data fetching and logic
├── pages/           # Main views/pages (Dashboard, HashExplorer)
├── services/        # Services for API requests (Blockchair)
├── store/           # Zustand global state configuration
├── types/           # TypeScript definitions and interfaces
├── utilities/       # Utility functions (date formatting, number formatting, etc.)
├── App.tsx          # Main Application Routing component
└── main.tsx         # Application entry point
```

## 📡 API Integration

This project consumes the [Blockchair API](https://blockchair.com/api) to fetch:
- `/stats`: Global statistics and market metrics for the Bitcoin network.
- `/dashboards/transaction/{hash}`: In-depth data about specific individual transactions.

## 📸 Screenshots

*(Coming Soon)*
<!-- You can add images here using:
<img src="./public/screenshot1.png" width="800">
-->

---

<div align="center">
  <p>Built with ❤️ and clean code.</p>
</div>
