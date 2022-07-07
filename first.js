/*
console.log("Hello World !!!")

let user = "Raja"
console.log(user)
let userage = 25
console.log(userage)

*/

/*

---------------------------CONSTANT--------------
let r = 5
const PI = 3.14
let area = PI * r * r
console.log(area)

*/



/*

let a
console.log(typeof a)

console.log(typeof (5<6))

console.log(typeof {})

console.log(5/"ab")
console.log(typeof (5/"ab"))
console.log(Number("123 Raja"))
console.log(typeof NaN)

console.log(null,typeof null)

console.log('abc',":", typeof 'abc')

console.log("xyz",":", typeof "xyz")

console.log(1234,":",typeof 1234)

console.log(1234.56,":",typeof 1234.56)

console.log(1222323243546765764746768678567546345245252521n) // bigint
console.log(typeof 1222323243546765764746768678567546345245252521n)

console.log(0xf) // hexadecinal number of 15
console.log(0xf,":",typeof 0xf)

console.log(1.5e12) // exponential number
console.log(typeof 1.5e12)

console.log(100_00_000)
console.log(typeof 100_00_000)

console.log(5/0)
console.log(typeof 5/0)

console.log(-5/0)
console.log(typeof -5/0)

*/

/*
console.log(Number)
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NaN)
console.log(Number.EPSILON)
*/

// BIGINT ADDITION
// console.log(1222323243546765764746768678567546345245252521n + 10n)

//---------------------STRINGS-------------------------------------
/*

let myName = "Raja Kumar \"Prasad\""
console.log(myName)

let myFirstName = "Raja"
let myMiddleName = "Kumar"
let myLastName = "Prasad"

let myfullName = myFirstName + " " + myMiddleName + " " + myLastName

console.log(myfullName)

let myName1 = "Raja \nKumar \nPrasad"
console.log(myName1)

let myName2 = "Raja \tKumar \tPrasad"
console.log(myName2)

let myName3 = "Raja \nKumar \tPrasad"
console.log(myName3)

let myName4 = "Raja \vKumar \vPrasad"
console.log(myName4)

let myName5 = "Rajaa\b Kumar Prasad"
console.log(myName5)

*/

//console.log(5<6)   // true
 
 //-----------------------------------FIRST EXCEPTION-----------------------------
 
 //console.log(typeof 5<6)  // should give 'boolean' as result but showing 'false'

 //console.log(5/"ab")        // NaN = Not a Number
//console.log(typeof (5/"ab")) // But the type is Number

//--------------------TYPE CASTING -----------------------

/*
let num = 110059
console.log(num,":",typeof num);
num = String(num)    // typecasting from number to String
console.log(num,":",typeof num);

let id = "1223"
console.log(id,":",typeof id)
id = Number(id)
console.log(id,":",typeof id)
*/

/*
console.log(Number(true))       // true = 1
console.log(Number(false))      // false = 0
*/

/*
let y
console.log(Boolean(y))         // Undefined is always False
console.log(Boolean(0))         // Zero is always FALSE
console.log(Boolean(null))      // NULL is Always False
console.log(Boolean(NaN))       // Nan is Always FAlse
console.log(Boolean(''),Boolean(""),Boolean(``))    // ALL EMPTY STRING ARE FALSE
*/

/*
console.log(Boolean(7))         // Positive Non-Zero is always TRUE
console.log(Boolean(-17))       // Negative Non-Zero is always TRUE
console.log(Boolean('abc'))     // Strings are Always True
console.log(Boolean("abc"))     // Strings are Always True
let z = -5/0
console.log(Boolean(z))         // Positive and Negative Infintes are also True
*/

/*

let a
console.log(Object(a))
console.log(Object(true))
console.log(Object(false))
console.log(Object(1))
console.log(Object(-17))
console.log(Object("abc"))
console.log(Object('xyz'))
console.log(Object(5/0))
console.log(Object(5/'abc'))

*/

//        ----------------COERSION---------------------

/*
let x
console.log(x,":",typeof x);
x = 8
console.log(x,":",typeof x);
x = x+""                        // number + string = String
console.log(x,":",typeof x);
x = x+2                         // String + Number = Concatnated String
console.log(x,":",typeof x);        
x = x-2                         // String - number = Number
console.log(x,":",typeof x);

console.log("\n\n")

x=x+''                          // number + string = String
console.log(x,":",typeof x);
x = +x + 3                      // uniry sign with String + number = Number
console.log(x,":",typeof x);

x = !x                          // Negation o f Number = Boolean
console.log(x,":",typeof x); 

*/

//------------------------PARSING---------------------

/*
let x = "123 Raja"
console.log(parseInt(x))        // Prasing just start if first character is Number and till last continuous Number character

let y = "123 Raja 678"
console.log(parseInt(y))        // so ONLY FIRST continuous sequence of numbers are parsed

let z = "12.23abcd"
console.log(parseFloat(z))

let z1 = "12.23abcd12.11"
console.log(parseFloat(z1))
*/
//---------------------------------------------------------------------------

