 /* CART ARRAY */
 const cart = [{unitPrice: 20, quantity: 4}, {unitPrice: 14, quantity: 8}, {unitPrice: 40, quantity: 1}];

 /* MAIN FUNCTION TO CALCULATE FINAL ORDER PRICE */
 const calculateTotalPrice = cart => {
     const totalCost = cart.reduce((acc, item) => {
         return acc + (item.unitPrice * item.quantity);
     }, 0);
     return totalCost;
 }

 /* CALLING THE ANON FUNCTION WITH ARRAY AS PARAMETER */
 console.log(calculateTotalPrice(cart));