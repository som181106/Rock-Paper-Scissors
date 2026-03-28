let userscore=0;
let compscore=0;
let msg=document.querySelector('#msg');

const userscorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#comp-score');

const choices=document.querySelectorAll('.choice');

const getcompchoice=()=>{
    const options=['rock','paper','scissors'];
    const randomnumber=Math.floor(Math.random()*3);
    return options[randomnumber];
}
const draw=()=>{
    console.log("It was a tie...Play Again");
    msg.innerText="It was a tie...Play Again!!!";
    msg.style.backgroundColor='#AFE0E9';
}

const showWinner=(userWin)=>{
     if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
            console.log("You won!😁");
            msg.innerText='You won!!!😁';
            msg.style.backgroundColor='#50C878';
        }
        else{
            compscore++;
            compscorepara.innerText=compscore;
            console.log("Computer won!😢");
            msg.innerText="Computer won!!😢";
            msg.style.backgroundColor='#AA4A44';
        }

}

const playgame=(userchoice)=>{
    console.log("Your choice was: " + userchoice);
    const compchoice=getcompchoice();
    console.log("Computer choice was: " + compchoice);

    if(userchoice===compchoice){
        console.log("It's a tie!");
        draw();
    }
    else{
        let userWin=true;
        if(userchoice==='rock'){
            userWin=compchoice==='scissors'?true:false;
        }
        else if(userchoice==='paper'){
            userWin=compchoice==='rock'?true:false;
        }
        else if(userchoice==='scissors'){
            userWin=compchoice==='paper'?true:false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
      const userchoice=choice.getAttribute('id');
      playgame(userchoice);
    })
    
})