console.log('\nStarting app.js\n');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

console.log('Command: ', command);
console.log('\nYargs Argv: ', argv, '\n');

// Adding a new note:
if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note[0]) {
    console.log('Note read');
    console.log('--');
    console.log(`Title: ${note[0].title}`);
    console.log(`Body: ${note[0].body}`);
  } else {
    console.log('Note not found!');
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('\nCommand not recognized!\n');
}
