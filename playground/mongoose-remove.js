const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({ _id: '5b3a1ef5af54de142bf9d567' }).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5b3a1ef5af54de142bf9d567').then((todo) => {
    console.log(todo);
});