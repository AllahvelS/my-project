import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function deleteNote(id) {
    axios
    .delete(`${API}/notes/${id}`)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  }  

function Note({ note }) {
    const handleDelete = () => {
      if (window.confirm("Are you sure you want to delete this note?")) {
        deleteNote(note.id);
      }
    };
  
    return (
      <div className="note">
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <p>Folder: {note.folder}</p>
        <p>Created on: {new Date(note.date_created).toDateString()}</p>
        <p>Last Updated: {new Date(note.last_edited).toDateString()}</p>
        <Link to={`/notes/${note.id}/edit`}>Edit Note</Link>
        <button onClick={handleDelete}>Delete Note</button>
      </div>
    );
  }  

export default Note;
