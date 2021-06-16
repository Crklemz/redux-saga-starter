const express = require('express');
const elementList = [];

const router = express.Router();

router.get('/', (req, res) => {
  res.send(elementList);
});

router.post('/', (req, res) => {
  elementList.push(req.body.newElement);
  res.sendStatus(200);
});

module.exports = router;
