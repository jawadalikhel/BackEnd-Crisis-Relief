const express = require('express');
const router = express.Router();

const Crisis = require('../models/crisis');


router.get('/', async (req, res) => {

  try {
    const allCrisi = await Crisis.find();

    res.json({
        status: 200,
        data: allCrisi
      });

  } catch (err) {
    res.send(err)
  }
});

module.exports = router;
