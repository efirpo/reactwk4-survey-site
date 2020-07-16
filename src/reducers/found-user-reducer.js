import * as a from './../actions/ActionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case a.FOUND_USER:
      return !state
    default: return state
  }
}