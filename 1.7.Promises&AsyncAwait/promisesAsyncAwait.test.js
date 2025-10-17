import { expect, test, describe, vi, afterEach, afterAll , beforeEach} from 'vitest';
import { createPromiseSetTimeout, holaPromise, asyncFunction, asyncFunctionTryCatch, promiseAllFunction } from './promisesAsyncAwait';

describe ('1.7 Promises and async/Await', () => {
  const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  beforeEach(() => {
    vi.useFakeTimers();
  })

  afterEach(() => {
    consoleLogMock.mockClear();
  });

  afterAll(() => {
     vi.useRealTimers();
  });

  test('Exercise 1: create promise with setTimeout', () => {
    const promise = createPromiseSetTimeout();

    vi.advanceTimersByTime(2500);

    promise.then((resolved) => {
      expect(resolved).toBe('Hola, món');
    })
  });

  test('Exercise 2: use the createPromiseSetTimeout using then ', async () => {
    const promise = createPromiseSetTimeout()
    
    vi.advanceTimersByTime(2500);

    await promise.then((resolved) => {
      console.log(resolved);
    })

    expect(consoleLogMock).toHaveBeenCalledWith('Hola, món');
  });

  describe('Exercise 3: create promise with resolve / reject resolution', () => {
    test('resolve resolution', async () => {
      const promise = holaPromise('Hola');

      vi.advanceTimersByTime(2500);

      await promise.then((resolved) => {
        console.log('Resolved promise');
      }, (rejected) => {
        console.log('Rejected promise');
      })

      expect(consoleLogMock).toHaveBeenCalledWith('Resolved promise');
    })

    test('reject resolution', async () => {
      const promise = holaPromise('Adéu!');

      vi.advanceTimersByTime(2500);

      await promise.then((resolved) => {
        console.log('Resolved promise');
      }, (rejected) => {
        console.log('Rejected promise');
      })

      expect(consoleLogMock).toHaveBeenCalledWith('Rejected promise');
    })
  })

  test('Exercise 4: async function that creates a promise with createPromise function', async () => {
    const result = asyncFunction();
    vi.advanceTimersByTime(2500);

    expect(await result).toBe('Hola, món');
  })

  test('Exercise 5: async function with try catch', async () => {
    const result = asyncFunctionTryCatch();
    vi.advanceTimersByTime(2500);

    expect(await result).toBe('Hola, món');
  })

  test('Exercise 6: promise all resolution', () => {
    const promise = promiseAllFunction();
    vi.advanceTimersByTime(5500);

    promise.then(() => {
      expect(consoleLogMock).toHaveBeenCalledWith('promise 2 resolved!');
      expect(consoleLogMock).toHaveBeenCalledWith('promise 1 resolved!');
    })
  })
})

