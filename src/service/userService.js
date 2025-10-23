const userDatabase = requre('../database/userDatabase')

const getAllQuest = async () => {
    try{
        const allQuests = userDatabase.getAllQuest()
        return allQuests
    }
    catch {
        throw error;
    }
}
module.exports = {
    getAllQuest
}