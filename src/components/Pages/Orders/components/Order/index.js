import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Order = ({ classes, orderData }) => (
  <div className={classes.root}>
    {orderData &&
      orderData.map(item => (
        <div className={classes.wrOrderItem} key={item.id}>
          <div>id: {item.id}</div>
          <div>quantity: {item.quantity}</div>
          {item.product && (
            <div className={classes.wrProduct}>
              <div>title: {item.product.title}</div>
              <div className={classes.wrImage}>
                images: <img src={item.product.images[0]} alt="" />
              </div>
              <div>price: {item.product.price}</div>
              <div>description: {item.product.description}</div>
              <div className={classes.underlineProduct} />
            </div>
          )}
          <div className={classes.underline} />
        </div>
      ))}
  </div>
)

Order.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Order)
