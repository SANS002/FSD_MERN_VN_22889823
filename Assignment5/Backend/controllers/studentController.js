const Student = require("../models/Student");


exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { name, age, course, image } = req.body;
        const student = new Student({ name, age, course, image });
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);
        res.json({ message: "Student deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
