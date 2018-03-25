console.log('\nStarting app.js\n');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];

console.log('Command: ', command);
console.log('\nProcess Argv: ', process.argv, '\n');
console.log('\nYargs Argv: ', argv, '\n');

// Adding a new note:
if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log('\nListing all notes!\n');
} else if (command === 'read') {
  console.log('\nFetching note!\n');
} else if (command === 'remove') {
  console.log('\nRemoving note!\n');
} else {
  console.log('\nCommand not recognized!\n');
}
