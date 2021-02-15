From Andrew Evans to Everyone:  03:22 PM
https://app.mural.co/t/nology9400/m/nology9400/1613143245040/96b8c044140fca87dfd9e81118ce8b0be3743d3c
From Gábor Gellai to Everyone:  03:38 PM
https://www.w3resource.com/
https://www.w3resource.com/javascript-exercises/
From Andrew Evans to Everyone:  04:18 PM




// 1. We've got a input box with '3.5+5*2'
const value = '3.5+5*2';
console.log("THE VALUE IS " + value);

// 2. CONVERT THE VALUE TO AN ARRAY
const equaiton = value.split('');

// 3. STORE OUR OPERATORS
const operators = ['*', '/', '-', '+'];

// 4. We need a check somewhere for NO Operators and stop this calculation in it's tracks

operators.forEach(operator => {
    // 5. Go through each operator... Start with * as it has priority
    console.log("THE OPERATOR WE@RE LOOKING AT IS " + operator);

    equaiton.forEach(character => {
        console.log(character);
        // 1. If it's the operator we're looking && it's not a number
        //      - store the number BEFORE the operator
        //      - store the number AFTER the operator
        //      - Do a switchcase and calculate the value
        //      - Store as the calculation SO FAR! then start again and look for next most important
    })
})
