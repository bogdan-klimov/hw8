/////////////////////////////////////////////1

class MyString {
   
  constructor(str) {
    this.str = str;
  }

  reverse (str) {
    return this.str.split("").reverse().join("");
  }

  ucFirst (str) {
    return this.str[0].toUpperCase() + this.str.slice(1);
  }

  ucWords (str) {
    return this.str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
  }
} 

let string = new MyString ("hello, im Petya");

console.log(`Function revese: ${string.reverse()}`);

console.log(`Function unFirst: ${string.ucFirst()}`);

console.log(`Function ucWords: ${string.ucWords()}`);


//////////////////////////////////////////2

class Vector {

  constructor(lenght) {
    this.lenght = lenght;
  }

  plus () {

  }

  scalar () {

  }

}

class CreateCountry {
	
	constructor(id, country, population) {
		this.id = id;
		this.country = country;
		this.population = population;
	}

	myCountry () {
		return `Hello, Im from ${this.country}, my population: ${this.population}`
	}

}

const ukraine = new CreateCountry('UA', 'Ukraine', 4e7);
const albania = new CreateCountry('AL', 'Albania', 2986952);

console.log(ukraine, albania);


