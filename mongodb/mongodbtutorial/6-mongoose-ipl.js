const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iqviatrng2022', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connected')
    // we're connected!
});

const iplSchema = new mongoose.Schema({
    name: String,
    team: String,
    season: Number,
    matches: Number,
    runs:Number,
    wickets:Number
  });

  
const iplmodel = mongoose.model('ipl', iplSchema,'ipl');
/**
const player1 = new iplmodel({ name: 'Virat',team:'rcb',season:2022,matches:10,runs:350,wickets:0 });
console.log("player1 name" +player1.name); // 'Silence'
player1.save(function (err, result) {
    console.log('save...',result)
    if (err) 
        return console.error(err);
    console.log('data saved successfully')
  });
 */
  const player2 = new iplmodel({ name: 'Dhoni',team:'csk',season:2022,matches:10,runs:300,wickets:0 });
  console.log("player2 name" +player2.name); 
  player2.save(function (err, result) {
      console.log('save...',result)
      if (err) 
          return console.error(err);
      console.log('data saved successfully')
    });
  


  // select *  from iplmodel
  iplmodel.find(function (err, ipldocuments) {
    console.log('find')
    if (err) return console.error(err);
        console.log(ipldocuments);
  })
// select * from iplmodel where name like '%Virat%'
iplmodel.find({ name: /^Virat/ }, function (err,result)
  {
    console.log('wild card search ')  
    console.log('result ',result)
  });




