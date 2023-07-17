const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/express_mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong trying to connect to the database', err));