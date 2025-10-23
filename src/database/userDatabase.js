const Missions = require('../models/QuestModels')

const getAllQuest = async () => {
    try {
        const allQuests = await Missions.find()
        return allQuests;
    }
    catch (error)
    {
        throw error;
    }
}
module.exports =  
{
    getAllQuest
}