function calculateChaiIngredients() {
    // Prompt user for number of cups and convert to number
    let numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));

    // Validate input
    if (isNaN(numberOfCups) || numberOfCups < 0) {
        console.log("Please enter a valid number of cups!");
        return;
    }

    // Calculate ingredients
    let water = numberOfCups * 200; // ml
    let milk = numberOfCups * 50; // ml
    let teaLeaves = numberOfCups * 1; // tablespoons
    let sugar = numberOfCups * 2; // teaspoons

    // Output results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

// Run the function
calculateChaiIngredients();