/*
console.log(5**3)       // ** means raised power to
console.log(true+true)
console.log(2*true-10)
*/


//--------------------------MATH FUNCTION-----------------------------------

/*
console.log("Cube of 5 by pow function : ",Math.pow(5,3));
console.log("Cube Root of 125 : ",Math.cbrt(125))
console.log("Square Root of 121 is : ",Math.sqrt(121));
console.log(Math.ceil(12.27),Math.floor(12.27))
console.log(Math.abs(-123.56))
console.log(Math.round(12.47),Math.round(12.67))
console.log(Math.max(12,14),Math.min(12,14))
console.log(Math.random())

console.log()

console.log(Math.PI)
console.log(Math.LN10)
console.log(Math.LN2)
console.log(Math.LOG10E)
console.log(Math.LOG2E)
console.log(Math.E)
console.log(Math.SQRT1_2)
console.log(Math.SQRT2)

console.log()

console.log(Math.exp(2))
console.log(Math.expm1(2))
console.log(Math.fround(123.456))


console.log("Sin 90 value : ",Math.sin(90))
console.log("Cos 0 value :  ",Math.cos(0))
console.log("log 2 value :  ",Math.log(2))
console.log("log10 of 5 is :  ",Math.log10(5))
console.log("log2 of 5 is :  ",Math.log2(5))
*/

/*

let x = "Pen"
let y = "Pencil"

console.log(x > y)      // ASCII value of each Character get Compared
console.log(x < y)

console.log("2">3)      // automatic conversion of string to number takes place
console.log("2"<3)

console.log(5==5);
console.log("97" == 97);        // Not Recommended as COERSION make it bad
console.log("97" === 97);       // RECOMMENDED IN JS

*/

// -------------if-else if-else statements---------------------------

// let x = 5, y = 6, z = 7;            // Multiple variable initialisation

/*
if((x>y) && (x>z)){
    console.log(x," is Greater than ",y," and ",z);
    console.log("Yeee");
}
else if(y>z){
    console.log(y," is greater then ",x," and ",z);
    console.log("Naaaaiiiiicccceee");
}
else{
    console.log(z," is Greater than ",x," and ",y);
    console.log("Whoooooooo");
}
*/

//--------------ternary operator-----------------

// let num = 8


/*
let res = ((num % 2 === 0)?"Number is Even":"Number is Odd");
console.log(res)
*/

// console.log(((num % 2 === 0)?"Number is Even":"Number is Odd"));

//      *              *                *              *

/*
let x = 5, y = 6, z = 7;            // Multiple variable initialisation
let greatest = ((x>y) && (x>z)) ? x : ( (y>z) ? y : z) // Nested Ternary Operator
console.log(greatest);
*/

// ---------------SWITCH-CASE-BREAK-DEFAULT----------------------------------------

/*

let day = "Holiday";

switch(day){
    
    case 'Monday':
    case 'Thursday':
        console.log("Egg-Day");
        break;
    case 'Tuesday':
    case 'Friday':
        console.log("Veg-Day");
        break;
    case 'Wednesday':
    case 'Saturday':
    case 'Sunday':
        console.log("Non-Veg Day");
        break;
    default:
        console.log("Cricket Match")    
}

*/
//------------------------ Template (BACKTICK) ---------------------------

/*

let num1 =112
let num2 = 15
let result = num1 + num2

console.log(`The addition of ${num1} and ${num2} is ${result}.`)
console.log(`this is 
very good as in backtic 
anything which is written in any manner
shows as it is.`);

*/

//------------------------LOOPS------------------------------

/*
let i = 1;

while(i<=10){
    console.log(i*2);
    i++;
}
*/
//-----------------------------
/*
let i = 10;
do{
    console.log(i*2);
    i--;
}while(i>=1)
*/
//-------------------------------
/*
let x = 1;
for(;x<=10;){
    console.log(x*3);
    x++;
}
*/
//-------------------------------
/*
for(let i=1;i<=10;i++){
    console.log(i*5)
}
*/
//-------------------------------
//---------INFINITE LOOP-----------

/*
let i = 1;
for(;;)
{
    console.log(i);
    i++;
}
*/
//-----------------------------
/*
let str = ""
for(let i=1;i<5;i++){
    for(let j=1;j<=i;j++){
        str = str+ "*";
    }
    str = str + "\n"
}
console.log(str);
*/
//***********************
/*
let str = ""
for(let i=1;i<5;i++){
    for(let j=i;j<5;j++){
        str = str+ "*";
    }
    str = str + "\n"
}
console.log(str);
*/
//************************ 

/*
let str = "";
let n = 5;
for(let i = 0;i< n;i++){
    for(let j=0;j< n;j++){
        if(i===0 || i === n-1){
            str+="*";
        }
        else{
            if(j===0 || j=== n-1){
                str+="*"
            }
            else{
                str+=" "
            }
        }
    }
    str+="\n"
}
console.log(str)

*/
//************************************
/*

let n = 5;
let str = "";

for(let i = 1;i<=n;i++){
    for(let j = 1; j<= n-i; j++){
        str+=" ";
    }
    for(let k=0;k<2*i-1;k++){
        str+="*"
    }
    str+="\n"
}
console.log(str);

*/
//*************************** 

