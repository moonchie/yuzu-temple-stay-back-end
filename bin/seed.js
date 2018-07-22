// Linking files
const Temple = require("../models/temple-model.js");
const mongoose = require("mongoose");


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/yuzu-back-end', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo of Yuzu-back-end!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


// Seed the database
const templeData = [
  {
    nameENG: "Koyasan Ekoin",
    nameJPG: "準別格本山 恵光院",
    address: "497 Koyasan, Koya-cho,Ito-gun, Wakayama-ken",
    telephone: "+81(0)736-56-2514",
    email: "NaN",
    city: "Wakayama",
    picture: ["http://www.ekoin.jp/en/stay/img/img1.jpg",
              "http://www.ekoin.jp/en/stay/img/img2.jpg",
              "http://www.ekoin.jp/en/stay/img/img3.jpg",
              "http://www.ekoin.jp/en/stay/img/img5.jpg"],
    description: "Eko, meaning transference of merit, was built by Dosho, who was KoboDaishi's own disciple, almost 1200 years ago.",
    specialties: ["Buddhist morning services", "Goma fire ritual", "group meditation"],
    mealType: "vegetarian",
  }
]


// Run one time to seed the database
templeData.forEach((oneTemple) => {
  Temple.create(oneTemple)
    .then((temple) => {
      console.log(`Created templs ${temple.nameENG}`)
    })
    .catch((err) => {
      console.log("Temple data creation failure", err);
    })
})