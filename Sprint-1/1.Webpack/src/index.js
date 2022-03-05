import "./index.css";
import logo1 from "./images/logo.png";

console.log(logo1);
//Heading
const logo =  document.createElement("img");
logo.src = logo1;


//FORM
const form = document.createElement("form");
form.id = "form";
const noteHeadingLabel =  document.createElement("label");
noteHeadingLabel.innerText = "Heading";
const noteHeadingInput = document.createElement("input");
noteHeadingInput.type = "text";
noteHeadingInput.id = "noteHeading";

const noteTextLabel =  document.createElement("label");
noteTextLabel.innerText = "Note";
const noteInput = document.createElement("input");
noteInput.type = "text";
noteInput.id = "note";


const submitNote = document.createElement("input");
submitNote.type = "submit";
submitNote.value = "submit";

const line = document.createElement("hr");
const displayDiv = document.createElement("div");
displayDiv.id = "displayDiv";
form.append(noteHeadingLabel,noteHeadingInput,noteTextLabel,noteInput,submitNote);
 document.getElementById("container").append(logo,form,line,displayDiv);


//Display Div
document.querySelector("#form").addEventListener("submit", addNote);



var arr = JSON.parse(localStorage.getItem('noteList'))||[];
  displayArray(arr);


  function addNote(event) {
    event.preventDefault();
    var noteHeading = document.querySelector("#noteHeading").value;
    var note = document.querySelector("#note").value;

    var obj = {
      heading: noteHeading,
      content: note,
    };
    arr.push(obj);
    localStorage.setItem("noteList", JSON.stringify(arr));

    displayArray(arr); 
  }

function displayArray(arr){
  document.querySelector('#displayDiv').innerHTML = "";
  arr.map(function (el,index) {
    const noteDiv = document.createElement("div");
    const heading = document.createElement("h4");
    heading.textContent = el.heading;
    const note = document.createElement("p");
    note.textContent = el.content;
      const del = document.createElement("button");
      del.innerHTML = "Delete";
      del.addEventListener("click", function(){
        deleteItem(index);
      });
      noteDiv.append(heading,note,del);
      document.querySelector("#displayDiv").append(noteDiv);
    });
}

  function deleteItem(index){
        console.log(index);
        arr.splice(index,1);
        localStorage.setItem("noteList", JSON.stringify(arr));
        displayArray(arr);
    }




