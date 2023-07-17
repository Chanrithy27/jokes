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

modules.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong creating the joke', error: err });
        });
}

modules.exports.updateExistingJoke = (req, res) => {
    Joke.findJokeAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong updating the joke', error: err });
        });
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result });
    })
    .catch((err) => {
        res.json({ message: 'Somethign went wrong deleting the joke', error: err });
    })
}