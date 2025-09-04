import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TakeCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleTake = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/courses/take`, {
        userId: Number(userId),
        courseId: Number(courseId),
      });
      alert('Successfully registered for the course');
      navigate('/courses'); 
    } catch (error) {
      console.error(error);
      alert('Error registering for course');
    }
  };

  return (
    <div className="page-center">
      <div className="form-box">
        <h2>Take Course</h2>
        <form onSubmit={handleTake}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <br /><br />
          <input
            type="text"
            placeholder="Course ID"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
          <br /><br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default TakeCourse;
