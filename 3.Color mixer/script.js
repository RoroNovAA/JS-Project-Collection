const printColorButton = document.querySelector(".submit");

      function resultingColor() {
        const colorOne = document.querySelector("#colorOne").value;
        const colorTwo = document.querySelector("#colorTwo").value;
        let result;

        switch (colorOne) {
          /* CASE RED */
          case "red":
            switch (colorTwo) {
              case "blue":
                result = "purple";
                break;
              case "yellow":
                result = "orange";
                break;
              default:
                result = "Invalid color combination";
                break;
            }
            break;
          /* CASE BLUE */
          case "blue":
            switch (colorTwo) {
              case "red":
                result = "purple";
                break;
              case "yellow":
                result = "green";
                break;
              default:
                result = "Invalid color combination";
                break;
            }
            break;
          /* CASE YELLOW */
          case "yellow":
            switch (colorTwo) {
              case "red":
                result = "orange";
                break;
              case "blue":
                result = "green";
                break;
              default:
                result = "Invalid color combination";
                break;
            }
            break;
          /* DEFAULT CASE */
          default:
            result = "Invalid color combination";
            break;
        }
        alert(result);
      }

      printColorButton.addEventListener("click", resultingColor);