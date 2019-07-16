export default (expenses) => {
  if (!expenses || expenses.length === 0) {
    return 0
  }
  const amounts = expenses.map((expense) => expense.amount)
  const totalAmounts = amounts.reduce((prevValue, actualValue) => {
    return prevValue + actualValue
  })
  return totalAmounts
}
