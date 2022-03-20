import logo from "./logo.svg";
import "./App.css";
import Note from "./components/Note";
import {useState} from 'react'

let arr = [ 
];

function createNote(title, des, date){
  this.title = title;
  this.des = des;
  this.date = date;
}




function App() {
  const [state, setState] = useState([...arr])

  function sort_alphabetically(){
    arr.sort((a,b)=>{
      if(a.title > b.title) return 1;
      return -1;
    })
    setState([...arr])
  }
  function sort_alphabetically_desc(){
    arr.sort((a,b)=>{
      if(a.title > b.title) return -1;
      return 1;
    })
    setState(arr)
  }

  function myFun(){
    let title=document.getElementById("title").value;
    let des=document.getElementById("noteText").value;
    let date=document.getElementById("date").value;
   
    let note=new createNote(title, des, date)
    arr.push(note);

    setState(arr)
  
    // console.log(arr);
  }
 
  
  console.log(state)

  return (
    <div className="App">
      <input type="text" id="title" placeholder="Title" className="add-note" />
      <textarea id="noteText" cols="30" rows="20"></textarea>
      <input id="date" type="date"></input>
				<input type="submit" value="Submit" onClick={myFun} />	 

      <button id="sort-alphabetically" type="button" onClick={sort_alphabetically}>
        Sort_alphabetically 
      </button>
      <button id="sort-alphabetically-desc" type="button" onClick={sort_alphabetically_desc}>
        Sort_alphabetically_desc
      </button>
      <div id="note-data">
       { state.map(el=><Note note={el} />)}
      </div>
    </div>
  );
}

export default App;
