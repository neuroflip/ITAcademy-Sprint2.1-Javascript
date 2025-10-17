# ITAcademy - Sprint2

This repository implements the Sprint 2.1 
- Exercici 1.1: Arrow functions.
- Exercise 1.2: Ternary operator.
- Exercise 1.3: Callbacks.
- Exercise 1.4: Rest & Spread operator.
- Exercise 1.5: Array transformations.
- Exercise 1.6: Array Loops.

The project is a vite + vitest project with only javascript code that implements the exercises. The structure of the exercises is the next one:

 1. each exercise has a directory that includes the solution 
 2. inside each directory there is:
  - one *.js that implements a module exporting the functions from the exercise
  - one *.test.js that imports all the implemented functions in the module and tests them
 3. /etc directory includes the screenshot for the README file


## Instructions to run the project

Clone the repository and run the tests:

```
git clone https://github.com/neuroflip/ITAcademy-Sprint2.1-Javascript.git
cd ITAcademy-Sprint2.1-Javascript
npm install

npm run test
```

![alt basic screenshot from the project](https://github.com/neuroflip/ITAcademy-Sprint2.1-Javascript/blob/main/etc/tests.png)

# Why this exercises include tests?

The reason is because this is the best way to check the functions or code to implement. This way we can ensure that the implementation works correctly based on the statement of the exercise.

***Note that the repository includes the directory .github with the file main.yml***. It is needed to run all the tests in every Pull request created to merge into main. As every exercise was merged using a Pull request, this ensures that all the merges into main doesn't break the previous code.