const express = require('express');
const router = express.Router();
const controller = require('../controllers/home_controller');
const Todos = require('../models/todos');
console.log(`In routes folder`);
const db = require('../config/mongoose');
const postcontroller = require('../controllers/todo_controller');

router.get('/delete-contact/',require('../controllers/delete_controller').delete);
router.get('/',controller.home);
router.post('/create-todo',postcontroller.postFunction);
// router.use('/delete-contact/',require('./deleteTodo'));


module.exports = router;