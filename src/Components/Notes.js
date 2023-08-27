import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";

const API = process.env.REACT_APP_API_URL;

function Notes() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("date_created"); // sorting by date_created

  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then((response) => setNotes(response.data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  // handle sorting by selected section
  const handleSort = (section) => {
    setSortBy(section);
  };

  // Sort the notes based on the selected section
  const sortedNotes = notes.slice().sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "folder") {
      return a.folder.localeCompare(b.folder);
    } else if (sortBy === "date_created") {
      const dateA = new Date(a.date_created).toDateString();
      const dateB = new Date(b.date_created).toDateString();
      return new Date(dateA) - new Date(dateB);
    } else {
      return 0;
    }
  });

  return (
    <div className="Notes">
      <section>
        <div>
          <label htmlFor="sortSelect">Sort by: </label>
          <select id="sortSelect" value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="date_created">Created Date</option>
            <option value="title">Title</option>
            <option value="folder">Folder</option>
          </select>
        </div>
        <ul>
          {sortedNotes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Notes;
