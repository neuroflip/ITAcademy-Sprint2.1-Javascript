const potConduir = (edat) => edat >= 18 ? 'Pots conduir' : 'No pots conduir';
const comparador = (num1, num2) => num1 > num2 ? 'num1 es mes gran' : 'num2 es mes gran';
const positiuNegatiuOZero = (num) => num > 0 ? 'positiu' : num < 0 ? 'negatiu' : 'zero';
const trobarMaxim = (a, b, c) => {
  return (a > b) && (a > c) ? a : 
    (b > c) && (b > a) ? b : c;
}
const parOImpar = (nums) => {
  for (let i=0; i< nums.length; i++) {
    console.log(`El número ${nums[i]} es ${nums[i] % 2 == 0 ? 'parell' : 'imparell' }`);
  }
}

export { potConduir, comparador, positiuNegatiuOZero, trobarMaxim, parOImpar };