console.log('Starting app.js!');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Kang'));
let filteredArray = _.uniq(['Kang', 'Kang', 2, 5, 6, 10]);
console.log(`Filtered Array: ${filteredArray}!`);

// const res = notes.addNote();
// console.log('result "res:", ' + res);
//
// const addNumbers = notes.add(9, -2);
// console.log('\nAddition with the add() function (9, -2), equals: ' + addNumbers);

// const user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//   if (err) throw err;
//   console.log('The "data to appened" was appeneded to the file!');
// });
