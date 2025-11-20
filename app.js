

const express = require('express');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());
app.use(express.json());

// ROUTES IMPORT
const userRoutes = require('./userRoutes');

// Use routes
app.use('/api', userRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send("Server is running...");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
