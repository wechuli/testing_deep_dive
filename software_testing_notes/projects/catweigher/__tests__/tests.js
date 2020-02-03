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
