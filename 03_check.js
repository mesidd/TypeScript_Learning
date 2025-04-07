export {}

let myVariable : unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return ( !!obj && typeof obj === 'number'  )
}

if (hasName(myVariable)) {
  console.log(myVariable) // 10
}


