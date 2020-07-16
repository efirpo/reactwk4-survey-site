import * as a from './../actions/ActionTypes'

export const selectSurvey = (survey) => ({
  type: a.SELECT_SURVEY,
  survey
})

export const toggleForm = () => ({
  type: a.TOGGLE_FORM
})

export const foundUser = () => ({
  type: a.FOUND_USER
})