import { FETCH_PRODUCTS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH PRODUCTS */
export const fetchProducts = () => dispatch =>
  axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${gC.API_URL}/api/products`
  })
    .then(res => {
      dispatch(createFetchProductsSuccess(res.data))

      return res.data
    })
    .catch(error => {
      console.log('FETCH_PRODUCTS error', error)
    })

export const createFetchProductsSuccess = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: {
      products: data.models,
      success: data.success
    }
  }
}
