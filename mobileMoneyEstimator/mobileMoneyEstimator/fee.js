function estimateTransactionFee() {
    let amountToSend = Number(prompt("Unatuma Ngapi? (KES)"));

    if (isNaN(amountToSend) || amountToSend < 0) {
        console.log("Please enter a valid amount!");
        return;
    }

    let calculatedFee = amountToSend * 0.015;

    let transactionFee = Math.max(10, Math.min(70, calculatedFee));

    let totalAmount = amountToSend + transactionFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("\nSend Money Securely!");
}

estimateTransactionFee();