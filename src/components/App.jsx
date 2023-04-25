import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = React.useState([]);

  function noteAdd(newNote){ //all the inputs are come here now we need to store it somewhere like an array that changes the State so we need here useState()...
    //console.log(note);

    setNotes(prevValue => {
      return [...prevValue,newNote]
    });
  }

  function itemDelete(id){

    setNotes((prevnotes,index) => {
      return prevnotes.filter((items,index) => { //it filters items with the index number 
        return index !== id;  //and returns where the idex is not equals to the id
      });
    });
    //console.log("the delete press detected");
  }

  return (
    <div>
      <Header />
      <CreateArea 
      add={noteAdd}
      />
      {notes.map((noteItems,index) => { //and in the map function we can pass the index so that it can check the index //every noteitems in notes like title and contents pass over that 
          return <Note 
          key={index}
          id={index}
          title={noteItems.title} 
          content={noteItems.content} 
          deleteById = {itemDelete} />
      })}
      <Footer/>
    </div>
  );
}

export default App;
