// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB');

  // deleteMany
  // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  // deleteOne
  // db.collection("Todos").deleteOne({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Billy'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID('599b5d8b1a5496057e3f9462')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close()
});
