import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'
import InputFileUpload from '../../../../App/Form/InputFileUpload'

import EditableField from '../../../../App/Form/EditableField'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'

import styles from './styles'

const Product = ({ classes, data, handleShowMore, isShowMore, onSubmit }) => (
  <div className={classes.root} key={data.id}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.shortContent}>
        <div className={classes.id}>id: {data.id}</div>
        <div className={cn(classes.username, classes.alowEdit)}>
          title:
          <EditableField
            text={data.title}
            fieldId="title"
            fieldName="title"
            type="text"
            component={InputField}
            placeholder="Title"
            className={classes.fieldEdit}
          />
        </div>
        <div className={cn(classes.price, classes.alowEdit)}>
          price:
          <EditableField
            text={data.price}
            fieldId="price"
            fieldName="price"
            type="number"
            component={InputField}
            placeholder="Price"
            className={classes.fieldEdit}
          />
        </div>
        <div className={cn(classes.price, classes.alowEdit)}>
          oldPrice:
          <EditableField
            text={data.email}
            fieldId="oldPrice"
            fieldName="oldPrice"
            type="number"
            component={InputField}
            placeholder="Old price"
            className={classes.fieldEdit}
          />
        </div>
        <div className={classes.image}>
          <img src={data.images[0]} alt="" />
        </div>
        <img
          src={ShowMoreIcon}
          className={classes.showMoreIcon}
          onClick={() => handleShowMore()}
          alt="show more"
        />
      </div>

      {isShowMore && (
        <div className={classes.moreContent}>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>description:</span>
            <EditableField
              text={data.description}
              fieldId="description"
              fieldName="description"
              type="text"
              component={InputField}
              placeholder="Description"
              className={classes.fieldEdit}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>description:</span>
            <Field
              name="image"
              type="file"
              component={InputFileUpload}
              className={classes.file}
            />
          </div>
        </div>
      )}
    </Form>
  </div>
)

Product.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMore: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Product)
