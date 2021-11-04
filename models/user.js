const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, unique: true, required: true, maxLength: 320},
  password: {type: String, required: true},
  firstName: {type: String, required: true, maxLength: 320},
  lastName: {type: String, required: true, maxLength: 320},
  companyName: {type: String, required: true, maxLength: 320},
  position: {type: String, maxLength: 320},
  phone: {type: Number},
  /*
  Each index of the available hours corrosponds with a day of the week (sunday-saturday)

  Each "day" is comprised of a sub array with two numbers, each between 0 and 1440.

  The numbers corrospond to minutes in a day.
  The first number is the starting availablility time, and the second number is the ending availability time.
  */
  availableHours: [
    [{type: Number, min:0, max:1440},{type: Number, min:0, max:1440}],
    [{type: Number, min:0, max:1440},{type: Number, min:0, max:1440}],
    [{type: Number, min:0, max:1440},{type: Number, min:0, max:1440}],
    [{type: Number, min:0, max:1440},{type: Number, min:0, max:1440}],
    [{type: Number, min:0, max:1440},{type: Number, min:0, max:1440}],
    [{type: Number, min:0, max:1440},{type: Number, min:0, max:1440}],
    [{type: Number, min:0, max:1440},{type: Number, min:0, max:1440}],
  ],
  loginHistory: {type:Array},
  isAdmin: {type: Boolean, default: false, immutable: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);