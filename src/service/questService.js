const Quests = require('../database/Quests');

const getAllQuests = async () => {
    try {
        const allQuests = await Quests.getAllQuests();
        return allQuests;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllQuests };
