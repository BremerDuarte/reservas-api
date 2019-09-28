const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ReserveSchema = new mongoose.Schema({
    day: {
        type: Date,
        required: true
    },
    initialHour: {
        type: String,
        required: true,
    },
    finalHour: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    _placeID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

ReserveSchema.plugin(mongoosePaginate);
mongoose.model('Reserve', ReserveSchema);