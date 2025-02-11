function getName(name){
    return name;
}



let a = false;
let b = true;

console.log(a || getName("tum"))

//Template literals
let name1 = "john";
let name2 = "doe";
console.log("Hello " + name1 + " " + name2)
console.log(`Hello ${name1} ${name2}`)

//Terinary operator

const showRecipeOne = false;

function getRecipeOneName(recipeName){

    return recipeName
}

function getRecipeTwoName(recipeName){

    return recipeName
}   

if(showRecipeOne){
    console.log(getRecipeOneName("Dota"))
}else{  
    console.log(getRecipeTwoName("Pizza"))
}

// condition ? statement1 : statement2 

showRecipeOne 
? console.log(getRecipeOneName("Pasta")) 
: console.log(getRecipeTwoName("Pizza")) 

const id = 1;
const productName = "product Apple watch";
const rating = 5;

const product = {
    id,  //id: id  //key and value are the same
    productName, //productName: productName //key and value are the same
    rating //rating: rating //key and value are the same
}


console.log(product);

const product2 = {
    description: "product 2 description",
    id,
    productName,
    rating
}

// const getProductTwoDescription = product2.description;

// console.log(getProductTwoDescription)

const {description} = product2

console.log(description);

const array = [1,2,3,4];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue, getArraySecondValue);

const [
    getArrayFirstelement, 
    getArraySecondelement ,
    getArrarThirdelement
    ] = array;

console.log(getArrayFirstelement, getArraySecondelement, getArrarThirdelement);   

// default parameter, spread and rest operator,


function mulofTwoNumbers(num1 = 1, num2 = 2){
    console.log("first number: " +num1 +"  Second Number: " + num2);
    return num1 * num2;
}

console.log(mulofTwoNumbers(10,20));
console.log(mulofTwoNumbers(10));


const array2 = [2,3,4];
const array3 = [10,11,12];
console.log( [999,...array2,...array3, 1000]);   //spread operator

function gotInfo(a,b, ...c){
    console.log(a,b,c);


    return 'Sitthikorn'
}

console.log(gotInfo(1,2,3,4,5)); //spread operator

// map, filter, find, some, every, includes, indexOf, findIndex, reduce

const presonsArray = [
    {
    name: "Person 1",
    age: 20,
    country: "USA"
    },
    {
    name: "Person 2",
    age: 30,   
    country2: "UK"
    },
    {
    name: "Person 3",
    age: 40,
    country: "TH"
    },
];

let getAllname = presonsArray.map((singlePerson, index) => {
    console.log(singlePerson, index);
        return `${singlePerson.name} age: ${singlePerson.age} country: ${singlePerson.country}`
}    
)

console.log(getAllname);


let getPersonFromUsa = presonsArray.find((singlePerson, index) => { 
    return singlePerson.country === "TH"
})

console.log(getPersonFromUsa);

let getAllpersonFromUsa = presonsArray.filter((singlePerson, index) => {
    return singlePerson.country === "TH"
})

console.log(getAllpersonFromUsa);

let checkSomeArrayMethodWithExample = presonsArray.some((singlePerson, index) => {
    return singlePerson.age > 30;
});

console.log(checkSomeArrayMethodWithExample);  

let checkEveryArrayMethodWithExample = presonsArray.every((singlePerson, index) => {
    return singlePerson.age > 10;
}); 

console.log(checkEveryArrayMethodWithExample);  

const fruitsArray = ["apple", "banana", "orange", "grape"];

console.log(fruitsArray.includes("tum"), fruitsArray.indexOf("apple"), fruitsArray.indexOf("tum"));


let getIndexOfPersonWhoIsFromThailand = presonsArray.findIndex((singlePerson, index) => {
    return singlePerson.country === "USA";
})

console.log(getIndexOfPersonWhoIsFromThailand);

let getListOfProductElement = document.querySelector(".list-of-products");

function renderProducts(getProducts) {
    getListOfProductElement.innerHTML = getProducts
    .map((singleProductItem) => `<p>${singleProductItem.title}</p>`)
    .join(" ");
}



async function fetchListOfProducts(){    
    try{
        const apiResponse = await fetch("https://dummyjson.com/products", {
    method: "GET",
    });

    const result = await apiResponse.json();

    console.log(result);

    if(result?.product?.length > 0) renderProducts(result?.products);
    }catch(e){
        console.log(e);
    }
}


fetchListOfProducts();