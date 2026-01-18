import React from "react";
import { useState,useEffect,useRef } from "react";
import { FaTimes } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';
const XO=function(){
const list=[];
let k=0;
const colors=["x","o","x","o","x","o","x","o","x"];
const role=useRef(0);
const current_player=useRef("");
const is_there_winner=useRef(0);
const [O_winns,setO_winns]=useState(0);
const [X_winns,setX_winns]=useState(0);
const [total_plays,settotal_playes]=useState(0);
const [active,setactive]=useState(0);
const color_item=useRef(0);
let popup_style={display:active?"block":"none"};
const [winner,setWinner]=useState(0);
const playing_times=useRef(0);
const matrix_copy=[["","",""],["","",""],["","",""]];
const [matrix,setMatrex]=useState([["","",""],["","",""],["","",""]]);
useEffect(()=>{
 if(playing_times.current>=3){ 
     winer();
     if(is_there_winner.current){
        console.log("fffff");
        }
     }
},[playing_times.current]);
function disactive(){
setactive(0);
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function winer(){
if(matrix[0][0]==="X" && matrix[0][2]==="X" && matrix[0][1]==="X"){
    is_there_winner.current=1;
    setWinner(1);
    setactive(1);
    
    setX_winns(X_winns+1);
    settotal_playes(total_plays+1);
    console.log(winner);
}
else if(matrix[0][0]==="O" && matrix[0][2]==="O" && matrix[0][1]==="O"){
  is_there_winner.current=1;
  setWinner(2);
  setactive(1);
  setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[1][0]==="O" && matrix[1][1]==="O" && matrix[1][2]==="O"){
  is_there_winner.current=1;
  setWinner(2);
  setactive(1);
  setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[1][0]==="X" && matrix[1][1]==="X" && matrix[1][2]==="X"){
  is_there_winner.current=1;
  setWinner(1);
  setactive(1);
  setX_winns(X_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[2][0]==="O" && matrix[2][1]==="O" && matrix[2][2]==="O"){
  is_there_winner.current=1;
  setWinner(2);
  setactive(1);
  setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[2][0]==="X" && matrix[2][1]==="X" && matrix[2][2]==="X"){
  is_there_winner.current=1;
  setWinner(1);
   setactive(1);
  setX_winns(X_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][0]==="X" && matrix[1][0]==="X" && matrix[2][0]==="X"){
  is_there_winner.current=1;
  setWinner(1);
   setactive(1);
    setX_winns(X_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][0]==="O" && matrix[1][0]==="O" && matrix[2][0]==="O"){
  is_there_winner.current=1;
  setWinner(2);
   setactive(1);
    setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][1]==="X" && matrix[1][1]==="X" && matrix[2][1]==="X"){
  is_there_winner.current=1;
  setWinner(1);
   setactive(1);
    setX_winns(X_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][1]==="O" && matrix[1][1]==="O" && matrix[2][1]==="O"){
  is_there_winner.current=1;
  setWinner(2);
   setactive(1);
    setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][2]==="O" && matrix[1][2]==="O" && matrix[2][2]==="O"){
  is_there_winner.current=1;
  setWinner(2);
  setactive(1);
  setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][2]==="X" && matrix[1][2]==="X" && matrix[2][2]==="X"){
  is_there_winner.current=1;
  setWinner(1);
   setactive(1);
    setX_winns(X_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][0]==="X" && matrix[1][1]==="X" && matrix[2][2]==="X"){
  is_there_winner.current=1;
  setWinner(1);
  setactive(1);
  setX_winns(X_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][0]==="O" && matrix[1][1]==="O" && matrix[2][2]==="O"){
  is_there_winner.current=1;
  setWinner(2);
  setactive(1);
  setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][2]==="X" && matrix[1][1]==="X" && matrix[2][0]==="X"){
  is_there_winner.current=1;
  setWinner(1);
   setactive(1);
  setX_winns(X_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
else if(matrix[0][2]==="O" && matrix[1][1]==="O" && matrix[2][0]==="O"){
  is_there_winner.current=1;
  setWinner(2);
   setactive(1);
    setO_winns(O_winns+1);
  settotal_playes(total_plays+1);
  console.log(winner);
}
}
function updateCell(row, col, state) {
  if(state===0){
    color_item.current++;
     setMatrex(prev => {
    const newMatrix=[[...prev[0]],[...prev[1]],[...prev[2]]];
      if(role.current%2===0){
      current_player.current="X";
       newMatrix[row][col] = "X";
      }
       else {
        current_player.current="O";
         newMatrix[row][col] = "O";
       }
      role.current++;
      console.log(role.current);
      return newMatrix;
    }); 
    playing_times.current++;
    if(playing_times.current===9){
      settotal_playes(total_plays+1);
      reset();
    }
  }
  else {
    console.log("there is a winner i will not change the cell");
    console.log(is_there_winner.current);
  }  
}
function display(){
for (let i = 0; i < 3; i++) {
   for (let j = 0; j < 3; j++) {
  
   list.push(<li key={k}
  className={`li1 ${
    matrix[i][j] === "X"
      ? "x"
      : matrix[i][j] === "O"
      ? "o"
      : ""
  }`}
  onClick={() => updateCell(i, j, is_there_winner.current)}
>
  {matrix[i][j]}
</li>
)
   k++; 
  }
}
}
function reset(){
setactive(0);
setMatrex(matrix_copy);
setWinner(0);
role.current=0;
is_there_winner.current=0;
playing_times.current=0;
}
display();
return <>
<div className="popup_card1" style={popup_style}>
 <FaTimes className="icon1" onClick={disactive} size={20} color="white"/>
 <p className="p9">“We proudly announce that we have a winner! Outstanding moves, great focus, and a well-deserved victory.”</p>
<p className="p10">the winner is {current_player.current}</p> 
<center><div onClick={reset} className="D10">Reload</div> </center>
 
</div>
<center>
  <div className="D11">
   <div className="D12"><p className="x">x</p><p className="o">o</p></div>
   <div className="D13">current  {current_player.current==="X"?"O":"X"}</div>
   <div className="D14"><FaRedo onClick={reset} size={24} color=" rgb(29, 53, 66)" /></div>
  </div>
</center>
<center><div className="D1">
    <ul className="ul1">
     {list}
    </ul>
    <div className="D6">
    <div className="bu3" id="bu3">X<p className="p8">({X_winns})</p></div>
    <div className="bu3" id="bu4">TOTAL<p className="p8">({total_plays})</p></div>
    <div className="bu3" id="bu5">O<p className="p8">({O_winns})</p></div>
    </div>
    </div></center>
  
</>
}
export default XO