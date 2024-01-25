// Ternary Operators
const age = 12;
const isAllowed = age >= 18? "Welcome" : "You are Underage";
console.log(isAllowed);

// Objects

const user = {
  name: "Gopal",
  cardType: "CreditCard",
  cardLimit:15000
}
// Objects and arrays Destructuring
const user2 = {...user,name:"Sujit",cardLimit:20000};
console.log(user2);
// Another Type

const {name,cardType,cardLimit} = user; // Creates three variables from user object 

