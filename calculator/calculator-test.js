it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 30000, years: 4, rate: 8 })).toEqual(
    732.39
  )
  expect(
    calculateMonthlyPayment({ amount: 10000, years: 5, rate: 10 })
  ).toEqual(212.47)
})

// I researched this functionality on Stackoverflow
it('should return a result with 2 decimal places', function () {
  expect(
    calculateMonthlyPayment({ amount: 30000, years: 4, rate: 8 }).toString()
  ).toMatch(/^\d+\.\d\d$/)
})
