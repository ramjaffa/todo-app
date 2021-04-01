const Todos = require('../models/todos');
const db = require('../config/mongoose');

module.exports.postFunction = function(req,res){
    console.log(req.body.description + " " + req.body.date + " " + req.body.category);
    Todos.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newTodo){
        if(err){
            console.log('Error in creating a todo list');
            return ;
        }
        console.log('Hola!!!',newTodo);
    })
    return res.redirect('back');

};