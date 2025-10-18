const squaredArray = (array) => array.map((num) => num*num);
const onlyEventNumbersFromArray = (array) => array.filter((num) => num % 2 === 0);
const onlyNumbersGreaterThanTen = (array) => array.find((num) => num > 10);
const sumArrayWithReduce = (array) => array.reduce((sum, num) => sum + num);
const oneLineOperation = (array) => array.filter((num) => num >= 10).map((num) => num * 2).reduce((sum, num) => sum + num);
const everyNumberFromArrayGreaterThanTen = (array) => array.every((num) => num > 10);
const someNumberFromArrayGreaterThanTen = (array) => array.some((num) => num > 10);

export { squaredArray, onlyEventNumbersFromArray, onlyNumbersGreaterThanTen, 
  sumArrayWithReduce, oneLineOperation, everyNumberFromArrayGreaterThanTen, 
  someNumberFromArrayGreaterThanTen };