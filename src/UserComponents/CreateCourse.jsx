import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/courses/add', { courseName, instructor });
      alert('Course created successfully');
      navigate('/courses');
    } catch (error) {
      alert('Error creating course');
    }
  };

  return (
    <div className="page-center">
      <div className="form-box">
        <h2>Create New Course</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
