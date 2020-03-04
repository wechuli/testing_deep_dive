const catWeigher = require("../index");

test("throw an error if invalid paramters are used", () => {
  // Arrange Act Assert

  // test with value below zero
  expect(() => catWeigher(-23)).toThrow(Error);

  // test with an undefined value
  expect(() => catWeigher(undefined)).toThrow(Error);

  //test with empty parameters
  expect(() => catWeigher().toThrow(Error));
});


test("test that correct messages are displayed for Cat's Weights",()=>{
  // Arrange Act Assert

  // test with weight below three

  expect(catWeigher(2)).toBe("Cat is underweight");

  //test with weight between 3 and 6

  expect(catWeigher(4.6)).toBe("Cat is normal weight");

  // test with cat weight overweight

  expect(catWeigher(9)).toBe("Cat is overweight");
})