/*
let n = 5;
let str = "";

for(let i = 0;i<n;i++){
    for(let j = 0; j< i; j++){
        str+=" ";
    }
    for(let k=0;k<2*(n-i)-1;k++){
        str+="*"
    }
    str+="\n"
}
console.log(str);

*/

//-------------------------- OBJECT (KEY_VALUE PAIR) ----------------------------------
/*

let inp = 'name'

let obj1 = {
    name: 'Raja',
    age:25
}

console.log(obj1.inp)
console.log(obj1[inp])

console.log();

console.log(obj1.name)
console.log(obj1.age)

console.log("\n",obj1,"\n")

console.log(obj1['age'])
console.log(obj1['name'])

*/

/*
let obj = {
    name : 'Raju',
    tech : 'JS',
    age : 25,
    laptop : {
        cpu : 'i5',
        ram : 6,
        brand : 'lenevo'
    }
}


console.log(obj.laptop);
console.log(obj.name,"\t",obj.laptop.brand);
console.log(obj.laptop.brand.length);

console.log("\n\n");

console.log(obj);
console.log("\n\n");


delete obj.age;
console.log(obj);

console.log("\n\n");

delete obj.laptop.cpu;
console.log(obj);
console.log("\n\n");

console.log("\n\n");
delete obj.laptop;
console.log(obj);

*/

//----------------------FOR-IN LOOP----------------------------


/*
let obj = {
    name : 'Raju',
    tech : 'JS',
    age : 25,
    laptop : {
        cpu : 'i5',
        ram : 6,
        brand : 'lenevo'
    }
}

// for(let i in obj){
//     console.log(i,obj[i]);
// }

for(let j in obj.laptop){
    console.log(j,obj.laptop[j]);
}

*/
//--------------------- FUNCTIONS -----------------------------------
/*
function greet()                    // function definition
{
    console.log("Hello All");       // function body content
}

greet();                            // function call

*/
//************************************************************ 

/*
function greet()                    // function definition
{
    return "Hello All";       // function body content
}

let str = greet();                            // function call
console.log(str);
*/

//************************************************************

/*
function greet(u)
{
    return `Hello ${u}`;       // function body content
}

let user = 'Raja'
let str = greet(user);                            // function call
console.log(str);

*/

//**************** FUNCTION AS EXPRESSION *******************

//---------ANONYMOUS FUNCTION AS EXPRESSION---FUNCTION AS AN OBJECT----------
/*
let add = function(num1,num2){
    return num1+num2;
}
console.log(add(5,7));
*/
//-------------------------------------------
// let add = function(num1,num2,num3){
//     console.log(num1,num2,num3);
//     return num1+num2+num3;
// }
// console.log(add(5,7));
//----------------------------------------------------
// let add = function(num1,num2,num3 = 5){
//     console.log(num1,num2,num3);
//     return num1+num2+num3;
// }
// console.log(add(5,7));
//--------------------------------------------------------
// let add = function(num1,num2,num3 = 5){
//     console.log(num1,num2,num3);
//     return num1+num2+num3;
// }
// console.log(add(5,7,10));

//************* ARROW FUNCTION ************

// let greet = () => {
//    console.log("Hello All");
//    return 0;
// }
// console.log(greet());

// let greet = (nm) => {
//     console.log("Hello "+ nm);
//     return 0;
//  }
//  console.log(greet('Raja'));

// let add = (num1,num2) => { return num1+num2 }
// console.log(add(10,20));

// let add = (num1,num2) => num1+num2
// console.log(add(10,30));

//***************** METHOD IN JAVASCRIPT **************
/*
let person = {
    name : 'Raja',
    age : 25,
    sport : (game) => {return `${person.name} likes ${game}`}   // functopn inside object
}

let str = person.sport('Cricket');
console.log(str);
*/
//******************** THIS KEYWORD **********

/*
let person = {
    name : 'Raja',
    age : 25,
    sport : function() {console.log(this.name+" is "+this.age+" years old.");}   // functopn inside object
}
person.sport();
*/

//--------------******************-----------------------

/*
let person1 = {
    name : 'Raja',
    age : 25,
    elder : function(other) {
        if(this.age > other.age)
            console.log("Raja is Elder.");
        else
            console.log(`${other.name} is Elder.`);
    }   
}
let person2 = {
    name : 'Raju',
    age : 28
}

person1.elder(person2)

*/

//--------------- CONSTRUCTOR FUNCTION -----------------------------------

/*

function Person(name,age){              // constructor function
    this.naam  = name;
    this.aayu = age;
    this.work = function(){console.log("Learning JAVASCRIPT.");}
}

// let person1 = new Person('Raja',25);        // creation and initialization of CF
// console.log(person1);

// console.log("\n\n");

let person2 = new Person('Raju',24);
console.log(person2);

// console.log(person1.work());
person2.work();

*/

//------------------------- ARRAYS ---------------------------------------




