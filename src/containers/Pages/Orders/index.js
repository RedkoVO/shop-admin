import compose from 'recompose/compose'
import { lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'

import withDeviceTarget from '../../../hocs/withDeviceTarget'

import { fetchOrders } from '../../../redux/actions/orders'

import Orders from '../../../components/Pages/Orders/Desktop'

const mapStateToProps = state => ({
  ordersData: state.orders.orders
})

export default compose(
  connect(mapStateToProps),
  withDeviceTarget,
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchOrders())
    }
  }),
  pure
)(Orders)
