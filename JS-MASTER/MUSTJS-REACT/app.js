// // Ternary Operators
// const age = 12;
// const isAllowed = age >= 18? "Welcome" : "You are Underage";
// console.log(isAllowed);

// // Objects

// const user = {
//   name: "Gopal",
//   cardType: "CreditCard",
//   cardLimit:15000
// }
// // Objects and arrays Destructuring
// const user2 = {...user,name:"Sujit",cardLimit:20000};
// console.log(user2);
// // Another Type

// const {name,cardType,cardLimit} = user; // Creates three variables from user object

// // Array functions {map(),filter(),reduce()}

// const arr = [1,2,3,4,5,6,7,8,9,10];

// let counter = 0;
// const returnData = arr.map((data,index)=>{
//   counter++;
//   return data + counter*5;
// })
// console.log(returnData);

// // filter()

// const arr2 = ["gopal","sujit","kr","gopal","sujit","kr","gopal","sujit","kr","gopal","sujit"];

// const arrayWithoutNameGopal = arr2.filter((name)=>{
//     return name!== "gopal";
// });
// console.log(arrayWithoutNameGopal);

// //JavaScript Promise , Async Await, Fetch , XHR

// //Promise

// let inputId = 256215 //data inputed by user
// let inputPassword = 123456 //data inputed by user
// const database = {
//   userId : 123456,
//   password : "12345",
// }
// // Creating a Promise
// const canLogin = new Promise((resolve, reject) =>{
//     if(inputId === database.userId && inputPassword === database.password){
//       resolve(true);
//     }else{
//       reject(false);
//     }
// })
// // Consuming Promise
// canLogin.then((result)=>{
//   console.log(result);
// },(error)=>{
//   console.log(error);
// })

// // Practice

// const ingredients = ["milk","water","sugar","teabag","electricity"];

// const canMakeTea = new Promise((resolve, reject) => {
//    if (ingredients.includes("teabag")&& ingredients.includes("sugar")) {
//        resolve("Yes you can make tea!");
//    } else {
//      reject("No you can't make tea!");
//    }

// });

// canMakeTea.then((result)=>{
//   console.log(result);
// }).catch((error)=>console.log(error));

// // Promise Practice to change text and color after certain time

// const headings = document.querySelectorAll("h1");
// console.log(headings);
// function change(element, text, color, timeout) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.textContent = text;
//         element.style.color = color;
//         resolve();
//       }, timeout);
//     } else {
//       reject("element not found");
//     }
//   });
// }

// change(headings[0], "One", "red", 1000)
//   .then(() => {
//     return change(headings[1], "two", "red", 1000);
//   })
//   .then(() => {
//     return change(headings[2], "three", "red", 1000);
//   })
//   .then(() => {
//     return change(headings[3], "four", "red", 1000);
//   })
//   .then(() => {
//     return change(headings[4], "five", "red", 1000);
//   })
//   .then(() => {
//     return change(headings[5], "six", "red", 1000);
//   })
//   .then(() => {
//     return change(headings[6], "seven", "red", 1000);
//   })
//   .then(() => {
//     return change(headings[7], "eight", "red", 1000);
//   }).catch((err) => {
//     console.log(err);
//   });


// Ajax

const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest(); 
xhr.open("GET", URL);
xhr.onreadystatechange = () => {
     
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);  
          console.log(data);  
          }
};
xhr.send();