const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* Removes all items that match the query */
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

/* Removes first items that matches the query */
// Todo.findOneAndRemove({}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('59a3229392ad5e40e94f83ab').then((todo) => {
  console.log(todo);
})
