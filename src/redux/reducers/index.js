import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import products from './products'
import auth from './auth'
import orders from './orders'

const appReducer = combineReducers({
  form,
  products,
  orders,
  auth
})

export default (state, action) => appReducer(state, action)
