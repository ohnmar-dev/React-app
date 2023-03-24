import React from "react";
import Child from "./Child"
const Parent = () => {
    const parentMethod = () =>{
        alert("Child Click handdler")
    }
   return (
    <div>
        <Child clickHanddler = {parentMethod} />
    </div>
   )
}
export default Parent;