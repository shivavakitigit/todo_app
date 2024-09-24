import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTaskStatus, deleteTask } from '../services/taskService';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
   
    }
  };

  const handleCreateTask = async () => {
    try {
      await createTask(newTask);
      fetchTasks();
      setNewTask('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateStatus = async (taskId, status) => {
    try {
      await updateTaskStatus(taskId, status);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">My Tasks</h2>
            <button className="btn btn-danger mb-4" onClick={logout}>Logout</button>
            <form className="input-group mb-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="form-control"
                placeholder="New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleCreateTask}>
                Add Task
              </button>
            </form>
            <ul className="list-group">
              {tasks.map((task) => (
                <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{task.title}</span>
                  <div className="d-flex align-items-center">
                    <select
                      className="form-select me-2"
                      value={task.status}
                      onChange={(e) => handleUpdateStatus(task.id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="in progress">In Progress</option>
                      <option value="done">Done</option>
                    </select>
                    <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
