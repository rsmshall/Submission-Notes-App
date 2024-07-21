import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getInitialData } from "./utils";
import NoteList from "./components/NoteList";
import NoteInput from "./components/NoteInput";
import NoteSearch from "./components/NoteSearch";
import "./styles/style.css";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const onSearchChange = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Aplikasi Catatan</h1>
      </header>
      <div className="note-app__body">
        <NoteSearch keyword={searchKeyword} onKeywordChange={onSearchChange} />
        <h2>Buat Catatan</h2>
        <NoteInput addNote={addNote} />
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={filteredNotes.filter((note) => !note.archived)}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
        <h2>Catatan Arsip</h2>
        <NoteList
          notes={filteredNotes.filter((note) => note.archived)}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
