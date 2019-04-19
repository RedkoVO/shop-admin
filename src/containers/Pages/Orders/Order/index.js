import compose from 'recompose/compose'
import { lifecycle, pure, withState } from 'recompose'
import { connect } from 'react-redux'

import { getOrder } from '../../../../redux/actions/orders'

import Product from '../../../../components/Pages/Orders/components/Order'

export default compose(
  connect(),
  withState('orderData', 'setOrderData', []),
  lifecycle({
    componentDidMount() {
      const { dispatch, id, setOrderData } = this.props

      dispatch(getOrder(id))
        .then(res => {
          if (res.success) {
            setOrderData(res.models)
          }
        })
        .catch(err => {
          console.log('Error order:', err)
        })
    }
  }),
  pure
)(Product)
