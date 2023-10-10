import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Note = (props) => {
  return (
    <div className="note">
      <div className="note__body">{props.note.text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverIcon
          className="note__delete"
          aria-hidden="true"
          onClick={() => props.deleteNote(props.note.id)}
        ></DeleteForeverIcon>
      </div>
    </div>
  );
};

export default Note;
