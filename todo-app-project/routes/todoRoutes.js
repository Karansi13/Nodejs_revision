const express = require('express');
const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Apply auth middleware to all todo routes
router.use(authMiddleware);

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
