import axios from 'axios'
import qs from 'qs'

import { CHECK_AUTH, LOGIN_USER, LOGOUT } from './types'

import gC from '../../constants'

/* CHECK AUTH */
export const checkAuth = () => dispatch => {
  const token = localStorage.getItem('token')

  return axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      token: token ? token : ''
    },
    url: `${gC.API_URL}/api/auth/admin-check`
  })
    .then(response => {
      dispatch(createCheckAuthSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('CHECK_AUTH error', error)
    })
}

export const createCheckAuthSuccess = data => {
  return {
    type: CHECK_AUTH,
    payload: {
      success: data.success,
      email: data.email
    }
  }
}
/* ********** */

/* LOGIN USER */
export const loginUser = data => () =>
  axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
    url: `${gC.API_URL}/api/auth/admin-login`
  })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('LOGIN_USER error', error)
    })

export const createLoginUserSuccess = data => {
  return {
    type: LOGIN_USER,
    payload: {
      success: data.success
    }
  }
}
/* ********** */

/* LOGOUT */
export const logout = () => dispatch =>
  axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${gC.API_URL}/api/auth/logout`
  })
    .then(response => {
      dispatch(createLogoutSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('LOGOUT error', error)
    })

export const createLogoutSuccess = data => {
  return {
    type: LOGOUT,
    payload: {
      success: data.success
    }
  }
}
/* ********** */
