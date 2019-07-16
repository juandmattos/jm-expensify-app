import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('should render ExpensesSummary', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenses.length}
      expensesTotal={selectExpensesTotal(expenses)}
    />
  )

  expect(wrapper).toMatchSnapshot()
})