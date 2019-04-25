import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-js-pagination'
import withStyles from '@material-ui/core/styles/withStyles'

import gC from '../../../../constants'

import OrdersItem from '../../../../containers/Pages/Orders/OrdersItem'

import SortIcon from '../../../../assets/images/order.png'

import styles from './styles'

const Orders = ({
  classes,
  ordersData,
  isMiniDisplay,
  hangleSortItem,
  handlePageChange,
  activePage,
  pages
}) => (
  <div className={classes.root}>
    {!isMiniDisplay && (
      <div className={classes.header}>
        <div className={classes.id}>id</div>
        <div className={classes.name}>name</div>
        <div className={classes.email}>email</div>
        <div className={classes.phone}>phone</div>
        <div className={classes.sort} onClick={() => hangleSortItem('id')}>
          <img src={SortIcon} alt="" />
        </div>
      </div>
    )}

    {ordersData &&
      ordersData.map(item => (
        <OrdersItem
          data={item}
          key={item.id}
          id={item.id}
          isMiniDisplay={isMiniDisplay}
        />
      ))}

    <div className={classes.pagination}>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={gC.pagination.itemPerPage}
        totalItemsCount={pages * gC.pagination.itemPerPage}
        pageRangeDisplayed={gC.pagination.pageRangeDisplayed}
        onChange={page => handlePageChange(page)}
      />
    </div>
  </div>
)

Orders.propTypes = {
  classes: PropTypes.object,
  activePage: PropTypes.number,
  page: PropTypes.number,
  pages: PropTypes.number,
  handlePageChange: PropTypes.func,
  hangleSortItem: PropTypes.func
}

export default withStyles(styles)(Orders)
