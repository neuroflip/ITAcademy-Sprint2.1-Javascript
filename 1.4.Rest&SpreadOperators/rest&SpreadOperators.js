const combineArraysUsingSpreadOperator = (array1, array2) => {
  return [...array1, ...array2];
};

const suma = (...values) => {
  return values.reduce((sum, value) => sum + value);
};

const spreadInObjects = (object) => {
  return [...object];
}

const restInDestructing = (array) => {
  const [elem1, elem2, ...rest] = array;

  return [elem1, elem2, rest];
}

const spreadInFunctions = (a, b, c) => {
  console.log(`${a} ${b} ${c}`)
}

const objectFusion = (obj1, obj2) => {
  return { ...obj1, ...obj2 }
};

export { combineArraysUsingSpreadOperator, suma, spreadInObjects, restInDestructing, 
  spreadInFunctions, objectFusion };
