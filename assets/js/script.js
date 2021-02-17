const addKey = (e) => {
    const clickedKey = e.target.id; 

    const resultScreen = document.getElementById("calculator__screen__result-text");
    const smallerScreen = document.getElementById("calculator__previous-operand-text");

    let lastChar = resultScreen.innerText.charAt(resultScreen.innerText.length-1);

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

    // MAX NUMBER OF CHARACTERS
     if (resultScreen.innerText.length >= 11) {
        console.log("reached the max")
        return;
    }

    // DISPLAY CLICKED KEY ON THE SCREEN

    resultScreen.innerHTML = resultScreen.innerHTML + clickedKey;
    console.log("result screen is now: " + resultScreen.innerText)
    
} 

// CALCULATIONS 

const calculate = () => {
    const smallerScreen = document.getElementById("calculator__previous-operand-text");
    const resultScreen = document.getElementById("calculator__screen__result-text");
    let allChar = resultScreen.innerHTML.split("");
    console.log("allchar: " + allChar)
    let result;
    let hasMultipleOperands = moreThanOneOperand(allChar);
    console.log("hasMultipleOperands" + hasMultipleOperands);
    let divideArr = resultScreen.innerHTML.split("/");
    let multiplyArr = resultScreen.innerHTML.split("*");
    let plusArr = resultScreen.innerHTML.split("+");
    let minusArr = resultScreen.innerHTML.split("-");

    const indexOfMultiplyChar = resultScreen.innerText.indexOf("*");
    const indexOfDivideChar = resultScreen.innerText.indexOf("/");

    //--------------------- multiply---------------------------------------------------------

    if (resultScreen.innerText.includes("*")) {
        smallerScreen.innerHTML = resultScreen.innerText;
        result = 1;

        if (moreThanOneOperand(allChar) && ((resultScreen.innerHTML.includes("-") && allChar[0] !== "-") || resultScreen.innerHTML.includes("+")) ){
            //MULTIPLY in the middle 
            const firstHalf = resultScreen.innerText.substr(0, indexOfMultiplyChar);
            console.log("first half is: " + firstHalf);
            const firstHalfIndexOfOperator = firstHalf.split("").findIndex(char => isNaN(char));
            const leftNumber = firstHalf.substr(firstHalfIndexOfOperator+1, indexOfMultiplyChar);
            console.log("left number is: " + leftNumber);
            // This is how we do the right handside
            const secondHalf = resultScreen.innerText.substr(indexOfMultiplyChar+1);
            const secondHalfIndexOfOperator = secondHalf.split("").findIndex((char) => isNaN(char));
            const rightNumber = secondHalf.substr(0, secondHalfIndexOfOperator);
            console.log("right number is: " + rightNumber);
            // We now need to mulitply
            const answer = leftNumber * rightNumber;
            console.log(answer);
            // Stick the answer AFTER +, and BEFORE + 
            resultScreen.innerHTML = resultScreen.innerText.substr(0, firstHalfIndexOfOperator+1) + answer + resultScreen.innerText.substr((indexOfMultiplyChar + secondHalfIndexOfOperator + 1))
            console.log("result screen is: " + resultScreen.innerText)

            if (resultScreen.innerHTML.includes("/")){
                divideArr = resultScreen.innerHTML.split("/");
                for (let i = 1; i < divideArr.length; i++) {
                    result = result / parseFloat(divideArr[i]);
                    console.log(result)
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("+")){
                plusArr = resultScreen.innerHTML.split("+");
                result = 0;
                for (let i = 0; i < plusArr.length; i++) {
                    console.log("plussArr " + plusArr)
                    result = result + parseFloat(plusArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (resultScreen.innerHTML.includes("-")){
                minusArr = resultScreen.innerHTML.split("-");
                console.log("MINUS AR:" + minusArr)
                if (allChar[0] != "-"){
                    result = minusArr[0];
                    for (let i = 1; i < minusArr.length; i++) {
                        console.log("ESTOU AQUI")
                        console.log("result in minarr:" +result)
                        result = result - parseFloat(minusArr[i]);
                        console.log("after operation: " +result)
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
        } else {
            for (let i = 0; i < multiplyArr.length; i++) {
                result = result * parseFloat(multiplyArr[i]);
                resultScreen.innerHTML = result
            } 
        }

    
    //--------------- divide-------------------------------------------------
        
        } else if (resultScreen.innerText.includes("/")) {
            smallerScreen.innerHTML = resultScreen.innerText;
            result = parseFloat(divideArr[0]);

            if (moreThanOneOperand(allChar) && ((resultScreen.innerHTML.includes("-") && allChar[0] !== "-") || resultScreen.innerHTML.includes("+")) ){
                
                //DIVIDE in the middle 
        
                const firstHalf = resultScreen.innerText.substr(0, indexOfDivideChar);
                console.log("first half is: " + firstHalf);
                const firstHalfIndexOfOperator = firstHalf.split("").findIndex(char => isNaN(char));
                const leftNumber = firstHalf.substr(firstHalfIndexOfOperator+1, indexOfDivideChar);
                console.log("left number is: " + leftNumber);
                
                const secondHalf = resultScreen.innerText.substr(indexOfDivideChar+1);
                const secondHalfIndexOfOperator = secondHalf.split("").findIndex((char) => isNaN(char));
                const rightNumber = secondHalf.substr(0, secondHalfIndexOfOperator);
                console.log("right number is: " + rightNumber);
               
                const answer = leftNumber / rightNumber;
                console.log(answer);
                 
                sortedDivideInTheMiddle = resultScreen.innerText.substr(0, firstHalfIndexOfOperator+1) + answer + resultScreen.innerText.substr((indexOfDivideChar + secondHalfIndexOfOperator + 1))
                console.log(sortedDivideInTheMiddle);

                if (resultScreen.innerHTML.includes("*")){
                    multiplyArr = resultScreen.innerHTML.split("*");
                    result = 1;

                    for (let i = 1; i < multiplyArr.length; i++) {
                        result = result * parseFloat(multiplyArr[i]);
                        resultScreen.innerHTML = result;
                    }
                } else if (resultScreen.innerHTML.includes("+")){
                    plusArr = resultScreen.innerHTML.split("+");
                    result = 0;

                    for (let i = 1; i < plusArr.length; i++) {
                        result = result + parseFloat(plusArr[i]);
                        console.log("plusArr[1]:" + plusArr[i]);
                        resultScreen.innerHTML = result;
                    }
                } else if (resultScreen.innerHTML.includes("-")){
                    minusArr = resultScreen.innerHTML.split("-");
                    result = minusArr[0];
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
            } else {
                for (let i = 1; i < divideArr.length; i++) {
                    console.log(divideArr[i])
                    result = result / parseFloat(divideArr[i]);
                    resultScreen.innerHTML = result;
                }
            }

    
    //-------------------------- plus-------------------------------

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

    //---------------------------minus----------------------------------------
        } else if (resultScreen.innerText.includes("-")) {
            smallerScreen.innerHTML = resultScreen.innerText; 
            result = parseFloat(minusArr[0]);

            if (allChar[0] == "-"){
                result = parseFloat(minusArr[1]) * (-1);
                for (let i = 2; i < minusArr.length; i++) {
                    result = result - parseFloat(minusArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else if (allChar[0] !== "-") {
                for (let i = 1; i < minusArr.length; i++) {
                    result = result - parseFloat(minusArr[i]);
                    resultScreen.innerHTML = result;
                }
            } else  {
                resultScreen.innerHTML = result;
            }
        }
}


// NEGATIVE / POSITIVE NUMBER

const changePrefix = () => {
    const resultScreen = document.getElementById("calculator__screen__result-text");
    const minus = "-";

    if (resultScreen.innerText.length == 0){
        resultScreen.innerHTML = minus;
    } else if (!resultScreen.innerText.includes("-")) {
        resultScreen.innerHTML = minus.concat(resultScreen.innerText);
        console.log("I add the minus to the beginning")
    } else {
        resultScreen.innerHTML = resultScreen.innerText.substring(1); 
    }
}

// CHECK IF IT'S AN OPERAND

const isOperand = (character) => {
    const operand = ["*","/","+","-"];
    return operand.includes(character);
};

const moreThanOneOperand = (arrayOfChar) => {
    let counter = 0;
    const operand = ["*","/","+","-"];

    arrayOfChar.map(character => {
        if (operand.includes(character)){
            console.log(counter)
            return counter = counter + 1;
        }
    });

    if (counter > 2 && arrayOfChar[0] == "-"){
        return true;
    } else if (counter > 1 && arrayOfChar[0] !== "-") {
        return true;
    } else if (counter == 1 || (counter == 2 && arrayOfChar[0] == "-")){
        return false;
    }
}