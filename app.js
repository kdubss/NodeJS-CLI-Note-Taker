const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'The body-content of the note',
      demand: true,
      alias: 'b'
    }
  })
  .help()
  .argv;
const command = argv._[0];

// Adding a new note:
if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken\n');
  }

} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('Note read');
    notes.logNote(note);
  } else {
    console.log('Note not found!\n');
  }

} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);

} else {
  console.log('\nCommand not recognized!\n');
}
