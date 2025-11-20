const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
    image: { type: String, required: false }, // URL of image
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
