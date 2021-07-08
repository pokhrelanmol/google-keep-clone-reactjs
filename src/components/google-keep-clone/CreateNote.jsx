import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateNote(props) {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    setNote((prevVal) => {
      let { name, value } =e.target;
      return{ 
        ...prevVal,
        [name]:value,
}
      
    })
  }

  // click event
  const clickEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content:""
      
    })
  }

  return (
    <>
      <div className="main-note">
        <form action="">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={InputEvent}
          />

          <textarea
            cols="30"
            name="content"
            rows="10"
            placeholder="Write a Note.."
            value={note.content}
            onChange={InputEvent}
          ></textarea>
          <Tooltip title="Add note">
      <Fab color="primary" aria-label="add" onClick = {clickEvent}>
        <AddIcon />
      </Fab>
         </Tooltip>
        </form>
      </div>

    </>
  );
}

export default CreateNote;
