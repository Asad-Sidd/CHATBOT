# VS Code Learning Chatbot

A modern, interactive React-based chatbot application designed to help users learn about VS Code. It features a stunning, premium full-screen user interface inspired by modern glassmorphism design trends. The application utilizes intelligent fuzzy-matching and keyword recognition to understand user intent without requiring exact phrasing.

## Features

- **Premium Glassmorphism UI:** A sleek, semi-transparent frosted glass aesthetic with vibrant warm gradient backgrounds.
- **Dynamic Theming:** Seamless transition between light and dark modes with customized UI elements and smooth animations.
- **Intelligent Keyword Matching:** Uses stop-word filtering and fuzzy matching to deduce user intent based on an extensive local knowledge base.
- **Chat Management:** Seamless auto-scrolling to the latest message and a simple command ("cls") to instantly clear the chat history.
- **Subtle Watermarking:** Includes integrated, non-intrusive watermarks for authorship protection.

## Tech Stack & Tools

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Flexbox, custom variables, backdrop filters, CSS animations)
- **State Management:** React Hooks (useState, useEffect)
- **Key Generation:** Web Crypto API

## How to Setup the Project

Follow these instructions to run the project locally on your machine.

### Prerequisites

Ensure you have Node.js installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd <your-repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your web browser and navigate to `http://localhost:5173/` (or the port specified in your terminal) to view the chatbot.

## Deployment on Vercel

This application is built with Vite and can be easily deployed to Vercel.

1. Push your code to your GitHub repository.
2. Log in to your Vercel Dashboard and click "Add New" -> "Project".
3. Import your GitHub repository.
4. Vercel should automatically detect the "Vite" framework preset.
5. Verify the Build and Output Settings:
   - Build Command: `npm run build` or `vite build`
   - Output Directory: `dist`
6. Click "Deploy". Vercel will install the necessary dependencies, build the project, and provide a live production URL.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you would like to contribute.
