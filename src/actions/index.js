import * as a from './../actions/ActionTypes'

export const selectSurvey = (survey) => ({
  type: a.SELECT_SURVEY,
  survey
})