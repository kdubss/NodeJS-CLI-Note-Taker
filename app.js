console.log('\nStarting app.js\n');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];

console.log('Command: ', command);
console.log('\nYargs Argv: ', argv, '\n');

// Adding a new note:
if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('\nCommand not recognized!\n');
}
