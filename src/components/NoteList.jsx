import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive }) =>
  notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  ) : (
    <p className="notes-list__empty-message">Tidak ada catatan</p>
  );

export default NoteList;
