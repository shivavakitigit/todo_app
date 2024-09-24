const { v4: uuidv4 } = require('uuid');
const db = require('../models/database');

exports.createTask = (req, res) => {
  const { title } = req.body;
  const taskId = uuidv4();
  db.run('INSERT INTO tasks (id, user_id, title, status) VALUES (?, ?, ?, ?)', 
    [taskId, req.user.id, title, 'pending'], function (err) {
    if (err) return res.status(500).send(err.message);
    res.send({ id: taskId, title, status: 'pending' });
  });
};

exports.getTasks = (req, res) => {
  db.all('SELECT * FROM tasks WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.send(rows);
  });
};

exports.updateTask = (req, res) => {
  const { status } = req.body;
  db.run('UPDATE tasks SET status = ? WHERE id = ? AND user_id = ?', 
    [status, req.params.id, req.user.id], function (err) {
    if (err) return res.status(500).send(err.message);
    res.send('Task updated');
  });
};

exports.deleteTask = (req, res) => {
  db.run('DELETE FROM tasks WHERE id = ? AND user_id = ?', [req.params.id, req.user.id], function (err) {
    if (err) return res.status(500).send(err.message);
    res.send('Task deleted');
  });
};
