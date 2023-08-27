import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NoteNewForm() {
  const navigate = useNavigate();

  const addNote = (newNote) => {
    axios
      .post(`${API}/notes`, newNote)
      .then((response) => {
        console.log("New note added:", response.data);
        navigate("/notes");
      })
      .catch((error) => {
        console.warn("Error adding note:", error);
      });
  };

  const [note, setNote] = useState({
    title: "",
    content: "",
    folder: "",
    date_created: "",
    last_edited: "",
    account_name: "",
    is_important: false,
  });

  const handleTextChange = (event) => {
    setNote({ ...note, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    console.log("Note before adding:", note); 
    addNote({
      ...note,
      date_created: currentDate,
      last_edited: currentDate,
    });
  };
  

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={note.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Note"
          required
        />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={note.content}
          onChange={handleTextChange}
          placeholder="Content of Note"
          required
        ></textarea>
        <br />
        <label htmlFor="folder">Folder:</label>
        <input
          id="folder"
          value={note.folder}
          type="text"
          onChange={handleTextChange}
          placeholder="Folder"
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NoteNewForm;
