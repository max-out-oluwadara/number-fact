// src/index.js
const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();
const port = 3000;
const numberClassificationRoutes = require('./routes/numberClassificationRoutes');

// Enable CORS with default settings (allows all origins)
app.use(cors());

// Enable JSON parsing middleware
app.use(express.json());

// Register API routes
app.use('/api', numberClassificationRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Number Classification API!');
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
