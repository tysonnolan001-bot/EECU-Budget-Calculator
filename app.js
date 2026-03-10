const expenseInput = document.getElementById("exp1");



// Add listener to find the value income_input

let needsExpenses = 0;
let wantsExpenses = 0;
let savingsExpenses = 0;
let totalExpenses = 0;

const input_value = expenseInput;

const need_target = input_value / 2;
const wants_target = input_value * 0.3;
const savings_target = input_value * 0.2;


function calculateFederalTax(taxableIncome) { 
    let tax = 0;

    if (taxableIncome <= 12400) {
        tax = taxableIncome * 0.10;
    } 
    else if (taxableIncome <= 50400) {
        tax = (12400 * 0.10) +
              ((taxableIncome - 12400) * 0.12);
    } 
    else {
        tax = (12400 * 0.10) +
              ((50400 - 12400) * 0.12) +
              ((taxableIncome - 50400) * 0.22);
    }

    return tax;
}