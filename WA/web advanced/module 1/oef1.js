'strict';

let score = 0;
let naam = prompt("Wat is je naam?");
alert(`welkom bij de quiz ${naam}!`);

let antwoord1 = prompt("");
if(antwoord1 == ""){
    score++;
    alert("goed gedaan!");
}else{
    alert("Het juiste antwoord is ...");
}

let antwoord2 = prompt("");
if(antwoord2 == "nee"){
    score++;
    alert("goed gedaan !");
}else{
    alert("Het juiste antwoord is ...");
}

let antwoord3 = prompt("");
if(antwoord3 == "ja"){
    score++;
    alert("goed gedaan!");
}else{
    alert("Het juiste antwoord is ...");
}


alert(`De totale score is: ${score}`);