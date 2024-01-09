import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }

// if the state has multiple properties, all of them have to be set in the Reducer because we are returning the overall state object

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    // we should NEVER MUTATE THE EXISTING STATE

    // state.counter++;
    // return state;

    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
    // always overwrite it by returning a brand new state object in which we MUST ALWAYS SET THE ALL THE OTHER STATES WHEN WE UPDATE A PIECE OF STATE
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount, // property set in the dispatch function and now the reducer is dynamic
      showCounter: state.showCounter
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }
  return state
}

const store = createStore(counterReducer) // this creates our Redux Store

export default store // provide this store to the React app
