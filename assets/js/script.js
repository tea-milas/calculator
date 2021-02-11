/*--------------------------------------------------------------------------------------------
            1.  is first key a number or an operation
                --->   if key -> write into screen  // if operator do nothing
 -----------------------------------------------------------------------------------------------*/

 const addKey = (e) => {

    // gets the ID of a button -> string
    const clickedKey = e.target.id; 

    // variables
    const resultScreen = document.getElementById("calculator__screen__result-text");
    const smallerScreen = document.getElementById("calculator__previous-operand-text");

    // going for the first time    
    if (resultScreen.innerText.length == 0){

        console.log("I'm running for the first timeee")

        if (clickedKey == "+" || clickedKey == "-" || clickedKey == "*" || clickedKey == "/") {
            console.log("first key is an operand");
            return;
        }
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

    
    // DISPLAY CLICKED KEY ON THE SCREEN

        resultScreen.innerHTML = resultScreen.innerHTML + clickedKey;
        console.log("result screen is now: " + resultScreen.innerText)


} 


const calculate = () => {
    const smallerScreen = document.getElementById("calculator__previous-operand-text");
    const resultScreen = document.getElementById("calculator__screen__result-text");
    console.log(typeof(resultScreen.innerText))

    // OPERATIONS 

        if (resultScreen.innerText.includes("+")) {
            smallerScreen.innerHTML = resultScreen.innerText;
            resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("+")[0]) + parseFloat(resultScreen.innerHTML.split("+")[1]);
        
        } else if (resultScreen.innerText.includes("-")) {
            smallerScreen.innerHTML = resultScreen.innerText;
            resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("-")[0]) - parseFloat(resultScreen.innerHTML.split("-")[1]);
        
        } else if (resultScreen.innerText.includes("*")) {
            smallerScreen.innerHTML = resultScreen.innerText;
            resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("*")[0]) * parseFloat(resultScreen.innerHTML.split("*")[1]);
        
        } else if (resultScreen.innerText.includes("/")) {
            smallerScreen.innerHTML = resultScreen.innerText;
            resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("/")[0]) / parseFloat(resultScreen.innerHTML.split("/")[1]);
        }
    
}

const changePrefix = () => {
    const resultScreen = document.getElementById("calculator__screen__result-text");
    //const minus = "(-";

    if (resultScreen.innerText.length == 0){
        resultScreen.innerHTML = "-";
    } 
    
    // else {
    //     resultScreen.innerHTML = resultScreen.innerText.slice(0,-1) +  minus + resultScreen.innerText.charAt(resultScreen.innerText.length-1)
    // }
    

}