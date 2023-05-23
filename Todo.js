import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const todoSchema = new Schema({
    title: String,
    detail: String
  });
  
const Todo = model('Todo', todoSchema);
export default Todo;
