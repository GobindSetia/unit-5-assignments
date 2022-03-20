import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
export const Grocery =()=>{
const [items,setItems] = useState([]);

const addItem = (data)=>{
    const t ={
        id: Date.now(),
        title:data,
    }
    setItems([...items,t]);
};
const delItem =(delId)=>{
    const x = items.filter((e)=>{
        return e.id !==delId;
    })
    setItems(x);
}

    return (
        <div>
        <GroceryInput addItem ={addItem}/>
        {items.map((e)=>(
             <GroceryList item={e} key={e.id} delItem={delItem}/>
        )   
        )}
        </div>
      );
}; 