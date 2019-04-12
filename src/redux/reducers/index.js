import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const appReducer = combineReducers({
  form
})

export default (state, action) => appReducer(state, action)
