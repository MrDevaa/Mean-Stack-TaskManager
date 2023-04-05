// this file will handle connection logic to the mongoDB Database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(() => {
    console.log("Connnection to MongoDb Successfully :) ");
}).catch((e) => {
    console.log("Error while attemting to connect to MongoDb");
    console.log(e);
})

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};