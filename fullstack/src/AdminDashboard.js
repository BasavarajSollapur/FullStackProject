import React, { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddStudent = () => {
    setStudents([...students, { username, password }]);
    setUsername("");
    setPassword("");
  };

  const handleRemoveStudent = (usernameToRemove) => {
    setStudents(students.filter((student) => student.username !== usernameToRemove));
  };

  const handleAddTeacher = () => {
    setTeachers([...teachers, { username, password }]);
    setUsername("");
    setPassword("");
  };

  const handleRemoveTeacher = (usernameToRemove) => {
    setTeachers(teachers.filter((teacher) => teacher.username !== usernameToRemove));
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <div className="button-group">
        <button onClick={handleAddStudent}>Add Student</button>
        <button onClick={() => handleRemoveStudent(username)}>Remove Student</button>
        <button onClick={handleAddTeacher}>Add Teacher</button>
        <button onClick={() => handleRemoveTeacher(username)}>Remove Teacher</button>
      </div>

      <div className="data-section">
        <h3>Students</h3>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.username} - {student.password}{" "}
              <button onClick={() => handleRemoveStudent(student.username)}>Remove</button>
            </li>
          ))}
        </ul>

        <h3>Teachers</h3>
        <ul>
          {teachers.map((teacher, index) => (
            <li key={index}>
              {teacher.username} - {teacher.password}{" "}
              <button onClick={() => handleRemoveTeacher(teacher.username)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
