// Q1. JS Core - Currency Converter Promise
// Write a function convertCurrency that takes an amount, source currency, and target currency, and returns a Promise. The Promise should resolve with the converted amount if the conversion is successful; otherwise, it should reject with an error message.

// You need to implement the convertCurrency function, which returns a Promise. The Promise should resolve with the converted amount if the conversion is successful, and reject with an error message if there is any issue.

// // Test Cases
// convertCurrency(100, 'USD', 'EUR')
//     .then(result => console.log(`Converted amount: ${result} EUR`))
//     .catch(error => console.error(error));

// convertCurrency(50, 'USD', 'JPY')
//     .then(result => console.log(`Converted amount: ${result} JPY`))
//     .catch(error => console.error(error)); // Expected output: "Error converting currency: Invalid currency"

//Solution

const exchangeRates = {
    'USD': 1.0,
    'EUR': 0.85,
    'GBP': 0.75,
};
// console.log(exchangeRates.EUR)
function convertCurrency(amount, sourceCurrency, targetCurrency) {
    // Write code here =========
    

    return new Promise((res,rej)=>{
        if(exchangeRates[sourceCurrency] && exchangeRates[targetCurrency]){
            let ans = (amount* exchangeRates[targetCurrency] / exchangeRates[sourceCurrency]).toFixed(2)
            console.log(ans)
            res(ans)
        }
        else{
            rej(`Error converting currency: Invalid currency`)
        }
    })
}

convertCurrency(100,'EUR','GBP')
.then(result => console.log(`Converted amount: ${result} EUR`))
.catch(error => console.error(error));