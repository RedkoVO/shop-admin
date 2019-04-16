import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchProducts,
  updateProduct,
  removeProduct,
  updateImagesProduct,
  deleteImagesProduct
} from '../../../../redux/actions/products'

import Product from '../../../../components/Pages/Products/components/Product'

const FORM_NAME = 'product'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    title: ownProps.data.title,
    price: ownProps.data.price,
    oldPrice: ownProps.data.oldPrice,
    description: ownProps.data.description
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isShowMore', 'setShowMore', false),
  withState('isConfirmRemoveProduct', 'setConfirmRemoveProduct', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveProduct: ({
      isConfirmRemoveProduct,
      setConfirmRemoveProduct
    }) => () => {
      setConfirmRemoveProduct(!isConfirmRemoveProduct)
    },

    handleRemoveProduct: ({ dispatch }) => id => {
      dispatch(removeProduct(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchProducts())
          }
        })
        .catch(err => {
          console.log('Error delete:', err)
        })
    },

    handleUpdateImages: ({ dispatch, data, setShowMore }) => e => {
      const images = []

      Array.from(e.target.files).forEach(item => {
        images.push(item)
      })

      dispatch(updateImagesProduct(images, data.id))
        .then(res => {
          if (res.success) {
            dispatch(fetchProducts())
            setShowMore(false)
          }
        })
        .catch(err => {
          console.log('Error create:', err)
        })
    },

    handleDeleteImage: ({ dispatch, data }) => src => {
      dispatch(deleteImagesProduct(src, data.id))
        .then(res => {
          if (res.success) {
            dispatch(fetchProducts())
            // setShowMore(false)
          }
        })
        .catch(err => {
          console.log('Error create:', err)
        })
    },

    onSubmit: ({ dispatch, handleSubmit, data }) =>
      handleSubmit(variables => {
        const dataReqest = {
          id: data.id,
          title: variables.title,
          price: variables.price,
          oldPrice: variables.oldPrice,
          description: variables.description
        }

        dispatch(updateProduct(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchProducts())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Product)
