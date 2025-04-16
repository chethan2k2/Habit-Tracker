# 🌱 Habit Tracker Web App

A simple and lightweight Habit Tracker built for the web!  
Track your daily habits, build streaks, and set daily reminders to stay consistent.  

## ✨ Features

- ✅ Add, edit, and delete daily habits
- 🔁 Track streaks automatically
- 📅 Mark habits as "done" for the day
- 🔔 Set daily reminder times (notification system in progress)
- 💾 Persistent storage using localStorage (no backend needed)

## 🖥️ Demo

Coming soon!

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/habit-tracker.git
cd habit-tracker
```

### 2. Open the app

Simply open `index.html` in your browser.

---

## 🧠 How It Works

- Each habit has a **name**, **streak counter**, **last completed date**, and an optional **reminder time**.
- When a habit is marked as done:
  - If last completed was yesterday → Streak increases
  - If missed a day → Streak resets
  - If already completed today → No changes
- Data is saved in **localStorage** so it stays even after refreshing or closing the tab.

---

## 📦 Tech Stack

- HTML
- CSS
- JavaScript
- Web Notifications API *(planned)*

---

## 📅 Upcoming Features

- ⏰ Notification system for daily reminders
- 📈 Habit history/calendar view
- 🎯 Weekly/monthly habit goals
- 📱 Mobile responsive UI

---

## 💡 Contributing

Pull requests are welcome! If you have ideas for improvements, feel free to fork the project and submit a PR.

---

## 📄 License

MIT License. Use freely, share kindly 🙌

---
Built as a personal productivity tool and learning project. Inspired by popular habit apps like Loop, Habitica, and Streaks.
