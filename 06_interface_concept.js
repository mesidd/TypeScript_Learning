export {}

// interface

interface Person { 
  firstName : string,
  lastName : string
}

function fullName ( person: Person)  {
  return `${person.firstName} ${person.lastName}`
}
