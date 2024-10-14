const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');

// Cargar variables de entorno
require('dotenv').config();  // Asegúrate de tener esta línea

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', authRoutes);  // Authentication routes

app.listen(3000, () => {
  console.log('Server running on port 3000');
});