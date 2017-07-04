import express from 'express';
import TodoItem from '../models/TodoItem.js'
const router = express.Router();

router.post('/add', (req, res) => {
  console.log('REQUEST', req.body);
  var testtodo = new TodoItem ({
    task: req.body.task
  });
  console.log(testtodo);
  testtodo.save()
    .then(response => {
      console.log('saved');
      res.send(response);
    })
    .catch(error => {
      console.log('error');
      res.send(error);
    })
});

export default router;
