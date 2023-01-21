// use DOM queries to get access to the DOM elements that you need
let numBtn = document.getElementsByClassName('digit');
let operBtn = document.getElementsByClassName('operation');
let clearBtn = document.getElementById("btnClear");
let eqlBtn = document.getElementById("btnEqual");

// link the displayDigit function to the click event of the digit buttons
for (let button of numBtn){
    button.addEventListener("click", displayDigit);
}

//link the operationClicked function to the click even of the operation buttons
for (let button of operBtn){
    button.addEventListener("click", operationClicked);
}

eqlBtn.addEventListener("click",equalClicked);

// Define the displayDigit function to be added as an event listener to the buttons representing the
// digits so that when the button is clicked the digit it represents would be concatenated
// to the contents of the display label
function displayDigit(event){
    let listItems = document.getElementsByClassName('digit');
    for(let item of listItems){
        if (item.textContent == event.target.textContent){
            document.getElementById('display').innerHTML = event.target.textContent;
        }
    }
}

// set the click event of the clear button
clearBtn.addEventListener('click',function(){
    document.getElementById('display').innerHTML = ''
});
// to an anonymous function that clears the text of the display lable


let firstValue, secondValue, operation;

//Define the operationClicked function to handle the click event of the operation buttons
//The function body should include the following steps:
    //Convert the value in the display label into a number and store it in the variable firstValue
    //Store the text of the clicked button in the variable 'operation' for latter reference
    //Clear the display lable to allow the user to enter the second value
function operationClicked(event){
    firstValue = Number(document.getElementById('display').innerHTML);
    operation = event.target.innerHTML;
    document.getElementById('display').innerHTML = '';
}


//Define the equalClicked function to handlet the click event of the equal button with the following steps
    //Convert the value in the display label to a number and store it in the variable secondValue
    // based on the value stored in the operation apply the corresponding operator on the first and second values
    // and display the result in the display label.

function equalClicked(){
    secondValue = Number(document.getElementById('display').innerHTML);
    let result;
    switch(operation){
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
    }
    document.getElementById('display').innerHTML = result;
}