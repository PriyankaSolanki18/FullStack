// FACTORY FUNCTION :-
// function personMaker(name, age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hi my name is ${this.name}`);
//         },
//     };
//     return person;
// }


//CONSTRUCTORS :- doesn't return anything & start with capital letter
// function Person(name, age) {
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi my name is ${this.name}`);
// };

// let p1=new Person("adam",31);
// let p2=new Person("eve",42);


//Classes :-
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk () {
//         console.log(`Hi ${this.name}`);
//     }
// }

// let p1=new Person("adam",31);
// let p2=new Person("eve",42);


//Inheritance
class Person{
    constructor(name,age){
        console.log("Person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,age,marks) {
        console.log("Student class constructor");
        super(name,age); // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name,age,subject){
        console.log("Teacher class constructor");
         super(name,age); // parent class constructor is being called
        this.subject = subject;
    }
}
