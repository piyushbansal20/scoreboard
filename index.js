let count_a =0
let count_b = 0

let scoreAl = document.getElementById("score_al")
let scoreBl = document.getElementById("score_bl")

function increase_a1(){
    count_a += 1
    scoreAl.innerText =count_a
   
}
function increase_a2(){
    count_a += 2
    scoreAl.innerText =count_a
   
}
function increase_a3(){
    count_a += 3
    scoreAl.innerText =count_a
   
}
function increase_b1(){
    count_b += 1
    scoreBl.innerText =count_b
   
}
function increase_b2(){
    count_b += 2
    scoreBl.innerText =count_b
   
}
function increase_b3(){
    count_b += 3
    scoreBl.innerText =count_b
   
}
function new_el()
{
    
    count_a =0
    count_b = 0
    scoreAl.innerText = 0
    scoreBl.innerText = 0
}