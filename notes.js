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

const addNote = (title, body, date) => {
  // console.log(`\nAdding note titled '${title}' with body content '${body}'!\n`);
  let notes = fetchNotes();
  let note = {
    title,
    body,
    date
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
  return fetchNotes();
};

const getNote = (title) => {
  const notes = fetchNotes().filter((note) => note.title === title);
  return notes[0];
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const notes2Save = notes.filter((note) => note.title !== title);
  saveNotes(notes2Save);
  return notes.length !== notes2Save.length;
};

const logNote = (note) => {
  console.log('----');
  console.log(`Date created: ${note.date}`);
  console.log(`Title: ${note.title}`);
  console.log(`Note: ${note.body}`);
  console.log('----\n');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
