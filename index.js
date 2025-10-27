const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const questRoutes = require('./src/routes/questRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const mongodbRoute = 'mongodb+srv://carlospalacio_db_user:Parlante12@theclusted.kqjlpls.mongodb.net/CharacterDB';

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/Quest', questRoutes);

// Test route
app.get('/', (req, res) => res.send('API is running...'));

async function start() {
    try {
        await mongoose.connect(mongodbRoute);
        console.log('Conexión con MongoDB correcta', mongoose.connection.name);
        app.listen(PORT, () => {
            console.log(`API listening on port ${PORT}`);
        });
    } catch (error) {
        console.error(`Error de conexión a DB: ${error.message}`);
    }
}

start();
