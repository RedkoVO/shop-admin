import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import Order from '../../../../../containers/Pages/Orders/Order'
import InputField from '../../../../App/Form/InputField'
import EditableField from '../../../../App/Form/EditableField'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'
import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const OrdersItem = ({
  classes,
  data,
  isShowMoreInfo,
  isConfirmRemoveOrder,
  handleShowMore,
  handleRemoveOrder,
  handleConfirmRemoveOrder,
  onSubmit,
  isMiniDisplay
}) => (
  <div className={classes.root}>
    <Form className={classes.shortContent} onSubmit={onSubmit}>
      <div className={cn(classes.id, 'field')}>
        {isMiniDisplay && 'id:'} {data.id}
      </div>

      <div className={cn(classes.name, classes.alowEdit, 'field')}>
        {isMiniDisplay && 'name:'}
        <EditableField
          text={data.name}
          fieldId="name"
          fieldName="name"
          type="text"
          component={InputField}
          placeholder="Name"
          className={classes.fieldEdit}
          formName={`ordersItem-${data.id}`}
        />
      </div>

      <div className={cn(classes.email, classes.alowEdit, 'field')}>
        {isMiniDisplay && 'email:'}
        <EditableField
          text={data.email}
          fieldId="email"
          fieldName="email"
          type="email"
          component={InputField}
          placeholder="Email"
          className={classes.fieldEdit}
          formName={`ordersItem-${data.id}`}
        />
      </div>

      <div className={cn(classes.phone, classes.alowEdit, 'field')}>
        {isMiniDisplay && 'phone:'}
        <EditableField
          text={data.phone}
          fieldId="phone"
          fieldName="phone"
          type="text"
          component={InputField}
          placeholder="Phone"
          className={classes.fieldEdit}
          formName={`ordersItem-${data.id}`}
        />
      </div>

      <div className={classes.wrRightButtons}>
        {isConfirmRemoveOrder ? (
          <div className={classes.wrConfirmationRemove}>
            <div onClick={() => handleRemoveOrder(data.id)}>DELETE</div>
            <div onClick={() => handleConfirmRemoveOrder()}>CANCEL</div>
          </div>
        ) : (
          <img
            src={RemoveIcon}
            className={classes.remove}
            onClick={() => handleConfirmRemoveOrder()}
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
    </Form>

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
  isConfirmRemoveOrder: PropTypes.bool,
  handleShowMore: PropTypes.func,
  onSubmit: PropTypes.func,
  handleRemoveOrder: PropTypes.func,
  handleConfirmRemoveOrder: PropTypes.func
}

export default withStyles(styles)(OrdersItem)
