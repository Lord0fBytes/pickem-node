var mongoose = require('mongoose');
var Comments = mongoose.model('smacktalk');

module.exports.getComment = function(req,res){
  var rantId = req.params.id;
  var cmtId = req.params.commentId;
  Comments
    .find({
      'rantId' : rantId,
      'comments.commentId' : cmtId
    }, {comments:1})
    .exec(function(err, comment){
      if(err){
        res
          .status(500)
          .json(err)
      }
      else {
        res
          .status(201)
          .json(comment)
      }
    });
}

module.exports.putUpdateComment = function(req,res){

}

module.exports.delRemoveComment = function(req,res){

}

var _addComment = function(req, res, rant) {
  rant.comments.push({
    commentAuthor: req.body.author,
    comment: req.body.comment
  });

  rant.save(function(err, rantUpdated) {
    if(err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(rantUpdated.comments[rantUpdated.comments.length - 1]);
    }
  });
};

module.exports.postNewComment = function(req,res){
  var rantId = req.params.id;
  Comments
    .findById(rantId)
    .select('comments')
    .exec(function(err, doc){
      var response = {
        status:200,
        message:doc
      };
      if(err) {
        console.log("Error finding rant post");
        response.status = 500;
        response.message = err;
      }
      else if(!doc){
        console.log("Error: Invalid RantId");
        response.status = 404;
        response.message = {
          "message" : "RantId not found " + rantId
        };
      }
      if(doc){
        _addComment(req, res, doc);
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });
};
