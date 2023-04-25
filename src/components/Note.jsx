import React from "react";

function Note(props) {

  function handleDelete(){
    props.deleteById(props.id)  //onDelete in attribute mentioned in the app.jsx when thats trigger its go there and after that the value like the function get triggeres and the operation get happens
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
