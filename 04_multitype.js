// multitype posssible
let multiType : number | boolean;

multiType = 70;
multiType = true;
console.log(multiType);


// anyType
let anyType : any;
anyType = 10;
anyType = true;


// function declaration with type
function add(num1 : number, num2 : number){ // 'number' wrong : number right
  return num1 + num2 
}
console.log(add(5,4));

// Behave abnormal
function subtract( num1 , num2 ){ // without type declaration
  return num1 - num2
}

console.log(subtract(5,'4')); // 1
