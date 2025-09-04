import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Welcome from './UserComponents/Welcome';

import Login from './UserComponents/Login';
import Signup from './UserComponents/SignUp';

import CreateCourse from './UserComponents/CreateCourse';
import UpdateCourse from './UserComponents/UpdateCourse';
import TakeCourse from './UserComponents/TakeCourse';
import DeleteCourse from './UserComponents/DeleteCourse';


import CourseDashboard from './UserComponents/CourseDashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<CourseDashboard/>}/>
          <Route path="/create" element={<CreateCourse />} />
        <Route path="/update" element={<UpdateCourse />} />
        <Route path="/take" element={<TakeCourse />} />
        <Route path="/delete" element={<DeleteCourse />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
