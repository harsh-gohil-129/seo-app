# GrowthProAI Mini Local Business Dashboard

A full-stack project that simulates a business dashboard for small businesses to track online visibility through ratings, reviews, and AI-generated SEO headlines. Built with **React**, **Tailwind CSS**, and **Node.js/Express** as part of a GrowthProAI Full Stack internship assignment.

---

## 📌 Features

- 🌐 Input business name and location
- 📊 View simulated Google rating and reviews
- 🤖 Display and regenerate AI-style SEO headline
- ⚡ Responsive UI using Tailwind CSS
- 🔄 Backend API with Node.js and Express
- ✅ No database required – fully simulated data

---

## 🧱 Project Structure

```
project-root/
├── backend/
│   ├── index.js              # Express backend server
│   ├── package.json
│   └── ...
├── frontend/
│   └── my-app/
│       ├── src/
│       │   ├── App.jsx
│       │   ├── index.css
│       │   ├── components/
│       │   │   ├── BusinessForm/
│       │   │   └── BusinessDisplay/
│       │   └── services/
│       └── ...
```

---

## ⚙️ Tech Stack

**Frontend:**
- React
- Tailwind CSS
- react-icons

**Backend:**
- Node.js
- Express.js
- CORS

---

## 🚀 Getting Started

### 1. Start Backend

```bash
cd backend
npm install
node index.js
```

> Server runs on: `http://localhost:5000`

### 2. Start Frontend

```bash
cd frontend/my-app
npm install
npm start
```

> React app runs on: `http://localhost:3000`

---

## 🧪 Usage

1. Open `http://localhost:3000`
2. Enter:
   - Business Name (e.g. `Cake & Co`)
   - Location (e.g. `Mumbai`)
3. Click **Generate Insights**
4. View:
   - ⭐ Rating
   - 🗣️ Reviews count
   - 📰 SEO Headline
5. Click 💡 icon to regenerate headline

---

## 🔧 API Endpoints (Backend)

### POST `/business-data`

**Request:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

---

### GET `/regenerate-headline?name=...&location=...`

**Returns:**
```json
{ "headline": "Cake & Co: A Slice of Heaven in Mumbai" }
```

---

## 📬 Contact

Made with ❤️ by [Harsh Gohil]  
📧 gohilharsh129@gmail.com

---