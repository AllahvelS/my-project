import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NoteDetails() {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteNote = () => {
    axios
      .delete(`${API}/notes/${id}`)
      .then(() => {
        navigate(`/notes`);
      })
      .catch((error) => console.error("Error deleting note:", error));
  };

  const handleDelete = () => {
    deleteNote();
  };

  useEffect(() => {
    axios
      .get(`${API}/notes/${id}`)
      .then((response) => {
        setNote(response.data);
      })
      .catch((error) => {
        console.warn("Error fetching note:", error);
      });
  }, [id]);

  return (
    <article>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Folder: {note.folder}</p>
      <p>Created on: {new Date(note.date_created).toDateString()}</p>
      <p>Last Updated: {new Date(note.last_edited).toDateString()}</p>
      <div className="noteNavigation">
        <div>
          <Link to="/notes">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/notes/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default NoteDetails;
