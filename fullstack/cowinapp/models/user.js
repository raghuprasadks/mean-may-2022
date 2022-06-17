var mongoose = require('mongoose');
//const { DateTime } = require("luxon");  //for date handling

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  aadhar: { type: Number, required: true, maxLength: 12 },
  mobile: { type: Number, required: true, maxLength: 10 },
  address: { type: String, required: true, maxLength: 200 },
  pin: { type: Number, required: true, maxLength: 6 },
  state: { type: String, required: true, maxLength: 100 }
});



// Export model.
module.exports = mongoose.model('User', UserSchema);

