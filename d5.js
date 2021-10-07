
/*

let obj ={
    name : "Bean" , 
    age : 50,
    "comedy is" : "his passion",
    //[level] : "most famous" ,
    1 : "first"
};

function getName() {return obj.name };
function getAge(){return obj.age};

function editobj(){
    obj.name = "Ninja";
    obj.age = 15;
    //obj.comedy is = "also passion"; //will not work
    obj["comedy is"] ="also his passion ";
    //obj.level : "dot also famous"; // syntax error
    //obj[level] : "also famous" ; // syntax error
    //obj.1 : "dot.second" ; 
    //obj["1"] : "second";
    //obj[1] : "is second";
}

let level = '20';

console.log(getName() +" " +getAge()) ;
editobj() ;
console.log(getName() + " " + getAge()) ;

for(let v in obj){
    console.log(v); // will print //the key : 1 , name, age, comedy is
    console.log(obj[v]);
}

//cloning of object

let obb  = {};
//#M1
console.log("cloning using for loop");
for(let i in obj){
    obb[i] = obj[i];
    console.log(i +" : " +obb[i]);
}
//#M2
console.log("cloning using Object.assign method");

//first delete / empty the obb object

Object.assign(obb , {}); 
console.log(obb); //is not working

//do using delete 

for(let i in obb){
    delete obb[i];
}

//lets check is it working?
console.log(obb); //worked fine now
//how to check the size of object ?
Object.assign(obb , obj);


//now print the property of the obb object 

for (let i in obb){
    console.log(i +" : " +obb[i]);
}

*/
let fun = function(a , b){
    //its body
    console.log("inside fun")
}

let func = fun ; //copy the fun to func
//but if we write let func  = fun() ; //with parantesis then finc has value retuned by the fun  
func(); // will work

console.log(fun);
let a = ()=>2+3 ;
console.log(a())