import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateCourse = () => {
  const [id, setId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [courseExists, setCourseExists] = useState(false);
  const navigate = useNavigate();

  const checkCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/courses/${id}`);
      setCourseName(res.data.courseName);
      setInstructor(res.data.instructor);
      setCourseExists(true);
    } catch {
      alert('Course not found');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/courses/update/${id}`, { courseName, instructor });
      alert('Course updated successfully');
      navigate('/courses'); 
    } catch {
      alert('Error updating course');
    }
  };

  return (
    <div className="page-center">
      <div className="form-box">
        <h2>Update Course</h2>
        {!courseExists ? (
          <div>
            <input
              type="text"
              placeholder="Course ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <button onClick={checkCourse}>Check</button>
          </div>
        ) : (
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            /><br /><br />
            <input
              type="text"
              placeholder="Instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              required
            /><br /><br />
            <button type="submit">Update</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateCourse;
