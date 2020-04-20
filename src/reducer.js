import { BUY_CAKE, BUY_ICECREAM } from 'actions';
const initialState = {
    count: 0
}

// reducers specify how the app's state changes in response to actions sent to the store
// function that accepts state and action as arguments, and return the next state of the application
// (previousState, action ) => newState

export default (state = initialState, action = {}) => {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        }
      case 'DECREMENT':
        return {
          count: state.count - 1
        }
      default: 
        return state
    }
  }

  const initialStates = {
    numOfCakes : 10,
    numofIceCreams: 20
  }

  const reducer = (state = initialStates, action ) => {
    switch(action.type) {
      case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
      
      default : return state
    }
  }