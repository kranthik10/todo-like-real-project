const express = require('express')

const {createTodo,updateTodo} = require('./types')
const Todo = require('./db')

const app = express()

app.use(express.json())


app.get('/todos',async function(req,res){
const todos = await Todo.findOne({
})
res.json({
    todos
})
})


app.post('/todo',async function(req,res){
const createPayload = req.body;
const parsePayload = createTodo.safeParse(createPayload)
if(!parsePayload.success){
    res.status(411).json({
        msg: 'You sent the wrong inputs'
    })
    return;
}
await Todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed : false
})
res.json({
    msg:'Todo Created'
})
})


app.put('/completed',async function(req,res){
const updatePayload = req.body
const parsePayload = updateTodo.safeParse(updatePayload)
if(!parsePayload.success){
    res.status(411).json({
        msg:'you sent the wrong inputs'
    })
    return
}
await Todo.updateOne({ _id: req.body.id },
    { $set: { completed: true } }
)

res.json({
    msg: "Todo is updated"
})
})



app.delete('/',function(req,res){

})


const port = 3030

app.listen(port,function(){
    console.log(`app is listening at ${port}`);
})