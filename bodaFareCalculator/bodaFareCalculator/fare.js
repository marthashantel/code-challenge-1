// function declaration

functioncalculateBodaFare()
// user input and declaration 

{
    let distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?"));
    // input validation 

    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Please enter a valid distance in kilometers!");
        return;
    }
    // defining fare rates

    const baseFare = 50;
    const chargePerKm = 15;
    //calculating the fare 

    let distanceFare = distanceInKm * chargePerKm;
    let totalFare = baseFare + distanceFare;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

calculateBodaFare();
