import { FETCH_PRODUCTS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH PRODUCTS */
export const fetchProducts = () => dispatch => {
  const token = localStorage.getItem('token')

  return axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      token: token ? token : ''
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
}

export const createFetchProductsSuccess = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: {
      products: data.models,
      success: data.success
    }
  }
}

/* CREATE PRODUCT */
export const createProduct = data => dispatch => {
  const token = localStorage.getItem('token')
  const bodyFormData = new FormData()
  bodyFormData.set('title', data.title)
  bodyFormData.set('price', data.price)
  bodyFormData.set('oldPrice', data.oldPrice)
  bodyFormData.set('description', data.description)

  data.images.map((item, index) => {
    bodyFormData.set(`images[${index}]`, item)
  })
  
  return axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': `multipart/form-data`,
      http_x_rest_method: 'PUT',
      token: token ? token : ''
    },
    data: bodyFormData,
    url: `${gC.API_URL}/api/products`
  })
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.log('CREATE_PRODUCT error', error)
    })
}

/* UPDATE PRODUCT */
export const updateProduct = data => dispatch => {
  const token = localStorage.getItem('token')
  const bodyFormData = new FormData()
  bodyFormData.set('id', data.id)
  bodyFormData.set('title', data.title)
  bodyFormData.set('price', data.price)
  bodyFormData.set('oldPrice', data.oldPrice)
  bodyFormData.set('description', data.description)

  return axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': `multipart/form-data`,
      token: token ? token : ''
    },
    data: bodyFormData,
    url: `${gC.API_URL}/api/products?id=${data.id}`
  })
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.log('UPDATE_PRODUCT error', error)
    })
}

/* REMOVE PRODUCT */
export const removeProduct = id => dispatch => {
  const token = localStorage.getItem('token')

  return axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': `multipart/form-data`,
      http_x_rest_method: 'DELETE',
      token: token ? token : ''
    },
    url: `${gC.API_URL}/api/products?id=${id}`
  })
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.log('REMOVE_PRODUCT error', error)
    })
}

/* UPDATE IMAGES PRODUCT */
export const updateImagesProduct = (images, id) => dispatch => {
  const token = localStorage.getItem('token')
  const bodyFormData = new FormData()

  images.map((item, index) => {
    bodyFormData.set(`images[${index}]`, item)
  })
  
  return axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': `multipart/form-data`,
      token: token ? token : ''
    },
    data: bodyFormData,
    url: `${gC.API_URL}/api/products/image?id=${id}`
  })
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.log('UPDATE_IMAGES_PRODUCT error', error)
    })
}

/* DELETE IMAGES PRODUCT */
export const deleteImagesProduct = (src, id) => () => {
  const token = localStorage.getItem('token')
  
  return axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': `application/x-www-form-urlencoded`,
      http_x_rest_method: 'DELETE',
      token: token ? token : ''
    },
    url: `${gC.API_URL}/api/products/image?id=${id}&image=${src}`
  })
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.log('DELETE_IMAGES_PRODUCT error', error)
    })
}
