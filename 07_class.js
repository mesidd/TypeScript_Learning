export {}

class Employee {

  private : uid : string; // Not Accessible
  employeeName : string;
  constructor(name: string, uid: string) {
    this.employeeName = name
    this.uid = uid
  }
  
  greet(){
    console.log(`Good Morning ${this.employeeName}`)
  }
}

const p1 = new Employee("Ramesh","zI12")
p1.greet()

// 
class Manager extends Employee{
  constructor(managerName: string){
    super(managerName)
  }
  delegateWork(){
    console.log(`Manager Delegating Task`);
  }
}
const m1 = new Manager("Hritik")
m1.delegateWork()
