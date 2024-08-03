console.log("- Activity 1");
const str1 = "I love JavaScript because JavaScript is versatile.";
const matches1 = str1.match(/JavaScript/g);
console.log(matches1);

const str2 = "Code - 9693.";
const matches2 = str2.match(/\d/g);
console.log(matches2);

console.log("- Activity 2");
const str3 = "I love Javascript because javascript is Versatile.";
const matches3 = str3.match(/\b[A-Z][a-z]*\b/g);
console.log(matches3);

const str4 = "The event is on 2023-08-03 and the code is 12345.";
const matches4 = str4.match(/\d+/g);
console.log(matches4);

console.log("- Activity 3");
const str5 = "My phone number is (123) 456-7890.";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = str5.match(regex5);
console.log(matches5);

const str6 = "Contact me at nisarg6504@gmail.com.";
const regex6 = /([a-zA-Z0-9._]+)@([a-zA-Z0-9.]+\.[a-zA-Z]{2,})/;
const matches6 = str6.match(regex6);
console.log(matches6);

console.log("- Activity 4");
const str7 = "Hello world. Hello everyone.";
const regex7 = /^\w+/;
const matches7 = str7.match(regex7);
console.log(matches7);

const str8 = "This is the end of the sentence";
const regex8 = /\w+$/;
const matches8 = str8.match(regex8);
console.log(matches8);

console.log("- Activity 5");
const password = "Password123!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const isValidPassword = regex9.test(password);
console.log(isValidPassword);

const url = "https://www.example.com";
const regex10 =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]{1,63}\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9._~:\/?#\[\]@!$&'()*+,;=%-]*)?$/;
const isValidURL = regex10.test(url);
console.log(isValidURL);
