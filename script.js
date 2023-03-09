let title = document.querySelector(".title");
let q1 = document.querySelector(".questions1");
let q2 = document.querySelector(".question2");
let fullParagraph = document.querySelector(".results");
let button = document.querySelector(".button");
let Submitbutton = document.querySelector(".Submitbutton");
let date = document.querySelector(".date");
let p = document.querySelector(".M1");

date.onclick = function() {
    p.innerHTML = "Why you clicking here?? Try up there ↑";
};





Submitbutton.onclick = function() {
    q1.style.display = "block";
    q2.style.display = "block";
    button.style.display = "block";
    title.style.display = "none";
};

button.onclick = function() {
    let userInput = document.querySelector(".input").value;
    let p1 = document.querySelector(".p1").value;
    let p2 = document.querySelector(".p2").value;
    let r1 = document.querySelector(".r1");
    r1.style.display = "block";

    console.log(p1);
    console.log(p2);

    if (userInput === "" && p1 >= 16 && p2 === "Extrovert") {
        r1.innerHTML = " Did you forgot something????";
    } else if (userInput === "" && p1 >= 20 && p2 === "Extroverted") {
        r1.innerHTML = " Did you forgot something????";
    } else if (userInput === "" && p1 >= 16 && p2 === "introvert") {
        r1.innerHTML = " Did you forgot something????";
    } else if (userInput === "" && p1 >= 20 && p2 === "Introvert") {
        r1.innerHTML = " Did you forgot something????";
        
    } else if (p1 <= 16 && p2 === "Extrovert") {
        document.querySelector(".Superman").style.display = "block";
         document.querySelector(".Spiderman").style.display = "none";
         document.querySelector(".Batman").style.display = "none";
         document.querySelector(".America").style.display = "none";
        r1.innerHTML = "Hey " + userInput + " since your age is " + p1 + " and your personality is " + p2 + " then, your character would be Superman";

    } else if (p1 >= 17 && p2 === "Extrovert") {
        document.querySelector(".Spiderman").style.display = "block";
         document.querySelector(".Superman").style.display = "none";
         document.querySelector(".Batman").style.display = "none";
         document.querySelector(".America").style.display = "none";
        r1.innerHTML = "Hey " + userInput + " since your age is" + p1 + " and your personality is " + p2 + " then, your character would be Spiderman";


    } else if (p1 >= 16 && p2 === "Introvert") {
        document.querySelector(".America").style.display = "block";
         document.querySelector(".Superman").style.display = "none";
         document.querySelector(".Spiderman").style.display = "none";
         document.querySelector(".Batman").style.display = "none";
        r1.innerHTML = "Hey " + userInput + " since your age is " + p1 + " and your personality is " + p2 + " then, your character would be Captain America";


    } else if (p1 <= 17 && p2 === "Introvert") {
        document.querySelector(".Batman").style.display = "block";
         document.querySelector(".Superman").style.display = "none";
         document.querySelector(".Spiderman").style.display = "none";
         document.querySelector(".America").style.display = "none";
        r1.innerHTML = "Hey " + userInput + " since your age is " + p1 + " and your personality is " + p2 + " then, your character would be Batman";

    } else if (p1 === "" && p2 === "") {
        r1.innerHTML = " Try typing something......";
    }

};