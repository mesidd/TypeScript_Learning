export {}

// interface
interface Person { 
  firstName : string,
  lastName : string
}

function fullName ( person: Person)  {
  return `${person.firstName} ${person.lastName}`
}

interface Employee {
  firstName : string,
  lastName? : string,
  position : string,
  salary : number
}

function Details ( person : Employee ){
  return `Name : ${person.firstName} ${person.lastName}
  \nPosition : ${person.position}
  \nSalary: ${person.salary}`
}

const obj = {
  firstName : "Ramesh",
  // lastName : "Roy",
  position : "Software Developer",
  salary: 240000
}

console.log(Details(obj))
