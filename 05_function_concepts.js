export {}
// return type and optional : Important
// num3 is optional & return type is number 
// optional should be last parameter

function multiply (num1 : number, num2: number, num3? : number): number{
  return num1 * num2 * ( num3 || 3 )
}
console.log(multiply( 4, 3 ))


// value passed
function multiply (num1 : number, num2: number, num3 : number = 10 ): number{
  return num1 * num2 * ( num3 || 3 )
}
console.log(multiply( 4, 3 ))
