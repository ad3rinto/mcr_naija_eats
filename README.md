# 🇳🇬 MCR Naija Eats

A fast, privacy-first directory aggregating the best Nigerian food vendors across Greater Manchester. Built as a community discovery layer — no heavy frameworks, no tracking, just flavour.

🌐 **Live Demo:** [https://yourusername.github.io/mcr-naija-eats/](#)  
📝 **Suggest a Vendor:** [Google Form Link](#)

---

## 🎯 Why This Exists

Nigerian food in Manchester is thriving but scattered across Just Eat, Deliveroo, Instagram, and WhatsApp. This project solves the **discovery problem** by giving locals and visitors a single, searchable place to find authentic spots, view their socials, and check hygiene ratings — before they ever place an order.

## ✨ Features

- 🔍 Real-time search & filtering (by location, dish, price)
- 📱 Fully responsive, loads in <0.5s
- 📦 Zero dependencies (vanilla HTML/CSS/JS + `data/vendors.json`)
- 🔄 Easy updates: just edit JSON & push to `main`
- 🛡️ Privacy-first: no cookies, no trackers, no external calls

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Structure | HTML5 |
| Styling | CSS3 (CSS Variables, Grid/Flexbox) |
| Logic | Vanilla JavaScript (ES6) |
| Data | `data/vendors.json` |
| Hosting | GitHub Pages |

## 🚀 How to Run Locally

1. Clone this repo: `git clone https://github.com/yourusername/mcr-naija-eats.git`
2. Open `index.html` in your browser (or use Live Server in VS Code)
3. No build step, no `npm install`, no dependencies.

## 📦 How to Add/Update Vendors

1. Open `data/vendors.json`
2. Add or edit an entry using this format:

```json
{
  "name": "Vendor Name",
  "location": "Longsight",
  "specialties": ["Jollof Rice", "Suya"],
  "price": "££",
  "instagram": "https://instagram.com/...",
  "tiktok": "https://tiktok.com/...",
  "hygiene": 5,
  "delivery": true,
  "note": "Your 1-sentence curator take."
}
