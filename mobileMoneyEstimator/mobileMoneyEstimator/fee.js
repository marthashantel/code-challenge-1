function estimateTransactionFee() {
    // Prompt user for amount and convert to number
    let amountToSend = Number(prompt("Unatuma Ngapi? (KES)"));

    // Validate input
    if (isNaN(amountToSend) || amountToSend < 0) {
        console.log("Please enter a valid amount!");
        return;
    }

    // Calculate fee (1.5% of amount)
    let calculatedFee = amountToSend * 0.015;

    // Apply minimum (KES 10) and maximum (KES 70) fee limits
    let transactionFee = Math.max(10, Math.min(70, calculatedFee));

    // Calculate total amount to be debited
    let totalAmount = amountToSend + transactionFee;

    // Output results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("\nSend Money Securely!");
}

// Run the function
estimateTransactionFee();