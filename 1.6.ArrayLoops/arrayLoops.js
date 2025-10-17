const forEachPrintNames = (array) => array.forEach((nom) => { console.log(nom)});
const forOfPrintNames = (array) => {
  for (const nom of array) {
    console.log(nom)
  }
}
const filterEvenNumbersFromArray = (array) => array.filter((num) => num % 2 === 0);
const forInPrintObject = (object) => {
  for (const prop in object) {
    console.log(`${prop}: ${object[prop]}`);
  }
}
const forOfBreakUntilFive = (array) => {
  for (const num of array) {
    if (num === 5) break;
    else console.log(num);
  }
}
const forOfPrintValueAndIndexFromArray = (array) => {
  for (const index of array.keys()) {
    console.log(`${noms[index]}: ${index}`)
  }
}

export { forEachPrintNames, forOfPrintNames, filterEvenNumbersFromArray, forInPrintObject, forOfBreakUntilFive, forOfPrintValueAndIndexFromArray }