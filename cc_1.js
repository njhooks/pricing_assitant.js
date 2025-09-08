// Coding Challenge 2a

// Code goes here

const productName ="Wireless Headphones"
let costPerUnit = 120;
let basePrice = 200;
let discountRate = 0.20;
let salesTaxRate = 0.075;
let fixedMonthlyCosts = 5000;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0

console.log("Product Name:", productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units:", breakEvenUnits);
console.log("Is Profitable Per Unit:", isProfitablePerUnit);