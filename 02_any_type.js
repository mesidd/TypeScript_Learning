export {}
// any data type
// all property valid
let myVariable : any = 10;
myVariable.toLowercase();
myVariable.toString();
myVariable.length;

// unknown data type 
// require type casting
let newVariable : unknown = 'ram';

// newVariable.toLowercase(); // Error 
(newVariable as string).toLowerCase();

// newVariable + 10
(newVariable as number) + 10;

// *** array as []
// (newVariable as Array).length // wrong
(newVariable as []).length
