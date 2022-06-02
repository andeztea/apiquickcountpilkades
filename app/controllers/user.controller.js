
const db = require("../models");
const User = db.user;


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {

    User.findAll().then(users => {
      res.status(200).send(users);
    });

    // res.status(200).send({
    //   status: 'Success',
    //   data:[],
    // });
  };