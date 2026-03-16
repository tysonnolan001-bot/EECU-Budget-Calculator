const needsExpensesInputs = Array.from(document.querySelectorAll('.needs-tab .expenses-section input'));
const wantsExpensesInputs = Array.from(document.querySelectorAll('.wants-tab .expenses-section input'));
const savingsExpensesInputs = Array.from(document.querySelectorAll('.savings-tab .expenses-section input'));
const allExpenseInputs = needsExpensesInputs.concat(wantsExpensesInputs.concat(savingsExpensesInputs));
// add consts for updating screen, all the expense display boxes
const needsExpensesDisplay = document.querySelector('.needs-tab .expense-total div');
const wantsExpensesDisplay = document.querySelector('.wants-tab .expense-total div');
const savingsExpensesDisplay = document.querySelector('.savings-tab .expense-total div');
const needsExpensesDisplay2 = document.querySelector('#needs-total');
const wantsExpensesDisplay2 = document.querySelector('#wants-total');
const savingsExpensesDisplay2 = document.querySelector('#savings-total');
const totalExpenseDisplay = document.querySelector('#total');

console.log(needsExpensesDisplay);
console.log(wantsExpensesDisplay);
console.log(savingsExpensesDisplay);


// Add listener to find the value income_input

let needsExpenses = 0;
let wantsExpenses = 0;
let savingsExpenses = 0;
let totalExpenses = 0;
let income = 0;

const need_target = income * 0.5;
const wants_target = income * 0.3;
const savings_target = income * 0.2;


//functions
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

function setInputEventListeners() {
    for (input of allExpenseInputs) {
        input.addEventListener('change', () => {
            calculateAllExpenses();
            updateScreen();
        })
    }
}

function calculateAllExpenses() {
    needsExpenses = 0;
    wantsExpenses = 0;
    savingsExpenses = 0;
    totalExpenses = 0;
    for (input of needsExpensesInputs) {
        needsExpenses = needsExpenses + Number(input.value);
    }
    for (input of wantsExpensesInputs) {
        wantsExpenses = wantsExpenses + Number(input.value);
    }
    for (input of savingsExpensesInputs) {
        savingsExpenses = savingsExpenses + Number(input.value);
    }
    totalExpenses = needsExpenses + wantsExpenses + savingsExpenses;
}

function updateScreen() {
    needsExpensesDisplay.innerHTML = needsExpenses;
    wantsExpensesDisplay.innerHTML = wantsExpenses;
    savingsExpensesDisplay.innerHTML = savingsExpenses;
    needsExpensesDisplay2.value = needsExpenses;
    wantsExpensesDisplay2.value = wantsExpenses;
    savingsExpensesDisplay2.value = savingsExpenses;
    totalExpenseDisplay.value = totalExpenses;
}

function pieChart() {
   
  
    return {
      type: "pie",
      data: {
        labels: ["Needs", "Wants", "Savings"],
        datasets: [{ label: "Expenses", data: [needsExpenses, wantsExpenses, savingsExpenses] }]
      },
      options: {
        plugins: {
          title: { display: true, text: `Expenses`}
        }
      }
    };
  }

  const data = {
    labels: [
      'Needs',
      'Wants',
      'Savings'
    ],
    datasets: [{
      label: 'Expenses to Need',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

const config = {
    type: 'pie',
    data: data,
  };

const myChart = new Chart(ctx, config);
myChart.data.datasets[0].data[2] = 50;

//Event Listeners
setInputEventListeners();

//Initialization
updateScreen();

//Chart Update
myChart.update('none');