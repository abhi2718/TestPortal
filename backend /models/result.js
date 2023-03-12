const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const resultSchema = new Schema({
    score: {
        type:Number,
    },
    userRef: {
        type: Schema.Types.ObjectId,
        ref:"User"
   }
}, {
    timestamps:true,
});

module.exports = mongoose.model("Result", resultSchema);