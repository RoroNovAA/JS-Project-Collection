const resultButton = document.querySelector(".result-button");

function getResult(){
    const num1 = parseFloat(document.querySelector("#number1").value);
    const num2 = parseFloat(document.querySelector("#number2").value);
    const mathOperator = document.querySelector("#mathOperator").value;
    let result;

    switch(mathOperator){
        case "+":
        result = num1 + num2;
        break;

        case "-":
        result = num1 - num2;
        break;
        
        case "*":
        result = num1 * num2;
        break;
        
        case "/":
        result = num1 / num2;
        break;

        default:
        console.log("Invalid Operator!");
        break;
        
    } return console.log(result);
}

resultButton.addEventListener("click", getResult);