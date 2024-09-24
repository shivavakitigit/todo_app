import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice we use Routes now
import App from './App';
import Auth from './Components/Auth';
import TaskList from './Components/TaskList';
import Profile from './Components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
