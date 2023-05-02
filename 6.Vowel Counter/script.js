const submitButton = document.querySelector(".button");

function checkVowels() {
  let userName = document.querySelector("#enter-name").value;
  let vowels = 0;

  for (let i = 0; i < userName.length; i++) {
    let charName = userName[i];
    if (
      charName == "a" ||
      charName == "e" ||
      charName == "i" ||
      charName == "o" ||
      charName == "u"
    ) {
      vowels += 1;
    }
  }
  alert(vowels);
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  checkVowels();
});