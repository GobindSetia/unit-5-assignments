import { useState,useEffect } from "react";

export const Timer=({start,end})=>{
    const [timer,setTimer]= useState(+start);
    useEffect(()=>{
        const id = setInterval(()=>{
                setTimer((prev)=>{
                    if(prev>=+end){
                        clearInterval(id);
                        return 0;
                    }
                    return prev+1});
            },1000);

            return ()=>{
                clearInterval(id);
            }
    },[])

    return <div>
        Timer:{timer}
    </div>
}
