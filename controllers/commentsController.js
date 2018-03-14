const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Movie = require("../models/movie");
const Comments = require("../models/comments");

router.get('/', function(req, res) {
  Comments.find({comment_description}).exec(function(err, comments){
    if (err) { console.log(err); }
    console.log(comments)
    res.json({ comments })
  });
})

router.post('/comments', function(req, res){
  Comments.create( req.body )
  .then(function(comment) {
    console.log('succces', comment)

    return Comments.find({}).exec()
  })
  .then(function(comments) {
    console.log(comments)
    res.json({
      data: comments
    })
  })
});

router.put('/:id', function(req, res) {
  Comments.update({_id: req.params.id}, req.body)
   .then(function() {
     return Comments.find({}).exec();
   })
   .then(function(comments) {
     res.json({message: "succesfully updated", comments: comments})
   })
   .catch(function(err) {
     res.json(400, err)
   });
})

router.delete('/:id', function(req, res) {
  var id = req.params.id;

  Comments.remove({_id: id}, function(error) {
    if (error) response.json({message: 'Could not delete comment b/c: ' + error});

    res.json({message: 'comment successfully deleted'});
  })
})

module.exports = router;
