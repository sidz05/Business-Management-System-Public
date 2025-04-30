# Business Management System

A web application that enables businesses to register, manage departments, and verify employees through an intuitive admin dashboard. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

## 🌐 Live Demo

[Live Site on Netlify](https://luminous-lamington-25de97.netlify.app)

## 📌 Features

- ✅ Business registration with document upload (GST, Aadhaar)
- 🏢 Department creation and employee assignment
- 🔐 Aadhaar-based employee verification
- 🔄 Toggle employee verification status (admin-only)
- 📂 Document management system
- 📱 Responsive UI for desktop, tablet, and mobile
- ✨ Smooth transitions and animations
- 🔒 Secure backend with Supabase RLS policies

## 📦 Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Netlify

## 📁 Folder Structure


## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/business-management-system.git
cd business-management-system
npm install

Add your Supabase URL and anon key to .env:
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

npm run dev

npx vite build
netlify deploy --prod
