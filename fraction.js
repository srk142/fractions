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
}

// Example usage
let f1 = new Fraction(1, 2);
let f2 = new Fraction(1, 3);
let result = f1.add(f2);
console.log(result.numerator + "/" + result.denominator); // "5/6"
