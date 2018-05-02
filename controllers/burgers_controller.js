// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Import the model (burger.js) to use its database functions.
var db = require('../models');

// Create the routes and associated logic
module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Burger.findAll({})
            .then(function (dbBurger) {
                res.json(dbBurger);
            });
        });


    app.post('/burgers', function (req, res) {
        console.log(req.body);
    db.Burger.create({
        burger_name: req.body.burger_name
    })
        .then(function(dbBurger){
            res.json(dbBurger);
        });


    app.put('/burgers/:id', function (req, res) {
        db.Burger.update(req.body,
        {
            where: {
                devoured: true
            }
        })
        .then(function(dbBurger){
            res.json(dbBurger);
        })
    });
});


// Export routes for server.js to use.
module.exports = app;