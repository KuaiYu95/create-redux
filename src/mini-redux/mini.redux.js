
export function createStore(reducer) {
  let currentState = {}
  let currentListeners = []

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    currentListeners.push(listener)
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(v => {
      console.log('执行：', action.type)
      v()
    })
    return action
  }

  dispatch({type: '@REACT_FIRST_ACTION'})
  return { getState, subscribe, dispatch }
}