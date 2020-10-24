var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Affiche ce que l'on veut à cette adresse : http://localhost:3000/users/cool/  */
router.get('/cool', function(req, res, next) {
  res.send("You're so cool !");
});

module.exports = router;
