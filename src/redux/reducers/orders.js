import { FETCH_ORDERS, GET_ORDERS } from '../actions/types'

const initialState = {
  orders: []
}

const orders = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: payload.orders
      }
    default:
      return state
  }
}

export default orders
