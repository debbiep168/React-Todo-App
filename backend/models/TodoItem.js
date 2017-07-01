import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var todoitemSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

var TodoItem = mongoose.model('ToDoItem', todoitemSchema);

export default TodoItem;
