import { FETCH_PRODUCTS } from '../actions/types'

const initialState = {
  products: []
}

const products = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_PRODUCTS:

      return {
        ...state,
        products: payload.products
      }
    default:
      return state
  }
}

export default products
