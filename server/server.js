var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.send(e);
    })
})

app.listen(3000, () => {
    console.log('Server is started on port 3000');
})

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var newTodo = new Todo({
//     text: ' Edit this video ',
//     // completed: true,
//     // completedAt: new Date()
// });

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// var newUser = new User({
//     name: 'Andrew',
//     email: 'some@gmail.com',
//     password: '123454321'
// });

// newUser.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save new user', e);
// });