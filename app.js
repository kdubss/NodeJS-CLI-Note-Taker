console.log('\nStarting app.js\n');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];
console.log('Command: ', command);

// Adding a new note:
if (command === 'add') {
  console.log('\nAdding new note!\n');
} else if (command === 'list') {
  console.log('\nListing all notes!\n');
} else if (command === 'read') {
  console.log('\nFetching note!\n');
} else if (command === 'remove') {
  console.log('\nRemoving note!\n');
} else {
  console.log('\nCommand not recognized!\n');
}
