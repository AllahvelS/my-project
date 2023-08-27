// DEPENDENCIES
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Note from "./Pages/Note";

// COMPONENTS
import NavBar from "./Components/NavBar";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Index />} />
            <Route path="/notes/new" element={<New />} />
            <Route exact path="/notes/:id" element={<Note />} />
            <Route path="/notes/:id/edit" element={<Edit />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


