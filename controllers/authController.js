const express = require('express');
const router = express.Router();

router.post('/', async (req, res) =>{
  console.log(req.body, ' this is session')

  try {
    req.session.logged = true;
    req.session.username = req.body.username;

    req.json({
      status: 200,
      data: 'login successful'
    });
  } catch (err) {
    console.log(err, 'error in authController')
  }
});
