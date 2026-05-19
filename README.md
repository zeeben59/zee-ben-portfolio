# Monwuba Benedict Okechukwu Portfolio 🚀

Modern, animated, production-ready portfolio — built with **React + Tailwind + Framer Motion + EmailJS**.

---

## ✨ Features

- Dark/Light mode toggle
- Framer Motion animations throughout
- Typing animation in Hero
- Animated skill progress bars
- Animated counters
- Project filter tabs
- Testimonial auto-scroll slider
- Fully working EmailJS contact form
- Form validation + toast notifications
- Floating WhatsApp button with pulse glow
- Scroll progress bar
- Page load animation
- Fully responsive (mobile-first)
- Glassmorphism UI

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav + dark mode toggle
│   ├── Footer.jsx          # Links + back-to-top
│   ├── ScrollProgress.jsx  # Top progress bar
│   ├── FloatingWhatsApp.jsx# Fixed WhatsApp button
│   ├── Toast.jsx           # Success/error notifications
│   └── PageLoader.jsx      # Initial load screen
├── sections/
│   ├── Hero.jsx            # Landing with typing animation
│   ├── About.jsx           # Bio + skill bars + counters
│   ├── Skills.jsx          # Tech stack cards
│   ├── Services.jsx        # Service offering cards
│   ├── Projects.jsx        # Filterable project grid
│   ├── Testimonials.jsx    # Auto-scroll testimonial slider
│   └── Contact.jsx         # EmailJS form + contact info
├── hooks/
│   └── useScrollAnimation.js # IntersectionObserver, typing, counters
├── App.jsx                 # Root component
├── main.jsx                # Entry point
├── index.css               # Tailwind + custom CSS
└── emailjs.js              # EmailJS config
```

---

## ⚡ Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure EmailJS

Open `src/emailjs.js` and add your **Public Key**:

```js
export const EMAILJS_CONFIG = {
  SERVICE_ID:  'service_muxptmb',   // already set
  TEMPLATE_ID: 'template_bcwkews',  // already set
  PUBLIC_KEY:  'YOUR_PUBLIC_KEY',   // ← paste here
}
```

**How to get your Public Key:**
1. Go to [emailjs.com](https://emailjs.com) → sign in
2. Navigate to **Account → General → API Keys**
3. Copy your **Public Key** and paste it above

**EmailJS Template variables** — make sure your template uses:
- `{{from_name}}` — sender's name
- `{{from_email}}` — sender's email
- `{{message}}` — the message body

### 3. Update personal details

- **WhatsApp number** → `src/components/FloatingWhatsApp.jsx` (line 5)
- **WhatsApp number** → `src/sections/Contact.jsx` (CONTACT_INFO)
- **Social links** → `src/components/Footer.jsx` and `src/sections/Contact.jsx`
- **Email** → `src/sections/Contact.jsx` (CONTACT_INFO)
- **Project links** → `src/sections/Projects.jsx` (live/github fields)
- **Resume PDF** → Add your `resume.pdf` to `/public/`

### 4. Run locally

```bash
npm run dev
```

Visit → http://localhost:5173

### 5. Build for production

```bash
npm run build
```

---

## 🚀 Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

### Option B — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework Preset: **Vite**
5. Click **Deploy** ✅

### Option C — Drag & Drop

```bash
npm run build
```

Drag the `dist/` folder to [vercel.com/new](https://vercel.com/new).

---

## 🎨 Customisation

| What             | Where                              |
|------------------|------------------------------------|
| Colours          | `tailwind.config.js` → `colors`    |
| Fonts            | `index.html` + `tailwind.config.js`|
| Typing words     | `src/sections/Hero.jsx`            |
| Projects         | `src/sections/Projects.jsx`        |
| Testimonials     | `src/sections/Testimonials.jsx`    |
| Skills           | `src/sections/Skills.jsx`          |
| Services         | `src/sections/Services.jsx`        |
| About stats      | `src/sections/About.jsx`           |

---

## 📦 Dependencies

| Package               | Version   | Purpose                    |
|-----------------------|-----------|----------------------------|
| `react`               | ^18.2.0   | UI framework               |
| `react-dom`           | ^18.2.0   | DOM rendering              |
| `framer-motion`       | ^11.0.0   | Animations                 |
| `@emailjs/browser`    | ^4.3.3    | Email sending              |
| `react-icons`         | ^5.0.1    | Icon library               |
| `tailwindcss`         | ^3.4.3    | Utility CSS                |
| `vite`                | ^5.2.0    | Build tool                 |

---

## 📄 License

MIT — free to use and modify for personal or commercial projects.

---

Built with ❤️ by [Monwuba Benedict Okechukwu](https://github.com/) — Nigeria 🇳🇬
