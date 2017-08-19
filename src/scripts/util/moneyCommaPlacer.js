/*
  @param {val} - accepts number or number string

  @returns number with comma in ever third position from right.
*/
export function moneyCommaPlacer(val) {
  // collect value and make sure it's a string
  var value = `${val}`;
  var floatingNumbers = '';
  var wholeNumber = '';
  
  // check for decimal and split if needed
  if (value.indexOf('.')) {
    var numberSplit = value.split('.');
    floatingNumbers = numberSplit[1];
    wholeNumber = numberSplit[0];
  } else {
    wholeNumber = value;
  }
  
  // break whole number into array and reverse bc we want to add every third index
  var brokenNumber = wholeNumber.split('').reverse();
  
  // reference to new number which will be reversed and joined with commas if needed
  var newNumber = [];
  
  
  for (var i = 0; i < brokenNumber.length; i++) {
    // If not the first index 
    // AND the remainder of the current index divided by 3 === zero
      // add comma
    if (i !== 0 && i % 3 === 0) {
      newNumber.push(',');
    }
    
    newNumber.push(brokenNumber[i]);
  }
  
  // check if we need to send back floating point
  var useFloatingPoint = floatingNumbers ? `.${floatingNumbers}` : '';
  
  return newNumber.reverse().join('') + useFloatingPoint;
}