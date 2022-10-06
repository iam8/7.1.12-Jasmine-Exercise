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

// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

    // Get the inputs from the DOM
    const amount_input = document.querySelector("#loan-amount");
    const years_input = document.querySelector("#loan-years");
    const rate_input = document.querySelector("#loan-rate");

    // Put some default values in the inputs
    amount_input.value = 100000;
    years_input.value = 10;
    rate_input.value = 0.08;

    // Calculate and update the current monthly payment
    update();
}

// Get the current values from the UI and update the monthly payment
function update() {
    const ui_values = getCurrentUIValues();
    const payment = calculateMonthlyPayment(ui_values);
    updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ), calculate the monthly payment.
// The output should be a string that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    if (Number.isNaN(values.amount) || Number.isNaN(values.rate) || Number.isNaN(values.years)) {
        throw new Error("Inputs must be numbers.")
    }

    if (values.amount < 0 || values.rate < 0 || values.years < 0) {
        throw new Error("Input amounts cannot be negative.");
    }

    if (values.rate === 0 || values.years === 0) {
        throw new Error("Yearly rate and number of years must be greater than 0.")
    }

    const principle = values.amount;
    const interest_rate = values.rate / 12;
    const num_payments = values.years * 12;

    const payment = (principle * interest_rate) / (1 - (1 + interest_rate)**(-num_payments));
    return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const payment_element = document.querySelector("#monthly-payment");
    payment_element.innerText = monthly;
}
