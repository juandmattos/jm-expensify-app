import { createStore } from 'redux'

// Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
  console.log('running..')
  const { count } = state

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// ACTIONS

// Increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })


store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())

// Decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(decrementCount())


// store.dispatch({
//   type: 'SET',
//   count: 101
// })

// Set the count
store.dispatch(setCount({ count: 101 }))

// Reset the count
store.dispatch(resetCount())

unsubscribe()

store.dispatch(incrementCount({ incrementBy: 5 }))