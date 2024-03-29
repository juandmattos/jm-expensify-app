import uuid from 'uuid'
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE
} from './actionTypes'

export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

export const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id
})

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
})
