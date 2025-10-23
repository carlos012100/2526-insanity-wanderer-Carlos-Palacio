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

module.exports = { getAllQuests };
