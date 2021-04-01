const Todos = require('../models/todos');
const db = require('../config/mongoose');

module.exports.delete = function(req,res){
    //get the query from the url
    console.log(req.query);

    // get the id from query in the url
    let id =req.query.id;
    // find the contact in the database using id and delete
    Todos.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
            return res.redirect('back');
    })
    
}