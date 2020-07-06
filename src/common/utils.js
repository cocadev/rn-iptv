export default class Utils {
  static FindIndex(array, id) {
    var found = array.findIndex(function (element) { 
        return element._id === id; 
    }); 
    return found;
  }

  static MyTime(dt) {
    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    var hour = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours(); 
    var minute = dt.getMinutes();
    // var second = dt.getSeconds();
    return hour + ":" + padWithZero(minute);
  }

  static UponTime(dt, count) {
    
    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    var hour = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours(); 
    var minute = (count % 2 === 0) ? (dt.getMinutes()>29?0:30) : (dt.getMinutes()>29?30:0);

    hour = hour + Math.ceil(count/2)
    if(count % 2 === 0 && dt.getMinutes() > 29){
      hour = hour + 1
    }
    return hour + ":" + padWithZero(minute) + (dt.getHours() > 12 ? ' PM' : ' AM');
  }
}
