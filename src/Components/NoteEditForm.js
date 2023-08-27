import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NoteEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [note, setNote] = useState({
    title: "",
    content: "",
    folder: "",
    date_created: "",
    last_edited: "",
    account_name: "",
    is_important: false,
  });

  const updateNote = async (updatedNote) => {
    try {
      await axios.put(`${API}/notes/${id}`, updatedNote);
      navigate(`/notes/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextChange = (event) => {
    setNote({ ...note, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNote(note, id);
  };

  useEffect(() => {
    axios
      .get(`${API}/notes/${id}`)
      .then((response) => setNote(response.data))
      .catch((error) => navigate(`/not-found`));
  }, [id, navigate]);

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
      <Link to={`/notes/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default NoteEditForm;
