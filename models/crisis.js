const mongoose = require('mongoose');


const crisisSchema = new mongoose.Schema({
  name: String,
  country: String,
  crisis: String,
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Crisis', crisisSchema);
