import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import products from './products'
import auth from './auth'

const appReducer = combineReducers({
  form,
  products,
  auth
})

export default (state, action) => appReducer(state, action)
