import React from "react";
import Button from "./component";
import { useState } from "react";
const Counter=function(){
const [counter,setCounter]=useState(0);
function increament(){
    setCounter(counter+1);
}
return <>
<center>
    <p className="p1">
        {counter}
    </p>
<Button onClick={increament}/>
</center>

</>

}
export default Counter