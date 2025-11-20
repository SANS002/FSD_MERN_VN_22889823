import React, { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, student, onCancel }) => {
    const [name, setName] = useState(student?.name || "");
    const [age, setAge] = useState(student?.age || "");
    const [course, setCourse] = useState(student?.course || "");
    const [image, setImage] = useState(student?.image || "");

    useEffect(() => {
        setName(student?.name || "");
        setAge(student?.age || "");
        setCourse(student?.course || "");
        setImage(student?.image || "");
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, age, course, image });
        setName(""); setAge(""); setCourse(""); setImage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
            <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" required />
            <input value={course} onChange={e => setCourse(e.target.value)} placeholder="Course" required />
            <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
            <button type="submit">{student ? "Update" : "Submit"}</button>
            {student && <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</button>}
        </form>
    );
};

export default StudentForm;
