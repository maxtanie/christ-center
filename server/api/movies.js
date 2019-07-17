const express = require("express");
const router = new express.Router();
const Movies = require("../models/Movies");

const getAll = () => Movies.find();
const getMovies = () => Movies.find();

router.get("/", (req, res) => {
  getAll()
    .then(movies => {
      res.status(200).send(movies);
    })
    .catch(error => res.status(500).send("Something went wrong", error));
});

// router.get("/movies", (req, res) => {
//   getMovies()
//     .then(movies => {
//       res.status(200).send(movies);
//     })
//     .catch(error => res.status(500).send("Something went wrong", error));
// });

// MoviesModel.insertMany(movies)
//     .then(dbRes => {
//       console.log(dbRes);
//       dbRes
//         .forEach((Movies, i) => console.log(Movies.title, i))
//         .catch(dbErr => {
//           console.log(dbErr);
//         });
//     })
//     .catch(dbErr => {
//       console.log(dbErr);
//     });
//TODO Validation ??

module.exports = {
  router,
  getAll
};
