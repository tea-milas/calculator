/*--------------------------------------------------------------------------------------------
            1.  is first key a number or an operation
                1. if key -> write into screen  // if operator do nothing

            2.
            3.
 ---------------------------------------------------------------------*/

 const addKey = (e) => {

    // gets the ID of a button
    const clickedKey = e.target.id;  
    const resultScreen = document.getElementById("calculator__screen__result-text");

    // CLEAR

    if (clickedKey == "del") {
        console.log("del");
        clickedKey = clickedKey.toString().slice(0,-4);
        resultScreen.innerHTML = resultScreen.innerHTML + clickedKey; 
        return;
    }

    if (clickedKey == "C") {
        console.log("clear");
        resultScreen.innerHTML = ""
        return;
    }

    // current key will be displayed on the result screen
    resultScreen.innerHTML = resultScreen.innerHTML + clickedKey;   
} 


const calculate = () => {
    const resultScreen = document.getElementById("calculator__screen__result-text");
    console.log(typeof(resultScreen.innerText))

    // OPERATIONS 

    if (resultScreen.innerText.includes("+")) {
        resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("+")[0]) + parseFloat(resultScreen.innerHTML.split("+")[1]);
    } else if (resultScreen.innerText.includes("-")) {
        resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("-")[0]) - parseFloat(resultScreen.innerHTML.split("-")[1]);
    } else if (resultScreen.innerText.includes("*")) {
        console.log(resultScreen.innerHTML.split("*")[0],resultScreen.innerHTML.split("*")[1]);
        resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("*")[0]) * parseFloat(resultScreen.innerHTML.split("*")[1]);
    } else if (resultScreen.innerText.includes("/")) {
        resultScreen.innerHTML = parseFloat(resultScreen.innerHTML.split("/")[0]) / parseFloat(resultScreen.innerHTML.split("/")[1]);
    }
}