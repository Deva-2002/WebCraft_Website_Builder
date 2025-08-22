# 🌐 Webcraft

**Webcraft** is an AI-powered website builder that lets you describe your dream website in plain English and generates a guided website plan for you.  
It is built using **WebContainers** (similar architecture used by Claude), with a **React frontend** and **Node.js backend**.

## 🖼️ Demo

🎥 Check out the demo video here: [View Demo](demo_webcraft.mp4)


---

## ✨ Features

- 🪄 **AI-Powered Website Planning** — Describe your website and let Webcraft generate a step-by-step plan.  
- 💻 **WebContainers Integration** — Run Node.js directly in the browser (Claude-like architecture).  
- ⚡ **Fullstack App** — Built with **React (frontend)** and **Node.js (backend)**.  
- 🎨 **Modern UI** — Inspired by ChatGPT’s sleek and minimal interface.  
- 🔐 **Extensible Architecture** — Easy to plug in different AI models or backend APIs.

---

## 🛠️ Tech Stack

- **Frontend:** React + TailwindCSS  
- **Backend:** Node.js (Express)  
- **AI API:** Anthropic Claude / Other LLMs (pluggable)  
- **Runtime:** WebContainers (via `@webcontainer/api`)  

---

## 🚀 Getting Started


```bash
git clone https://github.com/Deva-2002/WebCraft_Website_Builder
cd WebCraft_Website_Builder
cd backend
npm install
tsc -b
node dist/index.js
cd ..
cd frontend
npm run dev
