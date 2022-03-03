
import indexHTML from "./indexHTML.js";


  function addItem(event) {
    event.preventDefault();
    var item = document.querySelector("#item").value;
    var qty = document.querySelector("#quantity").value;
    var pty = document.querySelector("#priority").value;

    var obj = {
      name: item,
      quantity: qty,
      priority: pty,
    };
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("ToDoList", JSON.stringify(arr));

      displayArray(arr); 
  }

function displayArray(arr){
  document.querySelector('tbody').innerHTML = "";
  arr.map(function (el,index) {
    
      var tRow = document.createElement("tr");

      var t1 = document.createElement("td");
      t1.textContent = el.name;
      var t2 = document.createElement("td");
      t2.textContent = el.quantity;
      var t3 = document.createElement("td");
      t3.textContent = el.priority;
      
      if (el.priority == "High") {
        t3.style.backgroundColor = "red";
        t3.style.color = "white";
      } else if (el.priority == "Low") {
        t3.style.backgroundColor = "green";
        t3.style.color = "white";
      } else if (el.priority == "Medium") {
        t3.style.backgroundColor = "yellow";
        t3.style.color = "black";
      }

      var t4 = document.createElement("td");
      t4.textContent = "Delete";
      t4.addEventListener("click", function(){
        deleteItem(index);
      });
      document.querySelector("tbody").append(tRow);
      tRow.append(t1, t2, t3, t4)
    });
}

  function deleteItem(index){
        console.log(index);
        arr.splice(index,1);
        localStorage.setItem("ToDoList", JSON.stringify(arr));
        displayArray(arr);
    }




    export {indexHTML,addItem,displayArray,deleteItem};