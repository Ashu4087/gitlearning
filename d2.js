/*d2 task
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

'use strict' ;
//let is use to define a variable

let admin , name = 'john'; //assigining value to variable while decalring
admin  = name; //copy value of one variable to other
console.log(admin);// console.log()method is use to print the message inside it to the standerd output or satndard error with new line,
// log is use to print the stdout..

//data type 
//in js variable is not bound to any data types
let num = 13248892;
console.log(num); 
console.log("%d" , num); // same as console.log( num);
console.log(typeof num);//number

num = 234.54;//variable can assign float , sting any data types.
console.log(num);
console.log(typeof num);//number

num = null; //null is a special value which mean 'nothing' or 'empty' or 'value unknown'
console.log(num);
console.log(typeof num);//object ? but it is special value ..."is the error"

num = 'javascript';
console.log(num);
console.log(typeof num);

let char; //there is nothing special for single character. like 'char' ion js
//here the char is undefined 
console.log(char);
console.log(typeof char);

num = 2223344556654433;//max to lowest of 16 digit is safe as the “number” type cannot represent integer
// values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.
console.log(num);
console.log(typeof num);

num = 893483458038402842084029482084203482094092834n;
console.log(num);
console.log(typeof num); // bigInt

let num1 = 544 , num2 = 34.43;
console.log(`adding two different data type number ${num1 + num2}`);//automatic type casted is done.

//typeof

console.log(typeof math);
console.log(typeof alert);


