const express = require('express');
const router = express.Router({mergeParams: true});

const {User} = require('../models/UserModel')
const {Movie} = require('../models/MoviesModel')

router.get("/", (req, res) => {
  Movie.findById(req.params.movieId).then(movies => {
    const users = movies.users;
    res.json(users);
  });
});

router.get("/:id", (req, res) => {
  Movie.findById(req.params.movieId)
    .then(movies => {
      const user = movies.users.id(req.params.id);

      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {

  Movie.findById(req.params.movieId)
    .then(movies => {
      const newUser = new User({
        name: req.body.name,
      });
      movies.users.push(newUser);
      return movies.save();
    })
    .then(savedCon => {
      res.send(savedCon);
    });
});


router.patch("/:id", (req, res) => {
  Movie.findById(req.params.movieId)
    .then(movies => {
      const user = movies.users.id(req.params.id);

      (user.name = req.body.name)

      return movies.save();
    })
    .then(updatedMovie => {
      res.json(updatedMovie);
    });
});

router.delete("/:id", (req, res) => {
  Movie.findById(req.params.movieId)
    .then(movies => {
      movies.users.id(req.params.id).remove();
      return movies.save();
    })
    .then(savedMovie => {
      res.send(savedMovie);
    });
});
module.exports = router
