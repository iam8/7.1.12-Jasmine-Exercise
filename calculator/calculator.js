// Ioana A Mititean
// 10/05/22
// 7.1.12: Jasmine Testing Exercise

// After DOM is loaded, set up initial input values and add a submit event listener to the form
window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            update();
        });
    }
});

// Retrieve the text input values (user input) from the DOM
function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const ui_values = getCurrentUIValues();
    return calculateMonthlyPayment(ui_values);
}

// Given an object of values (a value has amount, years and rate ), calculate the monthly payment.
// The output should be a string that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    if (values.amount < 0 || values.rate < 0 || values.years < 0) {
        throw new Error("Input amounts cannot be negative.");
    }

    if (values.rate === 0 || values.years === 0) {
        throw new Error("Yearly rate and number of years must be greater than 0.")
    }


    const principle = values.amount;
    const interest_rate = values.rate / 12;
    const num_payments = values.years * 12;

    return (principle * interest_rate) / (1 - (1 + interest_rate)**(-num_payments));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
