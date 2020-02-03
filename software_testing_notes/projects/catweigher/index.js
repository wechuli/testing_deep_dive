function catWeigher(catWeight) {
  console.log("Cat Weighing System");
  if (
    catWeigher === undefined ||
    catWeight <= 0 ||
    typeof catWeight !== "number"
  ) {
    throw new Error("Please enter a valid parameter");
  }
  if (catWeight < 3) {
    console.log("Cat is underweight");
  } else if (catWeight >= 3 && catWeight < 6) {
    console.log("Cat is normal weight");
  } else {
    console.log("Cat is overweight");
  }
}



module.exports = catWeigher;
