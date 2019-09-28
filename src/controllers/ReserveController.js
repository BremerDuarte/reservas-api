const mongoose = require('mongoose');
const Reserve = mongoose.model('Reserve');
const Place = mongoose.model('Place');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const reserves = await Reserve.paginate({}, { page: page, limit: 10, lean: true });

        if (reserves.docs)
            for (const reserve of reserves.docs)
                reserve.place = await Place.findById(reserve._placeID);

        res.json(reserves);
    },

    async show(req, res) {
        const reserve = await Reserve.findById(req.params.id).lean();

        if (reserve) {
            const place = await Place.findById(reserve._placeID);
            reserve.place = place;
        }

        return res.json(reserve);
    },

    async store(req, res) {
        const reserve = await Reserve.create(req.body);

        return res.json(reserve);
    },

    async update(req, res) {
        const reserve = await Reserve.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(reserve);
    },

    async destroy(req, res) {
        await Reserve.findByIdAndRemove(req.params.id);

        res.send();
    }
};