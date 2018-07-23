const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const templeSchema = new Schema ({
    nameENG: { type: String, required: true },
    nameJPG: { type: String, required: true},
    address: { type: String },
    telephone: { type: String },
    email: { type: String },
    city: { type: String },
    picture: { type: Array, required: true },
    description: { type: String},
    specialties: {type: Array },
    mealType: { type: String }
})


const Temple = mongoose.model("Temple", templeSchema);

module.exports = Temple;