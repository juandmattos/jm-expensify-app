// Object Deconstructuring

const person = {
  name: 'Juan',
  age: 28,
  location: {
    city: 'Montevideo',
    temp: 15
  }
}

const { name,lastName = 'No last name', age } = person // Default value
const { city, temp: temperature } = person.location // Alias

console.log(`${name} ${lastName} is ${age}.`)
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`)
}

// Array Deconstructuring
const address = ['1299 S Junior Street', 'Philadelphia', 'Pennsylvania', '1947']
const [, , state] = address // You dont have to declare all variables here, you can skip
// const [, city, state] = address
console.log(`You are in ${state}`)

const address2 = []
const [, , state2 = 'New York'] = address2  // Default value
console.log(`You are in ${state2}`)