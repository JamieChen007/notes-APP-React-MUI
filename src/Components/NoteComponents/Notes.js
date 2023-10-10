import { useEffect, useState } from "react";
import "../../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the notes state
  const saveHandler = (e) => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (Array.isArray(data) && data.length > 0) {
      setNotes(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  }, [notes, loading]); //componentDidmount+componentDidUpdate

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="notes">
      {notes &&
        notes.length !== 0 &&
        notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
};

export default Notes;
