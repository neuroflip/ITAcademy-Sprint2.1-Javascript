const createDeferTimeout = (resolveMessage, time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(resolveMessage), time);
  })
}

const createPromiseSetTimeout = () => {
  return createDeferTimeout('Hola, món', 2000);
}
const holaPromise = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => param === 'Hola' ? resolve() : reject(), 2000);
  })
}
const asyncFunction = async () => {
  const result = await createDeferTimeout('Hola, món', 2000);

  return result;
}

const asyncFunctionTryCatch = async () => {
  let result;
  try {
    result = await createDeferTimeout('Hola, món', 2000);    
  } catch(exception) {
    result = exception;
  }

  return result;
}

const promiseAllFunction = () => {
  const promise1 = createDeferTimeout('promise 1 resolved!', 3000);
  const promise2 = createDeferTimeout('promise 2 resolved!', 2000);

  return Promise.all([promise1, promise2]).then((results) => {
    for (const result of results) {
      console.log(result);
    }
  })
}


export { createPromiseSetTimeout, holaPromise, asyncFunction, asyncFunctionTryCatch, promiseAllFunction }