const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();
const fileUpload = require('express-fileupload');
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
        console.log(1);
        if (err) return res.status(500).send(err);
        else res.json(data);
        console.log(data);
    });
})
    .post("/addquiz", (req, res) => {
        const q = new Quizz(req.body);    // The json object is the body of the request
        q.save()                          // Save the object.
            .then(item => res.json(item))     // send the object in response
            .catch(err => res.status(400).send("unable to save to database"));
    })
    .post('/upload', (req, res, next) => {
        console.log("files",req.files);
        req.files.file.mv(__dirname + '/resources/pictures/' + req.files.file.name,
        (err) => {
            if (err)
                return res.status(500).send(err);
            res.json({file: req.files.file.name});
        }
    );
})
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });


module.exports = router;
