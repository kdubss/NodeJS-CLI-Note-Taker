console.log('Starting notes.js!\n');

let addNote = (title, body) => {
  console.log(`\nAdding note titled '${title}' with body content '${body}'!\n`);
};

let getAll = () => {
  console.log('\nGetting all notes!\n');
};

let getNote = (title) => {
  console.log(`\nGetting note titled '${title}'!\n`);
};

let removeNote = (title) => {
  console.log(`\nRemoving note titled '${title}'!\n`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
