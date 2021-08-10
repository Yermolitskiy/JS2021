const Students = require("../models/Students");

function StudentsController(req, res) {
    res.render("pages/students");
}

module.exports = StudentsController;