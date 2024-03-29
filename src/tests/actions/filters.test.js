import moment from 'moment'
import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from '../../actions/actionTypes'
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))

  expect(action).toEqual({
    type: SET_START_DATE,
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))

  expect(action).toEqual({
    type: SET_END_DATE,
    endDate: moment(0)
  })
})

test('should generate set text action object', () => {
  const action = setTextFilter('abc123')

  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: 'abc123'
  })
})

test('should generate default set text action object', () => {
  const action = setTextFilter()

  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: ''
  })
})

test('should generate sort by date action object', () => {
  const action = sortByDate()

  expect(action).toEqual({
    type: SORT_BY_DATE
  })
})

test('should generate sort by amount action object', () => {
  const action = sortByAmount()

  expect(action).toEqual({
    type: SORT_BY_AMOUNT
  })
})