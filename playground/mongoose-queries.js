const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59a2f94050270d3e1cf36d3711';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// mongoosejs > docs > queries
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch((e) => console.log(e));

User.findById('599b850ab29366b38c7bf464').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(user);
}).catch((e) => {
  console.log(e);
});
