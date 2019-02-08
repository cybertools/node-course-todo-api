var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    user: 'root',
    pass: '@Y4_RiqMfM',
    auth: {
        authdb: 'admin'
    }
});

module.exports = { mongoose };