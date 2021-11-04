const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  email: {type: String, unique: true, required: true, maxLength: 320},
  password: {type: String, required: true},
  firstName: {type: String, required: true, maxLength: 320},
  lastName: {type: String, required: true, maxLength: 320},
  companyName: {type: String, required: true, maxLength: 320},
  position: {type: String, maxLength: 320},
  phone: {type: Number},

  //The numbers in the available hours correspond to minutes in a day.
  availableHours: {
    sunday: {
      start: {type: Number, min:0, max:1440, default: 0},
      end: {type: Number, min:0, max:1440, default: 0}
    },
    monday: {
      start: {type: Number, min:0, max:1440, default: 0},
      end: {type: Number, min:0, max:1440, default: 0}
    },
    tuesday: {
      start: {type: Number, min:0, max:1440, default: 0},
      end: {type: Number, min:0, max:1440, default: 0}
    },
    wednesday: {
      start: {type: Number, min:0, max:1440, default: 0},
      end: {type: Number, min:0, max:1440, default: 0}
    },
    thursday: {
      start: {type: Number, min:0, max:1440, default: 0},
      end: {type: Number, min:0, max:1440, default: 0}
    },
    friday: {
      start: {type: Number, min:0, max:1440, default: 0},
      end: {type: Number, min:0, max:1440, default: 0}
    },
    saturday: {
      start: {type: Number, min:0, max:1440, default: 0},
      end: {type: Number, min:0, max:1440, default: 0}
    }
  },
  requestedDaysOff: Array,
  approvedDaysOff: Array,
  shiftsToDate: {type: Number, default: 0},
  lateCount: {type: Number, default: 0},
  absentCount: {type: Number, default: 0},
  loginHistory: {type:Array},
  isAdmin: {type: Boolean, default: false, immutable: true}
}, {
  timestamps: true
});

module.exports = model('User', userSchema);