// ============================================================
// Exercise 2-3: JavaScript / TypeScript
// ============================================================

// --------------------------------------------------
// a. Complete the function
// --------------------------------------------------

function mysterious(...args: number[]): void {
  const out = args.reduce((acc, num) => acc + num * num, 0);
  console.log(out);
}

mysterious(1, 2, 3);

// --------------------------------------------------
// b. Modify the following code to have an output of "my age is 30"
//
// Constraints:
// - Can perform one modification per line of code
// - Cannot change the initial value of age
// - Cannot add new lines of code or remove a line of code
// --------------------------------------------------

let age: number = 25;
function updateAge() {
  age = age + 5;
}
updateAge();
console.log("my age is", age);

// --------------------------------------------------
// c. What is the output of the following code?
// --------------------------------------------------

interface Employee {
  firstname: string;
  age: number;
  lastName?: string;
  salary?: number;
}

const employee: Employee = { firstname: "farid", age: 23 };
employee.lastName = "Mohamed";
const newEmployee: Employee = { ...employee, age: 24, salary: 3000 };
console.log(newEmployee);

// Answer: farid, Mohamed, 24, 3000

// --------------------------------------------------
// d. What is the output of the following code?
// --------------------------------------------------

const output: string = false || [] ? "Invalid" : "Correct";
console.log("The Input Type is", output);

// Answer: The Input Type is Invalid

// --------------------------------------------------
// e. Write a function that takes two objects as arguments
//
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects (in any order) and correct the wrong property name
// Return the object which should have the properties 'a', 'b', 'c', 'd', and 'e'
//
// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
// Expect: { a: 1, b: 2, c: 3, e: 5, d: 4 }
//
// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
// Expect: { a: 5, b: 4, c: 3, e: 2, d: 1 }
// --------------------------------------------------

interface ObjX {
  a: number;
  b: number;
}

interface ObjY {
  c: number;
  b: number;
  e: number;
}

function myFunction(x: ObjX, y: ObjY) {
  let output = {
    a: x.a,
    b: x.b,
    c: y.c,
    e: y.e,
    d: y.b,
  };
  return output;
}

// --------------------------------------------------
// f. Write a TypeScript function that accepts a number as a parameter
//    and checks whether it is prime or not.
// --------------------------------------------------

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// --------------------------------------------------
// g. Write a TypeScript function that reverses a number.
//
// Example: x = 32243
// Expected Output: 34223
// --------------------------------------------------

function reverseNum(n: number): number {
  let output: number = 0;

  while (n > 0) {
    output *= 10;
    output += n % 10;
    n = Math.floor(n / 10);
  }
  return output;
}

// --------------------------------------------------
// h. Write a TypeScript function to get the first element of an array.
//    Passing a parameter 'n' will return the first 'n' elements of the array.
//
// Test Data:
//   console.log(first([7, 9, 0, -2]));
//   console.log(first([], 3));
//   console.log(first([7, 9, 0, -2], 3));
//   console.log(first([7, 9, 0, -2], 6));
//   console.log(first([7, 9, 0, -2], -3));
// --------------------------------------------------

function first(a: number[], n?: number): number[] {
  if (n === undefined) {
    return a;
  }
  if (n <= 0) {
    return [];
  }
  return a.slice(0, n);
}

// --------------------------------------------------
// i. Write a function that takes a parameter of either type string or number.
//    If the parameter is a string, return its length;
//    if it's a number, return its square.
// --------------------------------------------------

function thisOrThat(g: string | number): number {
  if (typeof g === "string") {
    return g.length;
  }

  return Math.pow(g, 2);
}

// --------------------------------------------------
// j. Create an interface Person with properties:
//    - name (string)
//    - age (number)
//    - address (optional string)
//    - id (readonly)
//
//    Write a function that creates a new person and attempts to modify
//    the id property (which should not be allowed).
// --------------------------------------------------

interface Person {
  name: string;
  age: number;
  address?: string;
  readonly id: number;
}

function createPerson(): Person {
  const person: Person = {
    name: "3amo",
    age: 999,
    id: 67,
  };
  // person.id = 21; // Error: Cannot assign to 'id' because it is a read-only property.
  return person;
}
