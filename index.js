const express = require("express");
const app = express();
const port = 3000;

const { termsSubjects } = require("./constants");

app.get("/", (req, res) => {
    res.send({
        availableTerms: [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ]
    })
})

app.get("/terms/", (req, res) => {
    const title  = req.query.name ? req.query.name : ""
    const filteredSubjects = termsSubjects.filter(subject => subject.title.includes(title))
    res.send(filteredSubjects)
})

app.get("/terms/:termNumber/", (req, res) => {
    res.send(
        termsSubjects.filter(subject => subject.term == req.params.termNumber)
    )
})

app.listen(port, () => {
    console.log("Listening on 3000...")
})