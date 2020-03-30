// Import stylesheets
import './style.css';

// Write TypeScript code!
class Student implements Person {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class Teacher implements Person {
    fullName: string;
    salary: number;
    constructor(public firstName: string, public middleInitial: string, public lastName: string, public department:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
        setSalary(salaryIn:number) {
                this.salary = salaryIn;
        }
        getSalary():number {
                return this.salary;
        }
        giveRaise(increasePercent:number) {
                this.salary = this.salary * (increasePercent/100+1);
        }
} 

interface Person {
    firstName: string;
    lastName: string;
}


function greeter(person: Person ) {
    return "Hello, " + person.firstName + " " + person.lastName;}
function greeterTeacher (person: Teacher  ) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.getSalary() + " " + person.department;
}

let jane:Student  = new Student("Jane", "M", "Student");
let jerald:Teacher = new Teacher( "Jearald","J", "Jaralski", "Mathematics");
jerald.setSalary(50000);
jerald.giveRaise(25);


//document.body.textContent = greeter(jane);

//document.body.textContent = greeterTeacher(jerald);  



const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = "<h1>" + greeterTeacher(jerald) +"</h1>";