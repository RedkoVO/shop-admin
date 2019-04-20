import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import OrdersItem from '../../../../containers/Pages/Orders/OrdersItem'

import styles from './styles'

const Orders = ({ classes, ordersData, isMiniDisplay }) => (
  <div className={classes.root}>
    {!isMiniDisplay && (
      <div className={classes.header}>
        <div className={classes.id}>id</div>
        <div className={classes.name}>name</div>
        <div className={classes.email}>email</div>
        <div className={classes.phone}>phone</div>
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
  </div>
)

Orders.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Orders)
