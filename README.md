# 🪶 Anita's Wild Backyard Photography Portfolio

A simple Angular-based photography portfolio where only the admin can log in and upload photos. Built using Angular and Firebase.

---

## 🚀 Features

- 🖼️ Public photo gallery
- 🔐 Hidden admin login route (`/anita-only`)
- 📤 Admin-only image uploads
- 🎨 Global styles with CSS variables and custom fonts
- 🔐 Firebase Authentication & Storage integration
- 💾 Secure environment variable management with `.env`

---

## 📦 Tech Stack

- Angular 19
- Firebase (Auth + Storage)
- CSS3 / Google Fonts
- Dotenv + Node script for environment injection

---

## 🔧 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/awbp-photo-portfolio.git
cd awbp-photo-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Setup

Before running the app, create a `.env` file at the root of the project based on the `.env.example` template:

```bash
cp .env.example .env
```

Then run the following command to generate the `environment.ts` file using your `.env` values:

```bash
npm run prestart
```

✅ This will create `src/environments/environment.ts`, which is `.gitignore`d to keep your Firebase secrets safe.

---

### 3. Start the Development Server

```bash
ng serve
```

Then open your browser to:

[http://localhost:4200](http://localhost:4200)

---

## 🛡️ Security Note

- Your `.env` file is never committed to version control.
- `environment.ts` is generated locally and ignored by Git.
- This ensures your Firebase credentials stay private.

---

## 🧾 License

This project is for educational and portfolio purposes only.

---

Made with ❤️ by Codetivated
