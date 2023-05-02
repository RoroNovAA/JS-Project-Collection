const submitButton = document.querySelector(".submit");

      /* MAIN FUNCTION */
      function nameDetails() {
        let firstName = document.querySelector("#enter-first-name").value;
        let lastName = document.querySelector("#enter-last-name").value;

        /* FIRST NAME FUNCTION */
        function capitalizeFirstName() {
          return firstName[0] === firstName[0].toLowerCase()
            ? firstName.charAt(0).toUpperCase() + firstName.slice(1)
            : firstName;
        }

        /* LAST NAME FUNCTION */
        function capitalizeLastName() {
          return lastName[0] === lastName[0].toLowerCase()
            ? lastName.charAt(0).toUpperCase() + lastName.slice(1)
            : lastName;
        }
        alert(`Hello ${capitalizeFirstName()} ${capitalizeLastName()}`);
      }

      submitButton.addEventListener("click", function (event) {
        event.preventDefault(); /*  prevent the form from submitting */
        nameDetails();
      });
