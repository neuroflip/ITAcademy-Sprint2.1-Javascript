const processar = (num, callback) => {
  callback(num);
};

const calculadora = (num1, num2, operador) => operador(num1, num2);

const esperarISaludar = (nom, callback) => { 
  setTimeout(() => { callback(nom) }, 2000)
};

const processarElements = (array, callback) => {
  array.forEach((element) => { 
    callback(element);
  })
}

const processarCadena = (string, callback) => {
  callback(string.toUpperCase());
}

export { processar, calculadora, esperarISaludar, processarElements, processarCadena };