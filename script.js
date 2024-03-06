console.log("Hello, World!");

const names = ["Alice", "Bob", "Charlie"];
console.log(names[0]); // Alice
names[0] = "David";
console.log(names[0]); // David

// function
function add(a, b) {
  return a + b;
}
const subract = function (a, b) {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};

// method
const person = {
  name: "Alice",
  sayHello: function () {
    console.log("Hello!");
  },
};

const participants = [
  {
    name: "Alice",
    age: 20,
    email: "hi@mail.com",
  },
  {
    name: "Bob",
    age: 16,
    email: "hi@mail.com",
  },
  {
    name: "Alice",
    age: 20,
    email: "hi@mail.com",
  },
  {
    name: "Bob",
    age: 16,
    email: "hi@mail.com",
  },
  {
    name: "Alice",
    age: 20,
    email: "hi@mail.com",
  },
  {
    name: "Bob",
    age: 16,
    email: "hi@mail.com",
  },
  {
    name: "Alice",
    age: 20,
    email: "hi@mail.com",
  },
  {
    name: "Bob",
    age: 16,
    email: "hi@mail.com",
  },
];
function email(emailAddress) {
  console.log("Email sent to " + emailAddress);
}

// // We remove the last participant
// // We inform the last participant that he has been removed
// const removedParticipant = participants.pop();
// email(removedParticipant.email);

// Mutate original array
// push
const numbers = [1, 2, 3];
console.log(numbers);
const pushedElement = numbers.push(4);
console.log(numbers, pushedElement);

// unshift
const arrayNewLength = numbers.unshift(0);
console.log(numbers, arrayNewLength);

// pop
const poppedElement = numbers.pop();
console.log(numbers, poppedElement);

// shift
numbers.shift();
console.log(numbers);

// splice
numbers.splice(1, 1);
console.log(numbers);

const people = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
people.splice(1, 4);
console.log(people);

numbers.reverse();
console.log(numbers);

const students = ["Charlie", "Bob", "Frank", "Eve", "Alice", "David"];
students.sort();
console.log(students);

const grades = [90, 85, 95, 75, 80];

// Replace with 0 from position 2 until position 4 (not inclusive)
console.log(grades.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0, 80]
function call(phoneNumber) {
  console.log("Calling " + phoneNumber);
}
// Methods that return a new array
const participantsWithCorrectAge = participants.map((participant) => {
  if (participant.age < 18) {
    participant.eligible = false;
  } else {
    participant.eligible = false;
  }
  return participant;
});
console.log(participantsWithCorrectAge);

for (let i = 0; i < participants.length; i++) {
  if (participants[i].age < 18) {
    email(participants[i].email);
  } else {
    call(participants[i].phoneNumber);
  }
}

participants.forEach((currentParticipant) => {
  if (currentParticipant.age < 18) {
    email(currentParticipant.email);
  } else {
    call(currentParticipant.phoneNumber);
  }
});

// Filter
const finalParticipants = participants.filter((participant) => {
  return participant.age > 18;
});

console.log(finalParticipants);

// slice
const brands = ["Apple", "Samsung", "Sony", "Microsoft", "Lenovo"];
const newBrands = brands.slice(0, 3);
console.log(newBrands, brands);

// concat
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "beetroot", "tomato"];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

console.log(fruits.indexOf("iPhone"));

// includes
console.log(fruits.includes("orange"));
