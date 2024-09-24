const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/tasks');
const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
