const mongoose = require('mongoose')

const {Schema} = mongoose;

const coinsField = new Schema 
 ({
    coins: Number
 })

const equipmentATT = new Schema ({
    instrument: Number,
    pouch: coinsField,
    weight: Number
})
const charactersSchema = new Schema ({
    name : String,
    occupation: String,
    description: String,
    stamina: Number,
    favourite_drink: String,
    equipment: equipmentATT,

});

module.exports = mongoose.model('userDatabase', charactersSchema)

