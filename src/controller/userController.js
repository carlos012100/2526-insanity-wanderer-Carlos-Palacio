const userService = requre("../service/userService")

const getAllQuest = async (req, res) => {
try 
{
    const allQuests = await userService.getAllQuest();
    if(allQuests === 0) 
    {
        return res.status(404).send({message: "QUEST NO EXISTEN"});
    }
    res.send({status: "OK", data: allQuests})
}
catch (error){
    res
        .status(error?.status || 500)
        .send({ status: "FAILED", message: "ERROR al realizar la peticuon:", data: {error: error?.message || error}})

}
    
}

module.exports = {
    getAllQuest
}