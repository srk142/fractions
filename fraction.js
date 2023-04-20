class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

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
