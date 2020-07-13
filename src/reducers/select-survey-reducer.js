import * as a from './../actions/ActionTypes'

export default (state = false, action) => {
  const { survey } = action
  switch (action.type) {
    case a.SELECT_SURVEY:
      return survey

    default: return state;
  }
}