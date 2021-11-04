const utils = {

  //Produces hh/mm mm/dd/yyyy timestamp
  //Uses am & pm instead of military time
  currentTimestamp: function(date=new Date()) {
    //helper to adjust single-digit values
    function twoCharacters(value) {
      if (value.toString().length === 1) {
        return `0${value}`;
      };
      return value;
    }
    let m = 'am'

    let month = twoCharacters(date.getMonth());
    let day = twoCharacters(date.getDay());
    let year = date.getFullYear();
    let hour = date.getHours ();
    if (hour === 0) {
      hour = 12;
    };
    if (hour > 12) {
      m = 'pm';
      hour = hour-12;
    };
    hour = twoCharacters(hour);
    let minute = twoCharacters(date.getMinutes());
    return `${month}/${day}/${year} ${hour}:${minute} ${m}`
  }
};

module.exports = utils