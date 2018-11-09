const mongoose = require('mongoose');


const goalsSchema = new mongoose.Schema({
  name: String,
  country: String,
  crisis: String,
});

module.exports = mongoose.model('Goals', goalsSchema);
