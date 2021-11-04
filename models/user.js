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
  availableHours: Array,
  loginHistory: {type:Array},
  isAdmin: {type: Boolean, default: false, immutable: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);