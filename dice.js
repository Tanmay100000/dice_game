// diclare variable outside imp because it is not work in if else condition when you try to use
let nam1="player 1";
let nam2="player 2";
// function for edit button
function editnam(){
    nam1=prompt("add player 1 name ");
    nam2=prompt("add player 2 name ");

    document.querySelector("p.player1").innerHTML=nam1;
    document.querySelector("p.player2").innerHTML=nam2;
}

// function for role the dies
function roledies(){
    setTimeout(function(){
        let randomnum1=Math.floor(Math.random()*6)+1;
        let randomnum2=Math.floor(Math.random()*6)+1;

        document.querySelector(".img1").setAttribute("src",`dice${randomnum1}.png`);
        document.querySelector(".img2").setAttribute("src",`dice${randomnum2}.png`);



        if(randomnum1===randomnum2){
          document.querySelector("h1").innerHTML="draw game"
        }else if(randomnum1>randomnum2){
            document.querySelector("h1").innerHTML=(nam1+"WINS!");
        }
        else{
            document.querySelector("h1").innerHTML=(nam2+"WINS!");
        }
    },3000);
}
