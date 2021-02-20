const mongoose = require("mongoose");
const studSchema = new mongoose.Schema({
    roll : {
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    Class : {
        type : String,
        required : true,
        trim : true
    },
})
const stud = new mongoose.model("stud",studSchema);
module.exports = stud;