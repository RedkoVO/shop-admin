import compose from 'recompose/compose'
import { lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'

import withDeviceTarget from '../../../hocs/withDeviceTarget'

import { fetchOrders } from '../../../redux/actions/orders'

import Orders from '../../../components/Pages/Orders/Desktop'

// const mockData = [
//   {
//     id: 1,
//     name: 'Vladyslav Redko',
//     email: 'test_test_test_123@test.com',
//     phone: '+380999999999',
//     title: '1499',
//     createdAt: '2019-03-18 13:55:45.942344'
//   },
//   {
//     id: 2,
//     name: 'Vladyslav Redko',
//     email: 'test@test.com',
//     phone: '+380999999988',
//     title: '1499',
//     createdAt: '2019-03-18 13:55:45.942344'
//   },
//   {
//     id: 3,
//     name: 'Vladyslav Test',
//     email: 'test_test_test_123333@test.com',
//     phone: '+380999779999',
//     title: '1499',
//     createdAt: '2019-03-18 13:55:45.942344'
//   },
//   {
//     id: 4,
//     name: 'Vladyslav Redko 100',
//     email: 'test_test_test_123@test.com',
//     phone: '+380999777999',
//     title: '1499',
//     createdAt: '2019-03-18 13:55:45.942344'
//   },
//   {
//     id: 5,
//     name: 'Vladyslav Redko',
//     email: 'test_test_test_123@test.com',
//     phone: '+380993339999',
//     title: '399',
//     createdAt: '2019-03-18 13:55:45.942344'
//   },
//   {
//     id: 6,
//     name: 'Vladyslav Redko',
//     email: 'test_test_test_123@test.com',
//     phone: '+380991111111',
//     title: '2999',
//     createdAt: '2019-03-18 13:55:45.942344'
//   }
// ]

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
  // withProps(() => ({
  //   ordersData: mockData
  // })),
  pure
)(Orders)
