import express from 'express';
import TodoItem from '../models/TodoItem.js'
const router = express.Router();

router.get('/add', (req, res) => {
  var testtodo = new TodoItem ({
    task: "test task"
  });
  testtodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

export default router;
