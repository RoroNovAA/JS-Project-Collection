
 /* WHAT YOU WILL LEARN DATA IN AN ARRAY */
const data = ["HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"];


/* VARIABLES */
const addButton = document.querySelector("button");
let i = 0;

   /* MAIN FUNCTION */
   function addItems() { 
       if(data[i] !== undefined) {
        let list = document.querySelector(".list-address");
        list.innerHTML += `<li> ${data[i]} </li>`;
        i++;
       } else {
        alert("All items are added!");
       }
   };