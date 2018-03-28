const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const noteTitleOptions = () => {
  return {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  }
};
const noteBodyOptions = () => {
  return {
    describe: 'The body-content of the note',
    demand: true,
    alias: 'b'
  }
};
const noteDateOptions = () => {
  return {
    describe: 'The date of note creation',
    demand: true,
    alias: 'd'
  }
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: noteTitleOptions(),
    body: noteBodyOptions(),
    date: noteDateOptions(),
  })
  .command('list', 'List all notes')
  .command('read', 'Reads individual notes based on note title', {
    title: noteTitleOptions()
  })
  .command('remove', 'Removes a note based on note-title', {
    title: noteTitleOptions()
  })
  .help()
  .argv;
const command = argv._[0];

// Adding a new note:
if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body, argv.date);
  if (note) {
    console.log('Note created\n');
    notes.logNote(note);
  } else {
    console.log('Note title taken\n');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log('\n---');
  console.log(`Printing ${allNotes.length} note(s)\n`)
  allNotes.forEach((note) => notes.logNote(note));
  console.log('\n');
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
