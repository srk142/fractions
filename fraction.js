  
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
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

// Define the fractions to subtract
const fraction1 = new Fraction(1, 4);
const fraction2 = new Fraction(1, 2);

// Subtract the fractions
const resultFraction = fraction1.subtract(fraction2);

// Print the result
console.log(`${fraction1.toString()} - ${fraction2.toString()} = ${resultFraction.toString()}`);
