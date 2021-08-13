const mongoose = require('mongoose');

const userDb = "patricio";
const passwordDb = "sabadogigante123";
const collectionName = "restaurantes";

const URI = `mongodb+srv://${userDb}:${passwordDb}@cluster0.c5gnh.mongodb.net/${collectionName}?retryWrites=true&w=majority`;

mongoose.connect(URI,{useNewUrlParser : true, useUnifiedTopology : true})
        .then(db=>console.log( `connect on db`))
        .catch(err=>console.log(err));


