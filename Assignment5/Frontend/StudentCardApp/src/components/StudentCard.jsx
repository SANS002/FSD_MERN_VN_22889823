import React from "react";

const StudentCard = ({ student, onDelete, onEdit }) => (
  <div className="card">
    {student.image && <img src={student.image} alt={student.name} />}
    <h3>{student.name}</h3>
    <p>Age: {student.age}</p>
    <p>Course: {student.course}</p>
    <div className="card-actions">
      <button onClick={() => onEdit && onEdit(student)}>Update</button>
      <button onClick={() => onDelete(student._id)}>Delete</button>
    </div>
  </div>
);

export default StudentCard;
