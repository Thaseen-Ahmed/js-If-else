let a= document.getElementById("Age");
let val=document.getElementById("val");
a.value=Number.parseInt("a");


function ageValid(){
    preventDefault()
    if(a.value==""){
        alert("Enter Your Age")
    }
    if(a.value<=10){
    alert("your age is Invalid")
    }
    if(a.value>=10 & a.value<18){
        alert("You Can Think to drive")
    }
    if(a.value>18 & a.value<=80){
        innerHTML=val.innerHTML="<div {backgroundcolour: green; height: 10vh; width:30%} ><h2>You are Eligible to apply for Driving License </div>"
    }
    else{
        alert('Enter the age Between 18 and 70')
    }
    
}
// a.addEventListener("click",ageValid());
