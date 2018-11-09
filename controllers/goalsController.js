const express = require('express');
// Next we set up the Router
const router = express.Router();

const Goals = require('../models/goals');

  router.get('/', async (req, res, next) =>{
    console.log(req.body, ' this is get all')
    try {
      const allGoals = await Goals.find();
      res.json({
        status: 200,
        data: allGoals,
      });
    } catch (err) {
        res.send(err);
        console.log(err , 'error in goalsController')
    }
  });

  router.post('/', async (req, res) =>{
    try {
      console.log(req.body, ' this is req.body in post')
      const createGoal = await Goals.create(req.body);
      console.log('response happening...')

      res.json({
        status: 200,
        data: createGoal
      });

    } catch(err){
    console.log(err, ' error in post');
    res.send(err, ' error in post ');
  }
  });

  router.get('/:id', async (req, res, next) =>{
    try {
      const foundGoal = await Goals.findById(req.params.id);
      res.json({
        status: 200,
        data: foundGoal,
      });

    } catch (err) {
      console.log(err, ' error in get foundGoal');
      res.send(err);
    }
  });

  router.put('/:id', async (req, res) =>{
    try {
      const updateGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json({
        status: 200,
        data: updateGoal,
      });
    } catch (err) {
      console.log(err, ' error in get updateGoal');
      res.send(err);

    }
  });

  router.delete('/:id', async (req, res) =>{
    try {
      const deleteGoal = await Goals.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deleteGoal,
      })
    } catch (err) {
      console.log(err, ' error in get deleteGoal');
      res.send(err);
    }
  });



module.exports = router;
