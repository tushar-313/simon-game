let gameSeq=[];
let userSeq=[];
let btns=['red','yellow','green','blue'];
let start=false;
let level=0;
let highsc=0;
let body=document.querySelector('body');
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(start==false){
        console.log('started'); 
    start=true; 
    levelUp();
    }
    
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    let ranind=Math.floor(Math.random()*4);
    let rancol=btns[ranind];
    let ranbtn=document.querySelector(`#${rancol}`);
    btnflash(ranbtn);
    gameSeq.push(rancol);
    console.log(gameSeq);    
}
function btnflash(bt){
    bt.classList.add('flash');
    setTimeout(function(){
        bt.classList.remove('flash');}, 200);
    }
let allbtn=document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener('click',btnPress);
}
function btnPress(){
    
    let btn=this;
    btnflash(btn);
    let usercol=btn.getAttribute('id');
    userSeq.push(usercol);
    console.log(userSeq);
check(userSeq.length-1);
}
function check(indx){
if(gameSeq[indx]==userSeq[indx]){
 if(gameSeq.length==userSeq.length){
    setTimeout(levelUp,1000);
 }
}
else{
     if(level>highsc){
        highsc=level;
     }
    h2.innerHTML=`Game Over!! Your Score:  <b>${level}</b> <br>Press any key to Restart the game... <br> Highest Score: ${highsc}`;
    reset();
    bodyflash(body);

}
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function bodyflash(bd){
    bd.classList.add('over');
    setTimeout(function(){
        bd.classList.remove('over');}, 150);
    }