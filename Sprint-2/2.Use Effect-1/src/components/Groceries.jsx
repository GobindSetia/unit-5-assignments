import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";

export const Groceries = ()=>{
    const [text,setText]= useState("");
    const [groceries,setGroceries]=useState([]);
     const [page,setPage]=useState(1);
    useEffect(()=>{
        getData();
    },[page])
    const getData = ()=>{
        axios.get(`http://localhost:3002/groceries?_limit=3&_page=${page}`).then(res=>{
            setGroceries(res.data);
        });
    }


    return <div>
        <input type="text" onChange={e=> setText(e.target.value)} />
        <button onClick={()=>{
            fetch("http://localhost:3002/groceries",{
                method:"POST",
                body:JSON.stringify({title:text,purchased:false}),
                headers:{
                    "content-type":"application/json",
                }
            }).then(()=>{
                getData();
            })
        }} >Save</button>
        {groceries.map((e)=> (<GroceryItem key={e.id} item={e.title}/>))}
             
             <div>
             <button onClick={()=>{
            if(page>1){
                setPage(page-1);
            }
        }}>Prev</button>
        <button onClick={()=>{
            setPage(page+1);
        }}>Next</button>
             </div>
        
        
    </div>
};


function GroceryItem({item}){
    return <div>{item}</div>
}