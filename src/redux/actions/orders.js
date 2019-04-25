import { FETCH_ORDERS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH ORDERS */
export const fetchOrders = (page, order) => async dispatch => {
  const token = localStorage.getItem('token')

  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        token: token ? token : ''
      },
      url: `${gC.API_URL}/api/orders?page=${page ? page : 1}${
        order ? '&order=' : ''
      }${order ? order : ''}`
    })
    dispatch(createFetchOrdersSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_ORDERS error', error)
  }
}

export const createFetchOrdersSuccess = data => {
  return {
    type: FETCH_ORDERS,
    payload: {
      orders: data.models,
      page: data.page,
      pages: data.pages,
      success: data.success
    }
  }
}

/* UPDATE ORDER */
export const updateOrder = (data, id) => async () => {
  const token = localStorage.getItem('token')

  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        token: token ? token : ''
      },
      data: data,
      url: `${gC.API_URL}/api/orders?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_ORDER error', error)
  }
}

/* REMOVE ORDER */
export const removeOrder = id => async () => {
  const token = localStorage.getItem('token')

  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        http_x_rest_method: 'DELETE',
        token: token ? token : ''
      },
      url: `${gC.API_URL}/api/orders?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_ORDER error', error)
  }
}

/* GET ORDER */
export const getOrder = id => async () => {
  const token = localStorage.getItem('token')

  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        token: token ? token : ''
      },
      url: `${gC.API_URL}/api/order-items?checkout_id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('GET_ORDER error', error)
  }
}
