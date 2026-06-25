"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Write a function getAverage(student: Student): number
Returns the average of the student's grades
*/
function avgGrades(student) {
    let sum = 0;
    for (let grade of student.grades) {
        sum += grade;
    }
    let avg = sum / student.grades.length;
    return avg;
}
const student = {
    name: "vivek",
    age: 24,
    grades: [50, 70, 80, 90, 75],
};
let averageScore = avgGrades(student);
console.log(averageScore, "Student Average Score");
/*
Write a function getStatus(average: number): string
Returns "Pass" if average ≥ 50, else "Fail"
*/
function getStatus(average) {
    if (average >= 50) {
        return "Pass";
    }
    else {
        return "Fail";
    }
}
console.log(getStatus(averageScore));
/*
Write a function printReport(student: Student): void

Prints a report like:

Student: Alice
Average: 78.33
Status: Pass
*/
//void means there is no return value from the funciton
function printReport(student) {
    const avg = avgGrades(student);
    const status = getStatus(avg);
    console.log("Student:", student.name);
    console.log("Average:", avg.toFixed(2));
    console.log("Status:", status);
}
printReport(student);
//5. Create an array of at least 3 students and print a report for each.
const students = [
    { name: "nitesh", age: 27, grades: [80, 75, 80] },
    { name: "Divyansh", age: 26, grades: [40, 35, 45] },
    { name: "abhi", age: 24, grades: [90, 85, 95] },
];
function printEachStudentReport(arr) {
    for (let student of arr) {
        printReport(student);
    }
}
// printEachStudentReport(students);
/*
2nd set of QUESTIONS
*/
/*
1. Basic Types
Declare variables for a username (string), age (number), isLoggedIn (boolean), and a tags array of strings. Assign sample values to each.
*/
let name = "vivek";
let age = 24;
let isLoggedIn = false;
let tags = ["js", "react", "nodejs"];
/*
2. Function Types
Write a function multiply(a: number, b: number): number that returns the product. Then write another function greet(name: string, greeting?: string): string where greeting defaults to "Hello".
*/
function multiply(a, b) {
    let product = a * b;
    return product;
}
console.log(multiply(5, 5));
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}`;
}
console.log(greet("vivek", "Hola"));
/*
4. Classes
Create a class BankAccount with:

Private property balance: number
Constructor that sets initial balance
Methods: deposit(amount), withdraw(amount), getBalance()
withdraw should throw an error if funds are insufficient

*/
class BankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amt) {
        this.balance += amt;
    }
    withdraw(amt) {
        if (amt > this.balance) {
            throw new Error("Insufficient Funds");
        }
        this.balance -= amt;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(5000);
account.deposit(500);
const balance = account.getBalance();
console.log(balance);
account.withdraw(7000);
//# sourceMappingURL=MyTasks.js.map