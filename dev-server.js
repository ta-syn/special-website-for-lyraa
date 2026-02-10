// Simple development server to bypass Vite + Tailwind v4 compatibility issues
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from project root
app.use(express.static('.'));

// Serve built files if they exist
app.use('/assets', express.static('dist/assets'));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Development server running on http://localhost:${PORT}`);
  console.log(`✨ No Vite compatibility issues!`);
});