// การแสดงผล 
console.log('Hello world! from js');
console.log('Tum', 43)

// Data Type 

//Sring
console.log('This is a string with single quote and you can use double quote to make a string');
console.log("This is a string with double quote and you can use single quote to make a string");
console.log(`This is a string with backtick and you can use single quote and double quote to make a string`);

// number
console.log(567);
console.log(3.14);
console.log(4*5 + 3/1 - 1);

//Boolean
console.log(true || false);
console.log(true && false);
console.log('This is negative',!true);
console.log(1 ==1);  // true
console.log(1 === '1'); // false 

//Null and Undefined
console.log(null); // Null value 
console.log(undefined); // Undefined value 

// object and Array 
console.log({ name: 'Tum', age: 40, Address: 'Suphanburi'})
console.log([1,2,3,4,5,6]);

// Variable let const and var 
// let username;
// username = 'Tum'     
// console.log('username: ', username);
// console.log('username: ', username);  // alt+shift + down arrow, copy the line and paste it below

const Pi = 3.14;   // const is a constant value (ค่าคงที่) 
console.log('Pi:' , Pi); // programer must create name in uppercase letter in first character 

var age = 40; // var is a global variable

//variable naming   caseSensitive 

let myName = 'Sutthikorn' // camelCase
let my_name = 'tum'; //snake_case 
let MyName = 'title'; // PasCal_case


// String 
let username = 'Sitthikorn';
let firstName = "tum";
let lastName = "Mangkala";

console.log("Username: " + username + "  " + lastName + " " + "Welcome!!");


// number 
console.log(10 + '50');

//typeof check type of variable

console.log(typeof '50');
console.log(typeof 50);

// Function  use กริยา
/*Syntac
    function name(param1, param2, ..) {
    }
*/

// function greet() {
//     console.log('Hello great');
//    }  

const greet = () => { 
    console.log('Hello great with arrow function')
}
greet()

// function greet2(massage, username = 'Guess') {
//     console.log('Hello' + massage + + username)
// }

const greet2 = (massage, username = 'Guess') =>{
    console.log('Hello' + massage + username);
}

greet2('  From greet2', ' tumtum',)


// return
// function sumNumber(num1, num2 ){
//     return num1 + num2 
// } 

const sumNumber = (number1, number2)=> {
    return number1+number2
}

const  result =  sumNumber(10,20)
console.log(`This value of 10 + 20 =  ${result}`)

// arrow function 

/* Syntax 
() => {
 }
*/
const greet3 =() => {  console.log('Hello arraow function '); } 
greet3()

const greet4= ()=>  5+5;
console.log(greet4())

// Callback function ฟังก์ชัน 
// เขาจะทำงานของฟังกชันเขาเอง แล้วจะเรียกใช้งานฟังก์ชันที่นำเข้ามา  จึงต้องมี calback() ก่อนจบ }

const greeting = (msg) => {
    console.log('Hello function 1234', msg);
}

const sayHi = (massage, cb) => {
    console.log('Say hi', massage)
    const msg = `Say hi ${massage}`
    cb(msg)  // รับมาก็ต้องส่งออก
}

sayHi('Jukkru',greeting);


//object   namaeObject = {key : value } 

const userData = { 
    firstname: 'Sitthikorn',
    lastName: 'Mangkala',
    age:32,
    "nick name": 'tum',
    address: {
        no: 24,
        province: 'suphan'
    },
    greeting7() { 
        console.log('function form object');
        
    }
}
console.log(userData.firstname);
console.log(userData.age);
console.log(userData["nick name"]);
console.log(userData.address.province);
// userData.greeting7()

//Array [element1, element2, ]
const fruit = [ 'Apple', 'Banana', 'Mango', ]
console.log(fruit[2]);

// Array Method   
// arr.map((value:number, index:number, array:number[])=>{ })  function create new array 

// เขาบอกว่า จะใช้กับ _database 

const arr = [1,2,3,4,5];
const resultName = arr.map((item, index) => {
    return item*2
    // code body 
    console.log(item);
    // console.log(index);
    // console.log(arr);
})
console.log(resultName);

const resultFilter = arr.filter( (element, index )=> {
    return element > 4




})
console.log(resultFilter);

/*
if (condition ) { 
    true
} 
*/
const password = undefined  
if(password) { 
    console.log('Hello True ');    
}else if(!password) {
// true
    console.log('Hello False');
    
}else { 
    console.log('This is else ');
    
}

// ternary   รูปแบบย่อของ if-else เขาบบอกพบบ่อยใน react 
const role = 'superadmin'
const redirect = role == 'admin' ? '/Admin' : '/User';
console.log(redirect);

// กรณีมีมากกว่า 1 เงื่อนไข 
const redirect2 = role == 'admin' 
? '/admin' 
: role =='superadmin'
? 'superuser'
:'/user' 

console.log(redirect2);


//Destructuring 

array2 = [1,2,3,4,'tum']
console.log(array2[4]);
// const array  มารับค่า 
const [findex, seindex, ,,name] = array2
console.log(findex);
console.log(name);



const objectEx = { 
    nickname: 'tum', 
    firstName: 'Sitthikorn',
    lastname: 'Mangkala'
}

console.log(objectEx.lastname);  //name ต้องตรงกัน ไม่มีเหมือน array 
const {nickname,firstname, lastname} = objectEx
console.log(lastname);


// find first Trusty value

const address2 = '' || NaN ||  false || 1 ;
console.log(address2);

// find first False value 

const address3 = true && 1  && 'tum' && 0 ;
console.log(address3);


// nullis: ??  if undefined or null  else statement after ?? 

const isrole = null
const isadmin = isrole  ?? 'Hello admin'

console.log(isadmin);

// optional 
const tum = {}
console.log(tum?.address?.province);  

// spread array 
const arr3 = [1,2,3,4,5,6]
const arr4 = [7,8,9]
const mergeArr = [...arr3, ...arr4]
console.log(mergeArr);
