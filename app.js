let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const getcompchoice=()=>{
    const options=["rock","paper","scissors"];
    let num=Math.floor(Math.random()*3);
    return options[num];
};
const draw=()=>{
    msg.textContent="it's a draw";
    msg.style.backgroundColor="black";
}
const result=(userwin,userchoice,compchoice)=>{
    if(userwin==true)
    {
        userscore++;
        document.querySelector("#user-score").textContent=userscore;
        msg.textContent=`YOU WIN! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        document.querySelector("#comp-score").innerText=compscore;

        msg.innerText=`you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    const compchoice=getcompchoice();
    if(userchoice===compchoice)
    {
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors"?false:true;
        }
        else
        {
            userwin=compchoice==="rock"?false:true;
        }
        result(userwin,userchoice,compchoice);
    }
    
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
    
});