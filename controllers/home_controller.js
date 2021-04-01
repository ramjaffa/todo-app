var contactList = [
    {
        name:"Ram",
        phone:"111111111"
    },
    {
        name: "Tony Stark",
        phone:"12345678"
    }
];

var Todos = require('../models/todos');


module.exports.home = function(req,res){
    Todos.find({},function(err,todos){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
        return res.render('home',{
            title:"Home",
            contact_list:todos
        })
    });
    // return res.render('home',{
    //     title:"Home",
    //     contact_list:contactList
    // });
}