var express = require('express');
var router = express.Router();

var db = require('../dao/firebase');

router.get('/', async function(req, res, next) {
    const data = await db.ref('todos').once('value');
    res.json(data);
});

router.get('/:id', async function(req, res, next) {
    const id = req.params.id;
    const data = await db.ref(`todos/${id}`).once('value');
    res.json(data);
});

router.post('/', async function(req, res, next) {
    const data = req.body;
    const todo = await db.ref('todos').push(data);
    res.status(201).json(todo);
});

router.put('/:id', async function(req, res, next) {
    const id = req.params.id;
    const data = req.body;
    await db.ref(`todos/${id}`).update(data);
    res.status(204).json();
});

router.delete('/:id', async function(req, res, next) {
    const id = req.params.id
    await db.ref(`todos/${id}`).remove();
    res.status(204).json();
});

module.exports = router;
