import { FETCH_ORDERS } from '../actions/types'

const initialState = {
  orders: []
}

const orders = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: payload.orders,
        page: payload.page,
        pages: payload.pages
      }
    default:
      return state
  }
}

export default orders
