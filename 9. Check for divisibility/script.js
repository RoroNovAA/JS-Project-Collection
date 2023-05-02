let arr = [5, 7, 3, 2, 6, 5, 9];

function checkDivisibility(data) {
  /* NUMBERS LOOP */
  for (let i = 0; i < data.length; i++) {
    let nums = data[i];
    /* NUMBERS DIVIDED BY 3 */
    if (nums % 3 == 0 && nums % 2 != 0) {
      console.log(nums);
    } else {
      /* NUMBERS THAT ARE DIVIDED BY 2 */
      if (nums % 2 == 0) {
        continue;
      }
    }
  }
}

checkDivisibility(arr);