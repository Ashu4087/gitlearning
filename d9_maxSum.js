//find the maxsum subarray if all items are negative the sum will be negative
'use strict' ;
import * as fs from 'fs' ;

//import readline from readlinesync
//
let sum = (inArray)=>{
    console.log(inArray);
    let maxsum=0 ,cmax=0; 
   
    //map and reduce...
    for (let ind = 0; ind < inArray.length ; ind++){
        //console.log(inArray[ind]);
        cmax += inArray[ind];
        if(cmax < 0){cmax = 0;}
        maxsum = Math.max( maxsum , cmax );
        //console.log("cmax",cmax,"maxsum" , maxsum);
        
    }
    //console.log("inside sum fun",maxsum);
    return maxsum;

}

let directCall = ()=>{
    let arr = [-3 ,-4 ,-1,-5];
    return sum(arr);
}


console.log(`the maximum sum of subarray using directcall is :`,directCall());




//how to take the input from console ...
//or i can read from ..


/* #M1
read from console using readline

const readLine = require('readline-sync');

//now i can use methods of readline-sync using readLine 

consoleRead()=>{
    let size = Number(readLine.question('Enter the size of array,'));
    let numArray = [];
    for (let in = 0; in<size ; i++){
        numArray.push(Number(readLine.question()));
    }
    console.log(`the maximum sum of subarray is :`,sum(numArray));
}

*/


 //#M2
    //reading from json file..
    //readfile()=> {

        let read = fs.readFile("./arrayData.json" , 'utf-8' ,(err , stringData)=>{
            if(err){return console.log(err)};
    
            try{
                const jsObj = JSON.parse(stringData);
                console.log(typeof (jsObj.data));
                //let arr = jsObj.data;
                console.log(jsObj.data);
                console.log(`the maximum sum of subarray using fileRead is:`,sum(jsObj.data));
            }catch(err){
                console.log("Bad parsing :",err);
            }
    
        });
   // }
 

   /*

    const readLine = require('readline-sync');
    console.log("Press 1  for default \n press 2 to choose cmd input \n Press 3 to read from file");

    let option = Number(readLine.question('choose option to find max sum of array'));
    switch(option){
        case 1 : directCall();
            break;
        case 2:
            consoleRead();
            break;
        case 3:
            readfile();
            break;
        default:
            console.log("Press select the right option");

        
    }

*/

