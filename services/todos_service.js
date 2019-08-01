var db = require('../dao/firebase');

async function getTodos() {
    const todos = await db.ref('todos').once('value');
    return todos.val();
}

async function getTodoById(id) {
    const todo = await db.ref(`todos/${id}`).once('value');
    return todo.val();
}

async function createTodo(data) {
    const todo = await db.ref('todos').push(data);
    return todo;    
}

async function updateTodo(id, data) {
    await db.ref(`todos/${id}`).update(data);
}

async function deleteTodo(id) {
    await db.ref(`todos/${id}`).remove();
}

module.exports = {
    getTodos, getTodoById, createTodo, updateTodo, deleteTodo
};
