
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Render + MongoDB Atlas!');
});

// Start server
app.listen(PORT, () => {
  console.log(🚀 Server running on port ${PORT});
});