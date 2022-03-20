export const GroceryList = ({item,delItem})=>{
    return <div>
        <span>{item.title}</span>
        <span>-</span>
        <button onClick={()=>{
            delItem(item.id);
        }}>Delete</button>
    </div>;
};