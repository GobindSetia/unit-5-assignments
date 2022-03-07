

function Note(props) { 
 let {note}=props;
  return (
    <div className="one-note"> 
		<div className="note-title" >Title: {note.title}</div>
        <div>Des: {note.des}</div>
        <div>Date: {note.date}</div>
    </div>
  );
}

export default Note;
