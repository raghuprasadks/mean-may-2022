const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iqviatrng2022', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connected')
    // we're connected!
});

const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
  silence.save(function (err, silence) {
    console.log('save...',silence)
    if (err) 
        return console.error(err);
    silence.speak();
  });




