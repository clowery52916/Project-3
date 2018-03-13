const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Movie = require("../models/con");
const Shout = require("../models/shout");

//SHOUT Index ---------------------//////
router.get("/", (req, res) => {
  Movie.findById(req.params.singleMovie).then(movies => {
    const comments = movies.comments;
    res.json(comments);
  });
});

//SHOUT create --------------------///////
router.post("/", (req, res) => {
  //Find Movievention that comment is being added to
  Movie.findById(req.params.singleMovie)
    .then(movies => {
      const newComment = new Comments({
        comment_title: req.body.title,
        comment_description: req.body.description,
      
      });
      movies.comments.push(newComment);
      return movies.save();
    })
    .then(savedComment => {
      res.send(savedComment);
    });
});

//SHOUT Update ---------------------///////
router.patch("/:id", (req, res) => {
  Movie.findById(req.params.consId)
    .then(cons => {
      const shout = cons.shouts.id(req.params.id);

      (shout.subject = req.body.subject),
       (shout.msg = req.body.msg);

      return cons.save();
    })
    .then(updatedMovie => {
      res.json(updatedMovie);
    });
});

//SHOUT delete---------------------////////
router.delete("/:id", (req, res) => {
  Movie.findById(req.params.singleMovie)
    .then(cons => {
      cons.shouts.id(req.params.id).remove();
      return cons.save();
    })
    .then(savedMovie => {
      res.send(savedMovie);
    });
});
module.exports = router;
