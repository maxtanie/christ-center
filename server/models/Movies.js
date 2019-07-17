const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  poster: String,
  image: String,
  linkMovie: String,
  productor: String,
  trailer: String,
  released: String,
  average: String,
  age: String,
  actors: Array,
  type: Array
});

const moviesModel = mongoose.model("Movies", moviesSchema);

module.exports = moviesModel;
