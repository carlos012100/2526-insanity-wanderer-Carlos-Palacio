const express = require('express')
const router = express.Router();

// ruta GET quest all para obtener el historial
router.get('/quest/all', getAllQuest())