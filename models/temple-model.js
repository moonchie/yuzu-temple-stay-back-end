const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const templeSchema = new Schema ({
    nameENG: { type: String },
    nameJPG: { type: String },
    address: { type: String },
    geoLocation: [Number],
    contact: { type: String },
    city: { type: String },
    picture: { type: Array },
    description: { type: String },
    guests: { type: String },
    beds: { type: String },
    bath: { type: String },
    Amentities: [{
        wifi: Boolean,
        essentials: Boolean,
        kitchen: Boolean,
        tv: Boolean,
        airconditioning: Boolean,
        heating: Boolean,
        smokeDetec: Boolean
    }],
    price: {type: Number}
    });


const Temple = mongoose.model("Temple", templeSchema);

module.exports = Temple;