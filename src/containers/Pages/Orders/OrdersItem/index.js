import compose from 'recompose/compose'
import { pure, withState, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { fetchOrders, updateOrder, removeOrder } from '../../../../redux/actions/orders'

import OrdersItem from '../../../../components/Pages/Orders/components/OrdersItem'

const FORM_NAME = 'ordersItem'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    name: ownProps.data.name,
    email: ownProps.data.email,
    phone: ownProps.data.phone
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isShowMoreInfo', 'setShowMore', false),
  withState('isConfirmRemoveOrder', 'setConfirmRemoveOrder', false),
  withHandlers({
    handleShowMore: ({ isShowMoreInfo, setShowMore }) => () => {
      setShowMore(!isShowMoreInfo)
    },

    handleConfirmRemoveOrder: ({
      isConfirmRemoveOrder,
      setConfirmRemoveOrder
    }) => () => {
      setConfirmRemoveOrder(!isConfirmRemoveOrder)
    },

    handleRemoveOrder: ({ dispatch }) => id => {
      console.log('csfdsfdsf')
      dispatch(removeOrder(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchOrders())
          }
        })
        .catch(err => {
          console.log('Error delete:', err)
        })
    },

    onSubmit: ({ dispatch, handleSubmit, id }) =>
      handleSubmit(variables => {
        const data = {
          name: variables.name,
          email: variables.email,
          phone: variables.phone
        }

        dispatch(updateOrder(data, id))
          .then(res => {
            if (res.success) {
              dispatch(fetchOrders())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(OrdersItem)
