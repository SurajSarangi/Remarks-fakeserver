const mongoose = require("mongoose");

const remarkSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    message : {
        type: String
    }
}, {timestamps: true});

const Remarks = mongoose.model('remarks', remarkSchema);
module.exports = Remarks;