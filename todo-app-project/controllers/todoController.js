const Todo = require('../models/Todo');

// Get all todos for the authenticated user
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id });
        res.json(todos);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Add a new todo
const addTodo = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) return res.status(400).json({ message: 'Text is required' });

        const todo = new Todo({
            text,
            user: req.user.id,
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a todo by ID
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;

        if (!text && completed === undefined) {
            return res.status(400).json({ message: 'Text or completed status is required' });
        }

        const todo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true });
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        res.json(todo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a todo by ID
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
