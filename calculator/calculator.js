window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form')
  if (form) {
    setupIntialValues()
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      update()
    })
  }
})

// ----- Get the inputs from the DOM.
const loan = document.querySelector('#loan-amount')
const years = document.querySelector('#loan-years')
const rate = document.querySelector('#loan-rate')
const monthlyPayment = document.querySelector('#monthly-payment')

function getCurrentUIValues() {
  return {
    amount: loan.value,
    years: years.value,
    rate: rate.value,
  }
}

// ----- Put some default values in the inputs
// loan.value = 30000
// years.value = 4
// rate.value = 10.0

// ----- Call a function to calculate the current monthly payment
function setupIntialValues() {
  loan.value = 0
  years.value = 0
  rate.value = 0
}

// ----- Get the current values from the UI
// ----- Update the monthly payment
function update() {
  const loanParams = getCurrentUIValues()
  const monthlyPayment = calculateMonthlyPayment(loanParams)
  if (monthlyPayment) {
    updateMonthly(monthlyPayment)
  } else {
    alert('All values must be a number')
  }
  console.log(monthlyPayment)
}

// ----- Given an object of values (a value has amount, years and rate ),
// ----- calculate the monthly payment.  The output should be a string
// ----- that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const { amount, rate, years } = values
  const yearlyInterestRate = rate / 100 / 12 // Yearly interest rate / 12
  const totalNumPayments = years * 12 // total number of payments

  if (isNaN(amount) || isNaN(totalNumPayments) || isNaN(yearlyInterestRate))
    return null

  const monthlyPayment = parseFloat(
    (amount * yearlyInterestRate) /
      (1 - Math.pow(1 + yearlyInterestRate, -totalNumPayments))
  ).toFixed(2)

  return parseFloat(monthlyPayment)
}

// ----- Given a string representing the monthly payment value,
// ----- update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPayment.textContent = `$${monthly}`
}
