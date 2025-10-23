const mongoose = require('mongoose');

const { Schema } = mongoose;

const questSchema = new Schema({
    day_number: Number,
    day_week: String,
    start_time: String,
    end_time: String,
    characters: [String]
});

// Model name = 'Quest' → collection = 'quests'
module.exports = mongoose.model('Quest', questSchema);
