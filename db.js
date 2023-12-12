// db.js

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://cmagno2:cassiel2023@cluster0.3gj8hon.mongodb.net/', {

})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Export the mongoose object
module.exports = mongoose;
