import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { pure, withState, withHandlers } from 'recompose'
import withStyles from '@material-ui/core/styles/withStyles'

import Order from '../../../../../containers/Pages/Orders/Order'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'
import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const OrdersItem = ({ classes, data, isShowMoreInfo, handleShowMore }) => (
  <div className={classes.root} key={data.id}>
    <div className={classes.shortContent}>
      <div className={classes.id}>id: {data.id}</div>
      <div className={classes.name}>name: {data.name}</div>
      <div className={classes.email}>email: {data.email}</div>
      <div className={classes.phone}>phone: {data.phone}</div>

      <div className={classes.wrRightButtons}>
        {false ? (
          <div className={classes.wrConfirmationRemove}>
            {/* <div onClick={() => handleRemoveProduct(data.id)}>DELETE</div> */}
            {/* <div onClick={() => handleConfirmRemoveProduct()}>CANCEL</div> */}
          </div>
        ) : (
          <img
            src={RemoveIcon}
            className={classes.remove}
            // onClick={() => handleRemoveProduct(data.id)}
            // onClick={() => handleConfirmRemoveProduct()}
            alt="remove"
          />
        )}

        <img
          src={ShowMoreIcon}
          className={classes.showMoreIcon}
          onClick={() => handleShowMore()}
          alt="show more"
        />
      </div>
    </div>

    {isShowMoreInfo && (
      <div className={classes.moreContent}>
        <div className={classes.moreItem}>
          <Order id={data.id} />
        </div>
      </div>
    )}
  </div>
)

OrdersItem.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMoreInfo: PropTypes.bool,
  handleShowMore: PropTypes.func
}

export default compose(
  withStyles(styles),
  withState('isShowMoreInfo', 'setShowMore', false),
  withHandlers({
    handleShowMore: ({ isShowMoreInfo, setShowMore }) => () => {
      setShowMore(!isShowMoreInfo)
    }
  }),
  pure
)(OrdersItem)
