let arr = [5, 6, 14, 1, 12, 3, 1, 4, 8, 9];

/* MAIN FUNCTION */
function doubleQuantity(data) {
  /* FOR LOOP */
  for (let i = 0; i < data.length; i++) {
    let nums = data[i];
    /* PUSHING INTO NEW ARRAY THE NEW VALUE */
    data[i] = nums * 2;
  }
  return console.log(data);
}

doubleQuantity(arr);

/* console.log(arr); */