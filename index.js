// setting up the server and starting it
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use('/',require('./routes'));
//set up view engine and its path
app.set('view engine','ejs');
app.set('views','./views');
console.log(path.join(__dirname));
app.use(express.static('assets'));


//listen to the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Express server is running on the port: ${port}`);
})