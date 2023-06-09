const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    }
}, {
    timestamps:true,
});

module.exports = mongoose.model("User", userSchema);


