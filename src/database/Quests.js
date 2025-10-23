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
module.exports =  
{
    getAllQuests
}
