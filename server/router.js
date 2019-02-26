const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizz = db.quizz;

router
  .use(express.static('resources'))
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded
    .get('/quizz', (req, res) => {
    Quizz.find({})
        .exec((err, data) => {
            if (err)
                return res.status(500).send(err);
            else
                res.json(data);
        })
}).get("/getquizz/:id", (req, res) => {
        Quizz.findOne({
        _id: req.params.id
        }).exec((err, data) => {
        console.log(data);
        if (err) return res.status(500).send(err);
        else res.json(data);
    });
})
    .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });


module.exports = router;
