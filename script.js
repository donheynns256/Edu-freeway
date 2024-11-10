let display = document.getElementById('display');
let historyList = document.getElementById('history');
let isResultShown = false; // Track if the result was just calculated

// Debounce function for input handling
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Append character to the display with debounce
const debouncedAppendCharacter = debounce(function(character) {
    if (isResultShown) {
        clearDisplay(); // Clear after showing result
        isResultShown = false;
    }

    // Prevent multiple consecutive operators
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(character)) {
        return;
    }

    display.value += character;
}, 100);

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        // If the last character is an operator, remove it
        const lastChar = display.value.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.value = display.value.slice(0, -1);
        }

        const result = eval(display.value);
        historyList.innerHTML += `<li>${display.value} = ${result}</li>`; // Add to history
        display.value = result;
        isResultShown = true;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate the square root
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
        isResultShown = true;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate power (x²)
function calculatePower() {
    try {
        display.value = Math.pow(eval(display.value), 2);
        isResultShown = true;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate logarithm
function calculateLog() {
    try {
        display.value = Math.log10(eval(display.value)); // Base 10 logarithm
        isResultShown = true;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate sine
function calculateSin() {
    try {
        display.value = Math.sin(eval(display.value) * (Math.PI / 180)); // Convert to radians
        isResultShown = true;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate cosine
function calculateCos() {
    try {
        display.value = Math.cos(eval(display.value) * (Math.PI / 180)); // Convert to radians
        isResultShown = true;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate tangent
function calculateTan() {
    try {
        display.value = Math.tan(eval(display.value) * (Math.PI / 180)); // Convert to radians
        isResultShown = true;
    } catch (error) {
        display.value = 'Error';
    }
}
//Developed By Asobola Donor.Property of Israel tek
// Currency conversion logic
const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, UGX: 3000 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, UGX: 3520 },
    GBP: { USD: 1.33, EUR: 1.14, GBP: 1, UGX: 4000 },
    UGX: { USD: 0.00033, EUR: 0.00028, GBP: 0.00025, UGX: 1 },
};

// Convert currency
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;

    if (!isNaN(amount)) {
        const convertedAmount = (amount * exchangeRates[from][to]).toFixed(2);
        document.getElementById('conversionResult').innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
        document.getElementById('conversionResult').innerText = 'Enter a valid amount.';
    }
}

// Toggle converter visibility
function toggleConverter() {
    const converter = document.getElementById('converter');
    converter.classList.toggle('hidden');
}
var name="asoboladonor"
console.log(name)
var company="israeltek"
console.log(company)
var ownership="developed by asobola Donor. Israel tek :)"
console.log(ownership)
