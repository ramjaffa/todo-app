const express = require('express');
const router = express.Router();
const Todos = require('../models/todos');
const db = require('../config/mongoose');
const postcontroller = require('../controllers/todo_controller');
const deleteTodo = require('../controllers/delete_controller');

// router.post('/create-todo',postcontroller.postFunction);
router.get('/delete-contact/',deleteTodo.delete);


module.exports = router;