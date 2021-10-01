//use debugger
//add function add two given number..
function add(n,m){ // input parameters are n and m
    
    console.log('inside call function');
    const sum = m+n;
    print(sum); //print function is called
    console.log('after calling print function');
}

function print(sum){

    console.log("sum of two number is: "+ sum); // printig the sum
    console.log("inside print");

}

console.log('basic of debbuging ');
let val1 = 4 , val2 = 5; //two variable is declared and initialized
add(val1 , val2);

