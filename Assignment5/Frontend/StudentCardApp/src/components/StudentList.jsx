import React, { useEffect, useState } from "react";
import { getStudents, createStudent, deleteStudent, updateStudent } from "../api/studentApi";
import StudentCard from "./StudentCard.jsx";
import StudentForm from "./StudentForm.jsx";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    const fetchStudents = async () => {
        const res = await getStudents();
        setStudents(res.data);
    };

    useEffect(() => { fetchStudents(); }, []);

    const handleCreate = async (student) => {
        await createStudent(student);
        fetchStudents();
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };

    const handleEdit = (student) => {
        setEditingStudent(student);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleUpdate = async (data) => {
        if (!editingStudent) return;
        await updateStudent(editingStudent._id, data);
        setEditingStudent(null);
        fetchStudents();
    };

    const handleCancelEdit = () => {
        setEditingStudent(null);
    };

    return (
        <div>
            <h1>Student Cards</h1>
            <StudentForm onSubmit={editingStudent ? handleUpdate : handleCreate} student={editingStudent} onCancel={handleCancelEdit} />
            <div className="card-container">
                {students.map(s => <StudentCard key={s._id} student={s} onDelete={handleDelete} onEdit={handleEdit} />)}
            </div>
        </div>
    );
};

export default StudentList;
