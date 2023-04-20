class Multiplier {
  constructor(x) {
    this.x = x;
  }
  
  multiply(y) {
    return this.x * y;
  }
}

// Create a new instance of the Multiplier class
const multiplier = new Multiplier(5);

// Multiply 7 by 5 using the multiply method
const result = multiplier.multiply(7);

console.log(result); // Output: 35

