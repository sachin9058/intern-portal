# 🚀 Intern Dashboard Prototype

A stylish, modern, and animated prototype for an **Intern Referral Dashboard** built using **Next.js**, designed with **neon glassmorphism**, and powered by a simple REST API or mock JSON backend.

---

## ✨ Features

### ✅ Minimum Features
- 🌐 **Homepage/Login Page** – Beautiful glassmorphism interface with neon glow and animated entry button.
- 📊 **Dashboard** – Displays:
  - Intern Name
  - Dummy Referral Code (e.g., `sachin2025`)
  - Total Donations Raised (fetched from backend)
  - Static Rewards Section
- 🧭 **Leaderboard Page** – Shows a ranked list of dummy users based on raised donations.
- 🔁 Navigation buttons between Dashboard ↔ Leaderboard
- 🎉 Visual Enhancements:
  - Confetti animation on dashboard
  - Framer Motion transitions
  - Neon-glow buttons and backgrounds

### 🧪 Bonus (Optional) Features
- 🧠 Confetti effect
- 🔌 Backend API integration (via Express/Firebase/static JSON)
- 📦 Ready for expansion with Firebase or MongoDB

---

## 🛠 Tech Stack

| Frontend | Backend | Styling | Animation |
|----------|---------|---------|-----------|
| Next.js  | Express.js or Mock JSON | Tailwind CSS | Framer Motion, Confetti |

---

## 📂 Project Structure

/app
/page.tsx # Neon Homepage
/dashboard/page.tsx # Intern Dashboard
/leaderboard/page.tsx # Leaderboard with API fetch
/public
/api/leaderboard.json # Dummy data for leaderboard (if static)
/styles
/globals.css # Tailwind base styling

yaml
Copy
Edit

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/intern-dashboard.git
cd intern-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
Then open http://localhost:3000 to view the app.

📡 API Example (Mock JSON)
json
Copy
Edit
[
  { "id": 1, "name": "Sachin Kumar", "referral": "sachin2025", "donations": 7500 },
  { "id": 2, "name": "Priya Mehta", "referral": "priya2025", "donations": 5600 },
  ...
]
🎯 Future Ideas
Firebase auth & real-time donation updates

Admin view for managing interns

Custom referral links and QR code generator

PDF certificate for top performers

📸 Preview
Add screenshots or a Loom demo link here if available!

🧑‍💻 Author
Sachin Kumar
Connect on LinkedIn • GitHub
