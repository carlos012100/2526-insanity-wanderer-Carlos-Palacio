const express = require('express')
const router = express.Router();

const questController = require('../controller/questController')
// ruta GET quest all para obtener el historial
router.get('/quest/all', questController.getAllQuests)


router.post("/quest/all", questController.insertNewQuest);



module.exports = router

