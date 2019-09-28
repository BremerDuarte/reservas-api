const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

PlaceSchema.plugin(mongoosePaginate);

mongoose.model('Place', PlaceSchema);