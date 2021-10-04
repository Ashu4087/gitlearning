//operators

//___x___ | compare operator|  --->  Number
//x --> string / true/false

// == converts x to number
console.log(`"02" is converted to 2 : ${"02" == 2} `); //"02" is converted to 2 number
console.log("" == 0); // "" is converted to 0 number
console.log("false is converted to 0 : " + (false == 0)); // false is converted to  0 number

//but don't apply to these two
console.log(null == 0); 
console.log(undefined == 0);
console.log("this is the exception null == undefined : " + (null == undefined));

 //>= , <= , > , < converts null to 0 and undefined to NaN
console.log(null >= undefined) // false
console.log("null to 0 by >= / <= :" + (null >= 0)); //>converts null to 0



//if(special character) ->false
//special charactes are : 0 , null , "" , undefined , Nan.