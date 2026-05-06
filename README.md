<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=white&style=for-the-badge" alt="Vite" />
  <img src="https://img.shields.io/badge/Zustand-4338ca?style=for-the-badge&logoColor=white" alt="Zustand" />
</div>

<h1 align="center">🌐 Crypto Explorer</h1>

<p align="center">
  Una aplicación web moderna para explorar métricas en tiempo real de la red Bitcoin y consultar transacciones (hashes) directamente desde la blockchain.
</p>

---

## 🔗 Live Demo

> **🌐 Prueba la aplicación en vivo aquí:**  
> [**[LINK_DE_TU_APLICACION_AQUI]**](#) *(Reemplaza este enlace con tu URL de Vercel, Netlify o GitHub Pages)*

---

## ✨ Características

- 📊 **Dashboard en Tiempo Real:** Visualización de métricas clave del mercado y actividad on-chain de Bitcoin.
- 🔍 **Explorador de Transacciones (Hash):** Busca y analiza cualquier hash de transacción para obtener información detallada al instante.
- 🎨 **Diseño Moderno y Responsivo:** Interfaz de usuario elegante con estilo glassmorphism, optimizada para dispositivos móviles y de escritorio.
- ⚡ **Alto Rendimiento:** Desarrollado con Vite, React 19 y Zustand para un manejo de estados global rápido y eficiente.
- 📡 **Integración de API Externa:** Consumo de datos fiables provenientes de **Blockchair API**.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Enrutamiento:** [React Router DOM v7](https://reactrouter.com/)
- **Gestor de Estado:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Empaquetador/Bundler:** [Vite](https://vitejs.dev/)

## 🚀 Instalación y Uso

Sigue estos pasos para correr el proyecto localmente en tu máquina:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/crypto_Explorer.git
cd crypto_Explorer
```

### 2. Instalar dependencias
Asegúrate de tener Node.js instalado, luego ejecuta:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
El proyecto estará disponible en `http://localhost:5173`.

### 4. Construcción para producción (Build)
```bash
npm run build
```

## 📂 Estructura del Proyecto

```text
src/
├── components/      # Componentes de la interfaz de usuario (Layout, Header, StatsCard...)
├── hooks/           # Custom hooks para lógica reutilizable (Data fetching)
├── pages/           # Vistas principales (Dashboard, HashExplorer)
├── services/        # Servicios para peticiones a la API (Blockchair)
├── store/           # Archivos de configuración de Zustand
├── types/           # Definiciones y tipados de TypeScript
├── utilities/       # Funciones utilitarias (Formateo de fechas, números, etc.)
├── App.tsx          # Configuración principal de Rutas
└── main.tsx         # Punto de entrada de la aplicación
```

## 📡 API Integrada

Este proyecto consume la [API de Blockchair](https://blockchair.com/api) para obtener:
- `/stats`: Estadísticas globales y de mercado de la red de Bitcoin.
- `/dashboards/transaction/{hash}`: Información profunda sobre transacciones individuales.

## 📸 Capturas de Pantalla

*(Próximamente)*
<!-- Puedes agregar imágenes aquí usando:
<img src="./public/screenshot1.png" width="800">
-->

---

<div align="center">
  <p>Desarrollado con ❤️ y código limpio.</p>
</div>
