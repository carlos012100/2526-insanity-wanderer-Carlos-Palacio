const Quests = require('../models/QuestModels')

const getAllQuests = async () => {
    try {

        const quests = await Quests.find()

        return quests;
    }
    catch (error)
    {
        throw error;
    }
};

const insertNewQuest = async (newQuest) => {
    try {
        let questToInsert = new Quests(newQuest)
        const createdQuest = await questToInsert.save()
        return createdQuest
    }
    catch (error)
    {
        throw error
    }
}
module.exports =  
{
    getAllQuests, 
    insertNewQuest
}
