const fizzBuzz = require("../fizzbuzz");

test("should return the number if not divisible by 3 or 1", () => {
  expect(fizzBuzz(1)).toBe(1);
});

test("should Fizz if the number is divisible by 3", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});
test("should return Buzz if the number is divisible by 5", () => {
  expect(fizzBuzz(10)).toBe("Buzz");
});

test("should return FizzBuzz if the number is divisible by both 3 and 5", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});
