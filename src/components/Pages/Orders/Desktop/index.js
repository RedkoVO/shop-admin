import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import OrdersItem from '../components/OrdersItem'

import styles from './styles'

const Orders = ({ classes, ordersData }) => (
  <div className={classes.root}>
    {ordersData &&
      ordersData.map(item => (
        <OrdersItem id={item.id} data={item} key={item.id} />
      ))}
  </div>
)

Orders.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Orders)
