import moment from 'moment'
import filterReducer from '../../reducers/filters'
import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from '../../actions/actionTypes'

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
})

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: SORT_BY_AMOUNT })

  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
  const action = { type: SORT_BY_DATE }
  const state = filterReducer(currentState, action)

  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = filterReducer(undefined, { type: SET_TEXT_FILTER, text: 'example text' })

  expect(state.text).toBe('example text')
})

test('should set start date filter', () => {
  const state = filterReducer(undefined, { type: SET_START_DATE, startDate: moment(0) })

  expect(state.startDate).toEqual(moment(0))
})

test('should set end date filter', () => {
  const state = filterReducer(undefined, { type: SET_END_DATE, endDate: moment(0) })

  expect(state.endDate).toEqual(moment(0))
})
