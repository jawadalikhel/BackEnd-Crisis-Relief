const express = require('express');
// Next we set up the Router
const router = express.Router();

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Restaurant = require('../models/crisis');
// Creating the index route
// index route should show all the fruits
 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all')
     try  {

      const allCrisis = await Crisis.find();

      // This is the response to react
      res.json({
        status: 200,
        data: allCrisis
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    const createdCrisis = await Crisis.create(req.body);
    console.log('response happening?')
    res.json({
      status: 200,
      data: createdCrisis
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});

router.get('/:id', async (req, res, next) => {


     try  {

        const foundCrisis = await Crisis.findById(req.params.id);
        res.json({
          status: 200,
          data: foundCrisis
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedCrisis = await Crisis.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedCrisis
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedCrisis = await Crisis.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedCrisis
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
