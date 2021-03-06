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
    })
    .get("/getquizz/:id", (req, res) => {
        Quizz.findOne({
            _id: req.params.id
        }).exec((err, data) => {
            console.log(1);
            if (err) return res.status(500).send(err);
            else res.json(data);
            console.log(data);
        });
    })
    .get("/getlast/", (req, res) => {
        Quizz.find({}).sort({_id:-1}).limit(1).exec((err, data) => {
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
    .patch('/addquestion', (req, res) => {
    Quizz.findOneAndUpdate({   // Find the data
        _id: req.body.quizId
    }, {
        $push: {  // Add something in the array citations
            questions: req.body.question
        }

    }, err => {
        if (err)
            res.status(500).send(err)
        else res.json({ok: true});
    });
        console.log(10);
})
    .patch('/updatequiz', (req, res) => {
        Quizz.findOneAndUpdate({   // Find the data
            _id: req.body.quizId
        }, {
            $set: {  // Add something in the array citations
                name: req.body.name,
                description: req.body.description,
                published: req.body.published,
                keywords: req.body.keywords,
                icon: req.body.icon,
            }

        }, err => {
            if (err)
                res.status(500).send(err)
            else res.json({ok: true});
        });
        console.log(10);
    })
    .post('/upload', (req, res, next) => {
        console.log("files", req.files);
        req.files.file.mv(__dirname + '/resources/pictures/' + req.files.file.name,
            (err) => {
                if (err)
                    return res.status(500).send(err);
                res.json({file: req.files.file.name});
            }
        );
    })
    .delete('/deletequiz', (req, res) => {
        //console.log(req);
        Quizz.findOneAndDelete({   // Find the data
            _id: req.body.quizId
        }, err => {
            if (err)
                res.status(500).send(err)
            else res.json({ok: true});
        });
        console.log(10);
    })
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });


module.exports = router;
