// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 14;
// 2. Consider the size of your home
const myHomeSize = 7;
// 3. Evaluate your food choices
const myFoodChoices = 2;
// 4. Examine your water consumption
const myWaterConsumption = 1;
// 5. Determine how many household purchases you make each year.
const myHouseHoldPurchases = 10;
// 6. Consider how much waste you produce
const myWaste = 20;
// 7. Identify the amount of waste that you recycle
const myRecycle = 4;
// 8. Tally up your annual transportation scores. 
const myTransportation = 5;
// 9. Add up your points
const cfpTotal = myHouseMembers + myHomeSize + myFoodChoices + myWaterConsumption + myHouseHoldPurchases + myWaste + myRecycle + myTransportation;
// 10. Write JS to update the rendered html (index.html) with total footprint
const cfpHeading = document.querySelector('h2');
cfpHeading.textContent = cfpTotal