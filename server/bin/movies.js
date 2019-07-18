const movies = [
  {
    poster:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg",
    title: "Tu ne tueras point",
    actors: ["Andrew Garfield", "Jessica Lama"],
    type: ["War", "Tragedy"],
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    age: "16 +",
    average: "8.5",
    released: "2016",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster: "https://i.ytimg.com/vi/Sx7ivr4BZPU/movieposter.jpg",
    title: "Paul l'apôtre du Christ",
    actors: ["Jim Caviezel"],
    type: ["Tragedy"],
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    age: "16 +",
    average: "8.5",
    released: "2018",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster: "https://images-na.ssl-images-amazon.com/images/I/91fZUwsGo8L.jpg",
    title: "War room",
    actors: ["Erena Johns"],
    type: ["Drame"],
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    age: "16+",
    average: "8.5",
    released: "2015",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTd6E_ggMEcAmik0sU46GmRzUH06meagVGN1RXlhml117WlLIcI",
    title: "Jésus l'enquête",
    released: "2018",
    actor: "Erika Christensen",
    type: "Drame",
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    average: "8.5",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster:
      "http://www.gstatic.com/tv/thumb/v22vodart/14852438/p14852438_v_v8_ab.jpg",
    title: "I believe",
    released: "2017",
    actor: "Rowan Smyth",
    type: "Drame",
    productor: "Patrick Weird",
    linkMovie: "Adress",
    trailer: "Trailer",
    average: "8.5",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster: "http://fr.web.img3.acsta.net/pictures/15/12/15/15/36/156908.jpg",
    title: "Gods not dead 2",
    released: "2018",
    actor: "Melissa Joan Hart",
    type: "Drame",
    productor: "Andrew Law",
    linkMovie: "Adress",
    trailer: "Trailer",
    average: "8.5",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster:
      "https://teaser-trailer.com/wp-content/uploads/Gods-Not-Dead-3-movie-teaser-poster.jpg",
    title: "God's not dead 3",
    released: "2018",
    actors: "David A.R White",
    type: "Drame",
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    average: "9.5",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg",
    title: "Tu ne tueras point",
    actors: ["Andrew Garfield", "Jessica Lama"],
    type: ["War", "Tragedy"],
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    age: "16 +",
    average: "8.5",
    released: "2016",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster: "https://i.ytimg.com/vi/Sx7ivr4BZPU/movieposter.jpg",
    title: "Paul l'apôtre du Christ",
    actors: ["Jim Caviezel"],
    type: ["Tragedy"],
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    age: "16 +",
    average: "8.5",
    released: "2018",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster: "https://images-na.ssl-images-amazon.com/images/I/91fZUwsGo8L.jpg",
    title: "War room",
    actors: ["Erena Johns"],
    type: ["Drame"],
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    age: "16+",
    average: "8.5",
    released: "2015",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTd6E_ggMEcAmik0sU46GmRzUH06meagVGN1RXlhml117WlLIcI",
    title: "Jésus l'enquête",
    released: "2018",
    actor: "Erika Christensen",
    type: "Drame",
    productor: "Mel Gibson",
    linkMovie: "Adress",
    trailer: "Trailer",
    average: "8.5",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  },
  {
    poster:
      "http://www.gstatic.com/tv/thumb/v22vodart/14852438/p14852438_v_v8_ab.jpg",
    title: "I believe",
    released: "2017",
    actor: "Rowan Smyth",
    type: "Drame",
    productor: "Patrick Weird",
    linkMovie: "Adress",
    trailer: "Trailer",
    average: "8.5",
    image:
      "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/11/10/11/59/507759.jpg"
  }
];

module.exports = movies;
