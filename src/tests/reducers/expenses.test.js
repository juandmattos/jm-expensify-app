import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE
} from '../../actions/actionTypes'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = { type: REMOVE_EXPENSE , id: expenses[2].id }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[1]])
})

test('should not remove expense if id is not found', () => {
  const action = { type: REMOVE_EXPENSE , id: '-1' }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses])
})

test('should add expense', () => {
  const newExpense = {
    description: 'Internet',
    note: '',
    amount: 195000,
    createdAt: 2000
  }
  const action = { type: ADD_EXPENSE , expense: newExpense }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses, newExpense])
})

test('should edit expense', () => {
  const updates = {
    description: 'Internet'
  }
  const action = { type: EDIT_EXPENSE , id: expenses[0].id, updates }
  const state = expensesReducer(expenses, action)

  expect(state[0].description).toBe('Internet')
})

test('should not edit expense if id is not found', () => {
  const updates = {
    description: 'Internet'
  }
  const action = { type: EDIT_EXPENSE , id: '-1', updates }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses])
})
