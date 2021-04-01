const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const Todos = mongoose.model('Todos',todoSchema);

module.exports = Todos;