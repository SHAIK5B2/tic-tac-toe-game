 let boxes=document.querySelectorAll(".box");
 let newbtn=document.querySelector("#new-btn");
 let resetbtn=document.querySelector("#reset-btn");
 let msg=document.querySelector("#msg");
 let msgContainer=document.querySelector(".msg-Container");
 let count=0;
 let isWinner=false;
 const winningpattern=[
   [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
 ];
  let turn0=true;
 boxes.forEach((box) => {
  box.addEventListener("click",() =>{
    if(box.innerText===""){
    if(turn0){
      box.innerText="x";
       box.classList.add("x-style");
      turn0=false;
    }
    else{
      box.innerText="o";
       box.classList.add("o-style");
      turn0=true;
    }
    count++;
     isWinner=checkWinner();
    if(count===9 && !isWinner){
      isdraw();
    }
  }
   
  });
 });
 const isdraw =()=>{
  msg.innerText="game is draw";
  msgContainer.classList.remove("hide");
 }
 const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
  const checkWinner = () => {
    for( pattern of winningpattern){
      let val1=boxes[pattern[0]].innerText;
      let val2=boxes[pattern[1]].innerText;
      let val3=boxes[pattern[2]].innerText;
      if(val1!=""&& val2!="" && val3!=""){
         if (val1 === val2 && val2 === val3)
       {
          showWinner(val1);
        }
      }
    }
  }
const resetBtn =()=>{
     turn0=true;
     count=0;
     enableBoxes();
     msgContainer.classList.add("hide");
}
const enableBoxes=()=>{
  for(let box of boxes){
  box.disabled=false;
  box.innerText = "";
  }
}
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
 

newbtn.addEventListener("click", resetBtn);
resetbtn.addEventListener("click", resetBtn);
