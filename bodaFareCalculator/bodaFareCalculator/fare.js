function calculateBodaFare() {
    // Prompt user for distance and convert to number
    let distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?"));

    // Validate input
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Please enter a valid distance in kilometers!");
        return;
    }

    // Constants for fare calculation
    const baseFare = 50; // KES
    const chargePerKm = 15; // KES per km

    // Calculate fare
    let distanceFare = distanceInKm * chargePerKm;
    let totalFare = baseFare + distanceFare;

    // Output results
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

// Run the function
calculateBodaFare();