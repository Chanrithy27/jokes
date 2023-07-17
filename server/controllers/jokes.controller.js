const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding all jokes', error: err });
        });
}

modules.exports.findOneJoke = (req, res) => {
    Joke.findOne()
        .then((oneJoke) => {
            res.json({ joke: oneJoke });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding the onen joke', error: err });
        });
}

modules.exports.