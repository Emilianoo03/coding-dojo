const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/githubSearch', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  const mongoose = require('mongoose');

  const SearchSchema = mongoose.Schema({
    term: {
      type: String,
      required: true
    },
    results: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Search', SearchSchema);

  