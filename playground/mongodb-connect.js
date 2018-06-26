// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID;
// console.log(obj);

// var user = { name: 'andrew', age: 25 };
// var { name } = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoAp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert data', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertMany([
    //     { name: 'Andrew', age: 30, location: 'Minsk' },
    //     { name: 'Alex', age: 33, location: 'Minsk' },
    //     { name: 'Aline', age: 28, location: 'Molodechno' },
    // ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert users data', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     // console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});