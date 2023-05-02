const originalPrice = 700;
        const discountedPrice = 520;
        const discount = originalPrice - discountedPrice;


        /* MAIN FUNCTION */
        const discountPercent = () => {
            const formulae = (discount / originalPrice * 100).toFixed(2);
            return formulae;
        }

        console.log(discountPercent());