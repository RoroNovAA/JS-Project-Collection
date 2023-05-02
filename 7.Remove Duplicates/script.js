let cart = ["apple", "banana", "orange", "apple", "grapes", "banana"];

function removeDuplicates(data) {
  /* REMOVES DUPLICATES BY CREATING A SET */
  const newData = new Set(data);

  /* CHANGES IT BACK TO ARRAY */
  return Array.from(newData);
}

console.log(removeDuplicates(cart));
