import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE
} from '../../actions/actionTypes'
import {
  addExpense,
  removeExpense,
  editExpense
} from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' })

  expect(action).toEqual({
    type: REMOVE_EXPENSE,
    id: 'abc123'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', { amount: 10, note: 'New note value' })

  expect(action).toEqual({
    type: EDIT_EXPENSE,
    id: 'abc123',
    updates: {
      amount: 10,
      note: 'New note value'
    }
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last month rent',
    amount: 109500,
    createdAt: 1000
  }
  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})