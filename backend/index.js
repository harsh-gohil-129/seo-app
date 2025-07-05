const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover the Best Cakes in Mumbai at Cake & Co",
  "Cake & Co: A Slice of Heaven in Mumbai",
  "Experience the Magic of Cakes at Cake & Co",
];


app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const responseData = {
    rating: 4.3,
    reviews: 127,
    headline: headlines[Math.floor(Math.random() * headlines.length)],
  };
  res.json(responseData);
});


app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query; 
  const newHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: newHeadline });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});