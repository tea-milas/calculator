const addKey = (e) => {

    // gets the ID of a button -> string
    const clickedKey = e.target.id; 

    
    const resultScreen = document.getElementById("calculator__screen__result-text");
    const smallerScreen = document.getElementById("calculator__previous-operand-text");


    // going for the first time
    let lastChar = resultScreen.innerText.charAt(resultScreen.innerText.length-1);
    console.log("lastChar is: " + lastChar)

    if (resultScreen.innerText.length == 0){

        console.log("I'm running for the first timeee")

        if (isOperand(clickedKey)) {
            console.log("first key is an operand");
            return;
        }

     } else if (isOperand(lastChar) && isOperand(clickedKey)) {
         console.log( "you can't have two operands next to each other");
        return;
     } 
    
    // CLEAR THE SCREEN

    if (clickedKey == "d") {
        resultScreen.innerHTML = resultScreen.innerText.slice(0,-1); 
        return;
    }

    if (clickedKey == "C") {
        console.log("clear");
        resultScreen.innerHTML = "";
        smallerScreen.innerHTML = "";
        return;
    }

    // screen can take up to 11 characters
     if (resultScreen.innerText.length >= 11) {
        console.log("reached the max")
        return;
    }

    // DISPLAY CLICKED KEY ON THE SCREEN

        resultScreen.innerHTML = resultScreen.innerHTML + clickedKey;
        console.log("result screen is now: " + resultScreen.innerText)
    
} 


const calculate = () => {
    const smallerScreen = document.getElementById("calculator__previous-operand-text");
    const resultScreen = document.getElementById("calculator__screen__result-text");
    let allChar = resultScreen.innerHTML.split("");
    let result;

    let divideArr = resultScreen.innerHTML.split("/");
    let multiplyArr = resultScreen.innerHTML.split("*");
    let plusArr = resultScreen.innerHTML.split("+");
    let minusArr = resultScreen.innerHTML.split("-");

 
    // OPERATIONS 
    // multiply

    if (resultScreen.innerText.includes("*")) {
        smallerScreen.innerHTML = resultScreen.innerText;

        result = 1;

        for (let i = 0; i < multiplyArr.length; i++) {
            result = result * parseFloat(multiplyArr[i]);
        }

        if (resultScreen.innerHTML.includes("/")){
            for (let i = 1; i < divideArr.length; i++) {
                result = result / parseFloat(divideArr[i]);
                resultScreen.innerHTML = result;
            }
        } else if (resultScreen.innerHTML.includes("+")){
            for (let i = 1; i < plusArr.length; i++) {
                result = result + parseFloat(plusArr[i]);
                resultScreen.innerHTML = result;
            }
        } else if (resultScreen.innerHTML.includes("-")){
            if (allChar[0] != "-"){
                for (let i = 1; i < minusArr.length; i++) {
                    result = result - parseFloat(minusArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else  {
                for (let i = 2; i < minusArr.length; i++) {
                    result = result - parseFloat(minusArr[i]);
                    resultScreen.innerHTML = result;
                }

            }
        
        } else  {
            resultScreen.innerHTML = result;
        }

    
    // divide
        
        } else if (resultScreen.innerText.includes("/")) {
            smallerScreen.innerHTML = resultScreen.innerText;

            result = parseFloat(divideArr[0]);


            for (let i = 1; i < divideArr.length; i++) {
                console.log(divideArr[i])
                result = result / parseFloat(divideArr[i]);
            }

            if (resultScreen.innerHTML.includes("*")){
                for (let i = 1; i < multiplyArr.length; i++) {
                    result = result * parseFloat(multiplyArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("+")){
                for (let i = 1; i < plusArr.length; i++) {
                    result = result + parseFloat(plusArr[i]);
                    console.log("plusArr[1]:" + plusArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("-")){
                if (allChar[0] != "-"){
                    for (let i = 1; i < minusArr.length; i++) {
                        console.log("minArr:" + minusArr);
                        console.log("RESULT IS: " + result + "- minArr[i]: " + minusArr[i])
                        result = result - parseFloat(minusArr[i]);
                        console.log("minArr[i]:" + minusArr[i]);
                        resultScreen.innerHTML = result;
                    }
                } else  {
                    for (let i = 2; i < minusArr.length; i++) {
                        console.log("minArr:" + minusArr);
                        console.log("RESULT IS: " + result + "- minArr[i]: " + minusArr[i])
                        result = result - parseFloat(minusArr[i]);
                        console.log("minArr[i]:" + minusArr[i]);
                        resultScreen.innerHTML = result;
                    }
    
                }
            } else  {
                resultScreen.innerHTML = result;
            }
            //resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("/")[0]) / parseFloat(resultScreen.innerHTML.split("/")[1]);
    
        // plus  WORKS WITH NEGATIVE NUMBERS 
        } else if (resultScreen.innerText.includes("+")) {
            smallerScreen.innerHTML = resultScreen.innerText;
            console.log("plussArr is: " + plusArr)
            result = 0;

            for (let i = 0; i < plusArr.length; i++) {
                result = result + parseFloat(plusArr[i]);
            }

            if (resultScreen.innerHTML.includes("/")){
                for (let i = 1; i < divideArr.length; i++) {
                    result = result / parseFloat(divideArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("*")){
                for (let i = 1; i <multiplyArr.length; i++) {
                    result = result * parseFloat(multiplyArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("-")){
                if (allChar[0] != "-"){
                    for (let i = 1; i < minusArr.length; i++) {
                        result = result - parseFloat(minusArr[i]);
                        resultScreen.innerHTML = result;
                    }
                } else  {
                        resultScreen.innerHTML = result;
                }
            } else  {
                resultScreen.innerHTML = result;
            }

    //minus
        } else if (resultScreen.innerText.includes("-")) {
            smallerScreen.innerHTML = resultScreen.innerText; 
            result = parseFloat(minusArr[0]);

            if (allChar[0] == "-"){
                result = parseFloat(minusArr[0]) * (-1);
                console.log("if first char is minus result is: " + result);
                for (let i = 1; i < minusArr.length; i++) {
                    console.log(minusArr[i])
                    result = result - parseFloat(minusArr[i]);
                    console.log("result is: " + result)
                    resultScreen.innerHTML = result;
                }
            } else if (allChar[0] !== "-") {
                for (let i = 1; i < minusArr.length; i++) {
                    console.log(minusArr[i])
                    result = result - parseFloat(minusArr[i]);
                    console.log("result is: " + result)
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("/")){
                for (let i = 1; i < divideArr.length; i++) {
                    result = result / parseFloat(divideArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("*")){
                for (let i = 1; i <multiplyArr.length; i++) {
                    result = result * parseFloat(multiplyArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("+")){
                for (let i = 1; i < plusArr.length; i++) {
                    result = result + parseFloat(plusArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else  {
                resultScreen.innerHTML = result;
            }
            


           // resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("-")[0]) - parseFloat(resultScreen.innerHTML.split("-")[1]);
        
        }
    
}


// negative - positive
const changePrefix = () => {
    const resultScreen = document.getElementById("calculator__screen__result-text");
    const minus = "-";

    if (resultScreen.innerText.length == 0){
        resultScreen.innerHTML = "-";
    } else if (!resultScreen.innerText.includes("-")) {
        resultScreen.innerHTML = minus.concat(resultScreen.innerText);
        console.log("I add the minus to the beginning")
    } else {
        resultScreen.innerHTML = resultScreen.innerText.substring(1);
        console.log("i already have a minus")
        
    }
}

// check if its an operand
const isOperand = (character) => {
    const operand = ["*","/","+","-"];
    return operand.includes(character);

};