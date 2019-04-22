import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'
import TextField from '../../../../App/Form/TextField'
import InputFileUpload from '../../../../App/Form/InputFileUpload'
import EditableField from '../../../../App/Form/EditableField'
import EditableTextField from '../../../../App/Form/EditableTextField'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'
import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const Product = ({
  classes,
  data,
  isConfirmRemoveProduct,
  handleShowMore,
  handleRemoveProduct,
  handleUpdateImages,
  handleDeleteImage,
  handleConfirmRemoveProduct,
  isShowMore,
  onSubmit
}) => (
  <div className={classes.root} key={data.id}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.shortContent}>
        <div className={cn(classes.id, 'field')}>id: {data.id}</div>
        <div className={cn(classes.title, classes.alowEdit, 'field')}>
          title:
          <EditableField
            text={data.title}
            fieldId="title"
            fieldName="title"
            type="text"
            component={InputField}
            placeholder="Title"
            className={classes.fieldEdit}
            formName={`product-${data.id}`}
          />
        </div>
        <div className={cn(classes.price, classes.alowEdit, 'field')}>
          price:
          <EditableField
            text={data.price}
            fieldId="price"
            fieldName="price"
            type="number"
            component={InputField}
            placeholder="Price"
            className={classes.fieldEdit}
            inputStyle={classes.fieldPrice}
            formName={`product-${data.id}`}
          />
        </div>
        <div className={cn(classes.price, classes.alowEdit, 'field')}>
          oldPrice:
          <EditableField
            text={data.email}
            fieldId="oldPrice"
            fieldName="oldPrice"
            type="number"
            component={InputField}
            placeholder="Old price"
            className={classes.fieldEdit}
            inputStyle={classes.fieldPrice}
            formName={`product-${data.id}`}
          />
        </div>
        <div className={cn(classes.image, 'field')}>
          <img src={data.images[0]} alt="" />
        </div>

        <div className={classes.wrRightButtons}>
          {isConfirmRemoveProduct ? (
            <div className={classes.wrConfirmationRemove}>
              <div onClick={() => handleRemoveProduct(data.id)}>DELETE</div>
              <div onClick={() => handleConfirmRemoveProduct()}>CANCEL</div>
            </div>
          ) : (
            <img
              src={RemoveIcon}
              className={classes.remove}
              onClick={() => handleConfirmRemoveProduct()}
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

      {isShowMore && (
        <div className={classes.moreContent}>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>description:</span>
            <EditableTextField
              text={data.description}
              fieldId="description"
              fieldName="description"
              component={TextField}
              placeholder="Description"
              className={classes.fieldEditDescription}
              formName={`product-${data.id}`}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>images:</span>

            {data.images &&
              data.images.map((item, index) => (
                <div className={classes.wrImageItem} key={index}>
                  <img className={classes.imagesItem} src={item} alt="" />

                  <img
                    src={RemoveIcon}
                    className={classes.removeItemImage}
                    onClick={() => handleDeleteImage(item)}
                    alt="remove"
                  />
                </div>
              ))}

            <Field
              name="images"
              type="file"
              component={InputFileUpload}
              className={classes.file}
              onChange={e => handleUpdateImages(e)}
              multiple
              accept=".jpg, .png, .jpeg"
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
  isConfirmRemoveProduct: PropTypes.bool,
  isShowMore: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
  handleDeleteImage: PropTypes.func.isRequired,
  handleUpdateImages: PropTypes.func.isRequired,
  handleConfirmRemoveProduct: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Product)
