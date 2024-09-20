const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/zoo_management', { useNewUrlParser: true, useUnifiedTopology: true });

// API routes will go here...

app.listen(3001, () => {
  console.log('Server running on port 3001');
});


const vetReportsRoute = require('./routes/vetReports');
app.use('/api', vetReportsRoute);


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const animalsRoute = require('./routes/animals');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/zoo_management', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/api', animalsRoute);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
