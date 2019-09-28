const mongoose = require('mongoose');

const Place = mongoose.model('Place');

module.exports = {
    async destroy(req, res) {
        await Place.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async index(req, res) {
        const { page = 1 } = req.query;
        const places = await Place.paginate({}, { page: page, limit: 10 });

        return res.json(places);
    },

    async show(req, res) {
        const place = await Place.findById(req.params.id);

        return res.json(place);
    },

    async store(req, res) {
        const place = await Place.create(req.body);

        return res.json(place);
    },

    async update(req, res) {
        const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(place);
    }
};