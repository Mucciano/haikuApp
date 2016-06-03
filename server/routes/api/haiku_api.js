var express = require('express'),
    haikuRouter = express.Router()

var Haiku = require('../../models/haiku.js')


haikuRouter.get("/", function(req, res){
  Haiku.find(function(err, haiku){
    if(err){
    console.log(err);
    res.json({ error: "NOOOOOOOO"});
    }
    res.status(200).json(haiku)

  })
})


haikuRouter.post('/', function(req, res){

  Haiku.create(req.body.newHaiku, function(err, haiku){
    if (err){
      console.log(err);
      next(err)
    }else{
      res.json(haiku)
    }
  })

})


haikuRouter.delete('/:id', function(req, res){
  Haiku.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      next(err);
    } else {
    res.status(203).end();
    }
  })
})





module.exports = haikuRouter
