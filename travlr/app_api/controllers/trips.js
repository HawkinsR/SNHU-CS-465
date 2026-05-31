const mongoose = require('mongoose');
// Mongoose .model() method just needs the name of the model, not sure why we had a file path. Old version?
// const Trip = mongoose.model('../models/travlr');
// const Model = mongoose.model('trips');
const Model = mongoose.model('trips');

const tripsList = async (req, res) => {
    const q = await Model
        .find({})
        .exec();


    if (!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

const tripsByCode = async (req, res) => {
    const q = await Model
        .find({ 'code': req.params.tripCode })
        .exec();


    if (!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsByCode
};