const mongoose = require('mongoose')
const {Schema} = mongoose

const songsSchema = new Schema ({
    name: String,
    description : String,
    time: Number,
    instruments: [String]
})
module.export = mongoose('userDatabase', songsSchema)

