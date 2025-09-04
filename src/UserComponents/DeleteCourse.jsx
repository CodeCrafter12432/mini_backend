import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteCourse = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8080/courses/delete/${id}`);
      alert('Course deleted successfully');
      navigate('/courses'); 
    } catch {
      alert('Error deleting course');
    }
  };

  return (
    <div className="page-center">
      <div className="form-box">
        <h2>Delete Course</h2>
        <form onSubmit={handleDelete}>
          <input
            type="text"
            placeholder="Course ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          /><br /><br />
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
};

export default DeleteCourse;
