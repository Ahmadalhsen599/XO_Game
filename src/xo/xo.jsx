import React from "react";
import { useState,useEffect,useRef } from "react";
const XO=function(){
const list=[];
const role=useRef(0);
const [winner,setWinner]=useState(0);
const playing_times=useRef(0);
const matrix_copy=[[1,2,3],[4,5,6],[7,8,9]];
const [matrix,setMatrex]=useState([[1,2,3],[4,5,6],[7,8,9]]);
useEffect(()=>{
 if(playing_times.current>=3){ 
     winer();
    
        }
    if(winner){
    console.log("fff");
     }
},[playing_times.current])
function winer(){
if(matrix[0][0]==="X" && matrix[0][2]==="X" && matrix[0][1]==="X"){
    setWinner(1);
    console.log(winner);
}
else if(matrix[0][0]==="O" && matrix[0][2]==="O" && matrix[0][1]==="O"){
  setWinner(2);
  console.log(winner);
}
else if(matrix[1][0]==="O" && matrix[1][1]==="O" && matrix[1][2]==="O"){
  setWinner(2);
  console.log(winner);
}
else if(matrix[1][0]==="X" && matrix[1][1]==="X" && matrix[1][2]==="X"){
  setWinner(1);
  console.log(winner);
}
else if(matrix[2][0]==="O" && matrix[2][1]==="O" && matrix[2][2]==="O"){
  setWinner(2);
  console.log(winner);
}
else if(matrix[2][0]==="X" && matrix[2][1]==="X" && matrix[2][2]==="X"){
  setWinner(1);
  console.log(winner);
}
else if(matrix[0][0]==="X" && matrix[1][0]==="X" && matrix[2][0]==="X"){
  setWinner(1);
  console.log(winner);
}
else if(matrix[0][0]==="O" && matrix[1][0]==="O" && matrix[2][0]==="O"){
  setWinner(2);
  console.log(winner);
}
else if(matrix[0][1]==="X" && matrix[1][1]==="X" && matrix[2][1]==="X"){
  setWinner(1);
  console.log(winner);
}
else if(matrix[0][1]==="O" && matrix[1][1]==="O" && matrix[2][1]==="O"){
  setWinner(2);
  console.log(winner);
}
else if(matrix[0][2]==="O" && matrix[1][2]==="O" && matrix[2][2]==="O"){
  setWinner(2);
  console.log(winner);
}
else if(matrix[0][2]==="X" && matrix[1][2]==="X" && matrix[2][2]==="X"){
  setWinner(1);
  console.log(winner);
}
else if(matrix[0][0]==="X" && matrix[1][1]==="X" && matrix[2][2]==="X"){
  setWinner(1);
  console.log(winner);
}
else if(matrix[0][0]==="O" && matrix[1][1]==="O" && matrix[2][2]==="O"){
  setWinner(2);
  console.log(winner);
}
else if(matrix[0][2]==="X" && matrix[1][1]==="X" && matrix[2][0]==="X"){
  setWinner(1);
  console.log(winner);
}
else if(matrix[0][2]==="O" && matrix[1][1]==="O" && matrix[2][0]==="O"){
  setWinner(2);
  console.log(winner);
}
}
function updateCell(row, col, ) {
  setMatrex(prev => {
    const newMatrix=[[...prev[0]],[...prev[1]],[...prev[2]]];
      if(role.current%2===0){
       newMatrix[row][col] = "X";
      }
       else {
         newMatrix[row][col] = "O";
       }
      role.current++;
     
    
      console.log(role.current);
      return newMatrix;
    }); 
    playing_times.current++;
    if(playing_times.current===9){
      reset();
    }
    
   
}
function display(){
for (let i = 0; i < 3; i++) {
   for (let j = 0; j < 3; j++) {
   list.push(<li className="li1"  onClick={()=>updateCell(i,j,"X")}>{matrix[i][j]}</li>)
   }
}

}
function reset(){
setMatrex(matrix_copy);
setWinner(0);
role.current=0;
playing_times.current=0;
}
display();
return <>
<div className="D3">
<div className="D2" id="winner">
{winner ? "the winner is "+winner :""}
</div>
 <div className="D2" id="reset" onClick={reset}>
    reset
</div>
</div>

<center><div className="D1">
    <ul className="ul1">
     {list}
    </ul>
    </div></center>
  
</>
}
export default XO