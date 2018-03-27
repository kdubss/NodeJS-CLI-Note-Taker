console.log('Starting notes.js!\n');

const fs = require('fs');

const fetchNotes = () => {
  // Retrieving currently stored JSON data:
  // - Will crash if file does not exist!
  try {
    let notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  // console.log(`\nAdding note titled '${title}' with body content '${body}'!\n`);
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  // Checking for Duplicate Note Titles:
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    // Updating current stored JSON data w/ newly added data!
    notes.push(note);
    // If no duplicate note titles, then save to file!
    saveNotes(notes)
    return note
  }
};

const getAll = () => {
  console.log('\nGetting all notes!\n');
  // Fetch all notes and display them to client.
};

let getNote = (title) => {
  console.log(`\nGetting note titled '${title}'!\n`);
};

let removeNote = (title) => {
  // 1. fetchNotes
  const notes = fetchNotes();
  // 2. Filter notes, removing the one with the title of argument (can be done using filter);
  const note2Save = notes.filter((note) => note.title !== title);
  // 3. save new notes array.
  saveNotes(note2Save);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
