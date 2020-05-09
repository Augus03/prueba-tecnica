//Conexion Local

const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const URI = 'mongodb+srv://testing:cesar@cluster0-zxhcb.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI, {useMongoClient: true})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));


//Conexion En La Nube
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testing:test@cluster0-8qhbo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("gatos");
  // perform actions on the collection object
  client.close();
});*/

module.exports = mongoose;