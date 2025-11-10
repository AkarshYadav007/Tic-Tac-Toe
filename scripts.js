let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#rst");
let newbtn = document.querySelector("#newbtn");
let container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let count = 0;

const winningpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];

const resetgame = () =>
    {
        turn0 = true;
        enableboxes();
        container.classList.add("hide");
        count = 0;
    };

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        count += 1;
        if(turn0 === true)
        {
            box.innerText = "O";
            turn0 = false;
        }
        else
        {
            box.innerText = "X"
            turn0 = true; 
        }
        box.disabled = true;
        if(count === 9)
        {
          msg.innerText = "sorry no win";  
        }
        checkwinner();
    }); 
});
const disableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};


const showwinner = (winner) =>
{
    msg.innerText = `Congratulations, The Winner is = ${winner}`;
    container.classList.remove("hide");
    disableboxes();
};


const checkwinner = () =>
    {
        for(let pattern of winningpatterns)
        {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            if(pos1 != "" && pos2 != "" && pos3 != "")
            {
                if(pos1 === pos2 && pos2 === pos3)
                {
                    console.log("winner", pos1);
                    showwinner(pos1);
                }
                else if(count === 9)
                {
                 msg.innerText = "Sorry, No one won please reset"; 
                 container.classList.remove("hide"); 
                }
            }
        }
    };

newbtn.addEventListener("click",resetgame);
rst.addEventListener("click",resetgame);
