// Js Home
// let clickbtn = document.getElementById("clickme");
// let span = document.getElementById('textspan');
// clickbtn.addEventListener('click',()=>{
//     let date = new Date();
//     span.innerText = date;
// });
// console.log(clickbtn);

// Js Intro

let imagetag = document.querySelector("#image")
let changeBtn = document.querySelector("#chnagebtn")
let a = 0;
changeBtn.addEventListener("click",()=>{
    if (a == 0) {
        imagetag.src = "Assets/fl2.jpg";
        a = 1;
    } else {
        imagetag.src = "Assets/flw1.jpg";
        a = 0;
    }
    
})
