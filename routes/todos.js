var express = require('express');
var router = express.Router();

var { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../services/todos_service');

router.get('/', async function(req, res, next) {
    const todos = await getTodos();
    res.json(todos);
});

router.get('/:id', async function(req, res, next) {
    const id = req.params.id;
    const todo = await getTodoById(id);
    res.json(todo);
});

router.post('/', async function(req, res, next) {
    const data = req.body;
    const todo = await createTodo(data);
    res.status(201).json(todo);
});

router.put('/:id', async function(req, res, next) {
    const id = req.params.id;
    const data = req.body;
    await updateTodo(id, data);
    res.status(204).json();
});

router.delete('/:id', async function(req, res, next) {
    const id = req.params.id
    await deleteTodo(id);
    res.status(204).json();
});

module.exports = router;
