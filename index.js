// Code your solutions in this file
function wrtieCards(array, event) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;
}