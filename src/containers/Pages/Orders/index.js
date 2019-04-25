import compose from 'recompose/compose'
import { lifecycle, pure, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'

import withDeviceTarget from '../../../hocs/withDeviceTarget'

import { fetchOrders } from '../../../redux/actions/orders'

import Orders from '../../../components/Pages/Orders/Desktop'

const mapStateToProps = state => ({
  ordersData: state.orders.orders,
  page: state.orders.page,
  pages: state.orders.pages
})

export default compose(
  connect(mapStateToProps),
  withDeviceTarget,
  withState('activePage', 'setPage', 1),
  withState('isSort', 'setSort', false),
  withHandlers({
    hangleSortItem: ({ dispatch, activePage, isSort, setSort }) => sort => {
      const sortMark = isSort ? `-${sort}` : sort
      dispatch(fetchOrders(activePage, sortMark))
      setSort(!isSort)
    },
    handlePageChange: ({ setPage, dispatch }) => pageNumber => {
      setPage(pageNumber)
      dispatch(fetchOrders(pageNumber))
    }
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchOrders())
    }
  }),
  pure
)(Orders)
