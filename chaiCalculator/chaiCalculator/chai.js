//function defining
function calculateChaiIngredients() {
    let numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?")); //user input...calculates the number

    // input validation
    if (isNaN(numberOfCups) || numberOfCups < 0) {
        console.log("Please enter a valid number of cups!");
        return;
    }
    // ingredient calc

    let water = numberOfCups * 200;
    let milk = numberOfCups * 50;
    let teaLeaves = numberOfCups * 1; 
    let sugar = numberOfCups * 2; 

    //opting the results 
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}
//function call 
calculateChaiIngredients();