var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) 
    throw err;
  var dbo = db.db("iqviatrng2022");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("customers:Collection created!");
    db.close();
  });
});