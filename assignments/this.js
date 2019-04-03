/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: it is basically a this referencing the Window Object. It's basically a this on the global scope which references
    the whole language.
* 2. Implicit Binding: When a function is called by a preceding dot. What's on the left of the dot is what the this is referencing.
* 3. Explicit Binding: When you use the .call, .apply or .bing methods, the this is what's passed as the argument of those methods
* 4. New Binding: The this refers to the object being created by the constructor function used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding(name) {
    console.log(this);
    return name;
}

windowBinding("Jonathan");

// Principle 2

// code example for Implicit Binding

const jonathan = {
    name: "Jonathan", 
    age: 28,
    sayAge: function() {
        return `I am ${this.age} years old`;
    }
};

console.log(jonathan.sayAge());

// Principle 3

// code example for New Binding

function Cat(catAttributes) {
    this.race = catAttributes.race;
    this.age = catAttributes.age;
    this.food = catAttributes.food;
    this.eat = function() {
        return `Eating ${this.food}`;
    }
}

const cat = new Cat({
    race: "Persian",
    age: 2,
    food: "cat food",
});

console.log(cat.eat());

// Principle 4

// code example for Explicit Binding

const me = {
    name: "Jonathan",
    food: "sushi"
}
  
  function intro(like1, like2){
    return `Hello, my name is ${this.name} and my favorite food is ${this.food}. I like to ${like1} and ${like2}.`;
  }
  
  const hobbies = ["play tennis", "write on Twitter"];
  
  console.log(intro.call(me, ...hobbies));
