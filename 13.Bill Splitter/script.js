 /* MAIN FUNCTION */
 function splitBill(dishCosts, noOfPeople) {
    /* TOTAL COST OF DISH */
    const totalCost = dishCosts.reduce((acc, curr) => acc + curr, 0);
    /* COST PER PERSON */
    const individualCost = totalCost / noOfPeople;
    /* AMOUNT OWED PER PERSON IN AN ARRAY */
    const amountsOwed = dishCosts.map(cost => {
        const amount = cost / noOfPeople;
        /* ROUNDING THE AMT TO TWO DECIMAL */
        return  Math.round(amount * 100) / 100;
    });

    /* CALCULATE THE TOTAL AMOUNT OWED BY EACH PERSON */
    const totalOwed = amountsOwed.reduce((acc, curr) => acc + curr, 0);

    /* THE AMOUNT TO BE PAID TO THE RESTAURANT */
    const restaurantAmount = totalCost - totalOwed;

    /* RETURNING AN OBJECT FINALLY */
    return {
        totalCost: totalCost,
        costPerPerson: individualCost,
        amountsOwed: amountsOwed,
        totalOwed: totalOwed,
        restaurantAmount: restaurantAmount
    };
}

/* CALLING THE MAIN FUNCTION WITH VARIABLE */
const dishCosts = [5, 7, 3, 12, 5];
const noOfPeople = 4;

console.log(splitBill(dishCosts, noOfPeople));