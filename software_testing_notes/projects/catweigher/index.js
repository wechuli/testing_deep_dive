console.log("Cat Weighing System");

function catWeigher(catWeight) {
  if (catWeight <= 0 || typeof catWeight !== "number") {
    console.error("Please enter a valid parameter");
    return;
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

catWeigher(445);
