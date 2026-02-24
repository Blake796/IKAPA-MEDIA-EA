require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const contactRoutes = require('./routes/contactRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_PATH = process.env.FRONTEND_PATH || '../frontend';

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // For local development flexibility
}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, FRONTEND_PATH)));

// Routes
app.get('/api/health', (_req, res) => {
  res.json({ success: true, status: 'ok', env: process.env.NODE_ENV });
});

app.use('/api', contactRoutes);
app.use('/api/gallery', galleryRoutes);

// Error fallback
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Serving frontend from: ${path.join(__dirname, FRONTEND_PATH)}`);
});
