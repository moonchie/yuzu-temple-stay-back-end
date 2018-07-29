require('dotenv').config();

// Linking files
const Temple = require("../models/temple-model.js");
const mongoose = require("mongoose");


mongoose.Promise = Promise;
mongoose
  .connect(process.env.MONGODB_URI, {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo of Yuzu-back-end!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


// Seed the database
const templeData = [
  {
    nameENG: "Henjokoin",
    nameJPG: "遍照光院",
    address: "575 Koyasan, Koya-cho, Ito-gun, Wakayama Prefecture",
    geoLocation: [34.212980, 135.591930],    /*lat,long*/
    contact: "+81-736-56-2124",
    city: "Wakayama",
    picture: [
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532512851/Yuzu%20project/Henjokoin/Henjokoin0.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532512851/Yuzu%20project/Henjokoin/Henjokoin1.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532512850/Yuzu%20project/Henjokoin/Henjokoin2.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532512850/Yuzu%20project/Henjokoin/Henjokoin3.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532512849/Yuzu%20project/Henjokoin/Henjokoi4.jpg"],
    description: "This temple used to be the Imperial Chamber for Emperor Shirakawa, now holding important Japanese national treasures for guests to view. Guests can enjoy rooms facing the bright new garden, with fusuma (Japanese-style sliding doors) covered with gold leaf.",
    guests: "4",
    beds: "2",
    bath: "1",
    Amentities: [{
        wifi: true,
        essentials: true,
        kitchen: false,
        tv: false,
        airconditioning: true,
        heating: false,
        smokeDetec: true
    }],
    price: 98,
    },

    // Temple 2
    {
      nameENG: "Waqoo Shitaderamachi",
      nameJPG: "ウェブサイトへのクリック",
      address: "543-0076 Osaka Prefecture, Osaka, Tennoji-ku Shitaderamachi 2-5-12, Japan",
      geoLocation: [34.655731, 135.510404],    /*lat,long*/
      contact: null,
      city: "Osaka",
      picture: [
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532513170/Yuzu%20project/Waqoo%20Shitaderamachi/Waqoo_Shitaderamachi5.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532513170/Yuzu%20project/Waqoo%20Shitaderamachi/Waqoo_Shitaderamachi4.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532513170/Yuzu%20project/Waqoo%20Shitaderamachi/Waqoo_Shitaderamachi3.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532513170/Yuzu%20project/Waqoo%20Shitaderamachi/Waqoo_Shitaderamachi6.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532513170/Yuzu%20project/Waqoo%20Shitaderamachi/Waqoo_Shitaderamachi1.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532513170/Yuzu%20project/Waqoo%20Shitaderamachi/Waqoo_Shitaderamachi2.jpg"],
      description: "“Waqoo Shitaderamachi”, a shukubo, or temple lodging facilitity where visitors can stay and get a taster of life in a traditional Japanese shrine or temple, is due to open in March 2017 in the central historic Teramachi area of Osaka.",
      guests: "3",
      beds: "2",
      bath: "1",
      Amentities: [{
          wifi: true,
          essentials: true,
          kitchen: true,
          tv: true,
          airconditioning: true,
          heating: true,
          smokeDetec: true
      }],
      price: 148,
      },


  // Temple 3
  {
    nameENG: "Komadori-Sanso",
    nameJPG: "駒鳥山荘",
    address: "155, Mitakesan, Ome, Tokyo-to, 198-0175, Japan",
    geoLocation: [35.782978,139.149928],    /*lat,long*/
    contact: "400-886-6053",
    city: "Tokyo",
    picture: [
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532514109/Yuzu%20project/Komadori-Sanso/Komadori-Sanso1.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532514108/Yuzu%20project/Komadori-Sanso/Komadori-Sanso3.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532514112/Yuzu%20project/Komadori-Sanso/Komadori-Sanso2.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532514112/Yuzu%20project/Komadori-Sanso/Komadori-Sanso8.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532514113/Yuzu%20project/Komadori-Sanso/Komadori-Sanso6.png"
    ],
    description: "Mount Mitake has been worshipped as a sacred mountain of Kanto and shukubo lodges have spread around the Musashi Mitake shrine. Among them, Komadori-Sanso is popular as a shukubo that offers takigyo (ascetic training of being hit by a waterfall) even to general people in Tokyo.",
    guests: "2",
    beds: "1",
    bath: "shared",
    Amentities: [{
        wifi: false,
        essentials: true,
        kitchen: true,
        tv: false,
        airconditioning: true,
        heating: false,
        smokeDetec: true
    }],
    price: 83,
    },

  // Temple 4
  {
    nameENG: "Kotakuji",
    nameJPG: "光澤寺",
    address: "680-0604 Tottori Prefecture, Yazu District, Yazu",
    geoLocation: [35.357739, 134.357942],    /*lat,long*/
    contact: "0858-84-1650",
    city: "Yazu",
    picture: [
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515066/Yuzu%20project/%E5%85%89%E6%BE%A4%E5%AF%BA/%E5%85%89%E6%BE%A4%E5%AF%BA1.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515069/Yuzu%20project/%E5%85%89%E6%BE%A4%E5%AF%BA/%E5%85%89%E6%BE%A4%E5%AF%BA2.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515068/Yuzu%20project/%E5%85%89%E6%BE%A4%E5%AF%BA/%E5%85%89%E6%BE%A4%E5%AF%BA3.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515068/Yuzu%20project/%E5%85%89%E6%BE%A4%E5%AF%BA/%E5%85%89%E6%BE%A4%E5%AF%BA4.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515068/Yuzu%20project/%E5%85%89%E6%BE%A4%E5%AF%BA/%E5%85%89%E6%BE%A4%E5%AF%BA5.jpg"
    ],
    description: "It is built in the present Tottori city by the family of Kai Takeda family in 1592. After that I entered the Meiji era and moved to the present place.",
    guests: "4",
    beds: "2",
    bath: "1",
    Amentities: [{
        wifi: false,
        essentials: true,
        kitchen: false,
        tv: false,
        airconditioning: true,
        heating: false,
        smokeDetec: true
    }],
    price: 69,
    },

  // temple 5
  {
    nameENG: "Ikumo",
    nameJPG: "生雲",
    address: "923-0336 Ishikawa-ken, Komatsu-shi, Natamachi",
    geoLocation: [36.314415, 136.420501],    /*lat,long*/
    contact: "+81 761 23 0577",
    city: "Natamachi",
    picture: [
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515721/Yuzu%20project/%E7%94%9F%E9%9B%B2/%E7%94%9F%E9%9B%B21.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515726/Yuzu%20project/%E7%94%9F%E9%9B%B2/%E7%94%9F%E9%9B%B23.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515725/Yuzu%20project/%E7%94%9F%E9%9B%B2/%E7%94%9F%E9%9B%B27.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515724/Yuzu%20project/%E7%94%9F%E9%9B%B2/%E7%94%9F%E9%9B%B22.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532515722/Yuzu%20project/%E7%94%9F%E9%9B%B2/%E7%94%9F%E9%9B%B25.jpg"
    ],
    description: "Ikumo is surrounded by heaven and earth, mountains and rivers, and deep woods. It is a modern hotel that purifies and reincarnates your mind and body. Stress from your life can be released here. You can feel completely at ease and peace in this natural location where mist rises from the bottom of the mountains and clouds float by.",
    guests: "4",
    beds: "4",
    bath: "shared",
    Amentities: [{
        wifi: true,
        essentials: true,
        kitchen: false,
        tv: false,
        airconditioning: true,
        heating: false,
        smokeDetec: true
    }],
    price:77,
    },

  // Temple 6
  {
    nameENG: "Myokenji",
    nameJPG: "妙顕寺",
    address: "602-0005 Kyoto Prefecture, Kyoto, Kamigyo Ward, Myokenjimaecho",
    geoLocation: [35.034265,135.754460],    /*lat,long*/
    contact: "+81 75-414-0808",
    city: "Kyoto",
    picture: [
      "http://ako-kankou.jp/en/wp-content/uploads/2017/07/si_myokenji01-1.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902069/Yuzu%20project/%E5%A6%99%E9%A1%95%E5%AF%BA/41253663511_143b856012_b.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902069/Yuzu%20project/%E5%A6%99%E9%A1%95%E5%AF%BA/41253663511_143b856012_b.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902069/Yuzu%20project/%E5%A6%99%E9%A1%95%E5%AF%BA/190_main_430.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902067/Yuzu%20project/%E5%A6%99%E9%A1%95%E5%AF%BA/190_g_284.jpg"],
    description: "Myoukenji is a temple of an old school of Shingon-shu. It was founded by Gyouki Bosatsu between 749 - 757) and is said to have been restored by Kukai in 806, but the story is uncertain.TheKannon-douhad been constructed in 1659. The current hall is a reconstruction done in 1772.",
    guests: "2",
    beds: "1",
    bath: "1",
    Amentities: [{
        wifi: true,
        essentials: true,
        kitchen: false,
        tv: false,
        airconditioning: true,
        heating: false,
        smokeDetec: true
    }],
    price: 47,
    },

  // Temple 7
  {
    nameENG: "Fukuchiin",
    nameJPG: "福智院",
    address: "657 Koyasan, Kōya, Ito District, Wakayama Prefecture 648-0211, Japan",
    geoLocation: [34.212686,135.587461],    /*lat,long*/
    contact: "+81 736-56-2021",
    city: "Wakayama",
    picture: [
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902667/Yuzu%20project/%E7%A6%8F%E6%99%BA%E9%99%A2/shukubo_img001.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902671/Yuzu%20project/%E7%A6%8F%E6%99%BA%E9%99%A2/screenshot-www.fukuchiin.com-2018.07.30-00-15-24.png",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902664/Yuzu%20project/%E7%A6%8F%E6%99%BA%E9%99%A2/about_img001.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902660/Yuzu%20project/%E7%A6%8F%E6%99%BA%E9%99%A2/10183216.jpg",
      "https://res.cloudinary.com/dzblxtdk3/image/upload/v1532902664/Yuzu%20project/%E7%A6%8F%E6%99%BA%E9%99%A2/onsen_img001.jpg"
    ],
    description: "Located in historic Koyasan, this ryokan offers a distinctly traditional experience. Its three gardens, designed by famous landscape artist Mirei Shigemori, and the cedar forests covering the area around this temple inn instill a sense of serenity. The natural hot springs of Koyasan are available only here and are open 24 hours a day. Vegetarian dishes featuring seasonal ingredients are served, and the meals are painstakingly planned and prepared by the head chef with a different course every month."
    ,
    guests: "4",
    beds: "2",
    bath: "1",
    Amentities: [{
        wifi: true,
        essentials: true,
        kitchen: false,
        tv: true,
        airconditioning: true,
        heating: false,
        smokeDetec: true
    }],
    price: 184,
    },

  // // Temple 7
  // {
  //   nameENG: "",
  //   nameJPG: "",
  //   address: "",
  //   geoLocation: [,],    /*lat,long*/
  //   contact: "",
  //   city: "",
  //   picture: "",
  //   description: "",
  //   guests: "",
  //   beds: "",
  //   bath: "",
  //   Amentities: [{
  //       wifi: true,
  //       essentials: true,
  //       kitchen: false,
  //       tv: false,
  //       airconditioning: true,
  //       heating: false,
  //       smokeDetec: true
  //   }],
  //   price,
  //   }
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