const Quests = require('../database/Quests');

const getAllQuests = async () => {
    try {
        const allQuests = await Quests.getAllQuests();
        return allQuests;
    } catch (error) {
        throw error;
    }
};
const insertNewQuest = async (newQuest) => {
    try {
        const createdQuest = await Quests.insertNewQuest(newQuest)
        return createdQuest;
    }
    catch (error){
        throw error
    }
}

module.exports = { getAllQuests, insertNewQuest };
