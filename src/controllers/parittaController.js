const parittaData = require("../data/paritta.json");

const getAllChants = (req, res) => {
    res.json(parittaData.chants);
}

const getChantById = (req, res) => {
    const chantId = parseInt(req.params.chantId);
    const chant = parittaData.chants.find(chant => chant.chantId === chantId);

    if (chant) {
        res.json(chant);
    } else {
        res.status(404).json({
            status: "404",
            error: "Bad Request",
            message: "The requested resource does not exist."
        });
    }
}

module.exports = {
    getAllChants,
    getChantById
}