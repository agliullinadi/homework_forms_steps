import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import List from './components/List';
import './App.css';

const init = [
  { id: nanoid(), date: '20.07.2019', km: 5.7 },
];

function App() {

  const [notes, setNotes] = useState(init);

  const handleAddNote = (newNote) => {
    const indexOfDate = notes.findIndex((item) => item.date === newNote.date);
    if (indexOfDate === -1) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      setNotes((prevNotes) => {
        const newNotes = [...prevNotes];
        newNotes[indexOfDate].km += newNote.km;
        return newNotes;
      });
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Учёт тренировок</h1>
      </header>
      <Form onSubmit={handleAddNote} />
      <List notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;