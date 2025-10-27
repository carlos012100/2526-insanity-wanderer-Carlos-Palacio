const questService = require('../service/questService');

const getAllQuests = async (req, res) => {
    try {
        const allQuests = await questService.getAllQuests();

        if (allQuests.length === 0) {
            return res.status(404).send({ message: "QUEST NO EXISTEN" });
        }

        return res.send({ status: "OK", data: allQuests });
    } catch (error) {
        res.status(error?.status || 500)
           .send({ status: "FAILED", message: "ERROR al realizar la peticion", data: { error: error?.message || error }});
    }
};

const insertNewQuest = async (req, res) => {

    const { body } = req;
    
    if(
        !body.day_number ||
        !body.day_week ||
        !body.start_time ||
        !body.end_time ||
        !body.characters
    ) {
        res
            .status(400)
            .send ({
                status: "FAILED",
                data: {
                    error: 
                    "One of the keys are missing, have a look a the input data"

                },
            });
            return;
    }
    const newQuest = {

        day_number : body.day_number,
        day_week : body.day_week,
        start_time : body.start_time,
        end_time : body.end_time,
        characters : body.characters
    };
    try 
    {
        const createdQuest = await questService.insertNewQuest(newQuest)
        res.status(201).send( {status: "OK", data: createdQuest});
    }
    catch (error)
    {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED",
                message: "ERROR al realizar la peticion:",
                data: { error: error?.message || error}
            })
    }
}
module.exports = { getAllQuests, insertNewQuest};
