const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://parthdesai1421210:sIPvwNA9ko4eKINS@cluster0.nnc7rvb.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}