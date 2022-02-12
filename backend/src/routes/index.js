const express = require('express');
const Transform = require('../models/transform');
const validation = require('../middleware/validation');

const router = express.Router();

router.get('/transformation', async (req, res) => {
  try {
    const transformations = await Transform.find();
    res.status(200).send(transformations);
  } catch (error) {
    res.status(500).send('Oops some went wrong!');
  }
});

router.post('/transformation', validation, async (req, res) => {
  try {
    const transformation = new Transform(req.transform);
    await transformation.save();
    res.status(201).send(transformation);
  } catch (error) {
    console.log('error', error);
    res.status(400).send(error);
  }
});

module.exports = router;
