const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DBCONNECTION)


const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed: Boolean
})



const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo; 
