  
  multiply(y) {
    return this.x * y;
  }
}

// Create a new instance of the Multiplier class
const multiplier = new Multiplier(5);

// Multiply 7 by 5 using the multiply method
const result = multiplier.multiply(7);

console.log(result); // Output: 35
=======
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  // Function to find the greatest common divisor of two numbers
  gcd(a, b) {
    if (b == 0) {
      return a;
    } else {
      return this.gcd(b, a % b);
    }
  }

  // Function to add another fraction to this fraction
  add(other) {
    let lcd = (this.denominator * other.denominator) / this.gcd(this.denominator, other.denominator);
    let num1 = this.numerator * (lcd / this.denominator);
    let num2 = other.numerator * (lcd / other.denominator);
    let resultNum = num1 + num2;
    let resultDenom = lcd;
    let commonDivisor = this.gcd(resultNum, resultDenom);
    return new Fraction(resultNum / commonDivisor, resultDenom / commonDivisor);
}

// Example usage
let f1 = new Fraction(1, 2);
let f2 = new Fraction(1, 3);
let result = f1.add(f2);
console.log(result.numerator + "/" + result.denominator); // "5/6"
 
subtract(other) {
    // Find the common denominator
    const commonDenominator = this.denominator * other.denominator;

    // Convert both fractions to have the same denominator
    const newNumerator1 = this.numerator * other.denominator;
    const newNumerator2 = other.numerator * this.denominator;

    // Subtract the numerators
    const resultNumerator = newNumerator1 - newNumerator2;

    // Simplify the result fraction
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const gcdResult = gcd(resultNumerator, commonDenominator);
    const simplifiedNumerator = resultNumerator / gcdResult;
    const simplifiedDenominator = commonDenominator / gcdResult;

    // Return the result as a new fraction
    return new Fraction(simplifiedNumerator, simplifiedDenominator);
    
  divide(otherFraction) {
    const numerator = this.numerator * otherFraction.denominator;
    const denominator = this.denominator * otherFraction.numerator;
    return new Fraction(numerator, denominator);
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

// Example usage
const fraction1 = new Fraction(3, 4);
const fraction2 = new Fraction(1, 2);

const result = fraction1.divide(fraction2);
console.log(result.toString()); // Output: "3/2"

// Print the result
console.log(`${fraction1.toString()} - ${fraction2.toString()} = ${resultFraction.toString()}`);
