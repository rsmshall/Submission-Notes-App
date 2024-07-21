import React, { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLimit, setCharLimit] = useState(50);

  const onTitleChangeEventHandler = (event) => {
    const input = event.target.value;
    if (input.length <= 50) {
      setTitle;
      setTitle(input);
      setCharLimit(50 - input.length);
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setBody("");
    setCharLimit(50);
  };

  return (
    <form className="note-input" onSubmit={onSubmitEventHandler}>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={onTitleChangeEventHandler}
        required
      />
      <p className="note-input__title__char-limit">
        Sisa karakter: {charLimit}
      </p>
      <textarea
        placeholder="Isi catatan"
        value={body}
        onChange={onBodyChangeEventHandler}
        required
      ></textarea>
      <button type="submit">Buat</button>
    </form>
  );
};

export default NoteInput;
