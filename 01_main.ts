export {}
let message = 'Welcome world'
console.log(message);

let isBeginner: boolean = true;
let name: string = "Sid Roy";

let salary: number = 200000
// place = 'Miami'
let bio: string = `Hey my name is ${name} I earn $${salary} 
Am i a beginner - ${isBeginner}`

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null; // wrong
// let myName: string = undefined;  // wrong

console.log(bio)

let person1: [string, number] = ['Chris', 23];

enum color { a = 'Red', b = 'Green' , c = 'Blue' };

let e : color = color.a;
let d : color = color.b;
let c : color = color.c;

console.log(person1)

console.log(e,d,c)

let randomValue : any = 10
randomValue = true;
randomValue = 'mesidd'
console.log(randomValue)
