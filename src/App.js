import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./componets/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "04/15/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "04/21/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "04/28/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "04/30/2021",
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
