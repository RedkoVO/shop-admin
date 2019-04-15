import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Product from '../../../../containers/Pages/Products/Product'
import AddNewProduct from '../components/AddNewProduct'

import styles from './styles'

const Products = ({
  classes,
  productsData,
  isAddProduct,
  handleAddProduct,
  handleUploadImage,
  onSubmit
}) => (
  <div className={classes.root}>
    <div className={classes.headerProducts}>
      <div className={classes.wrButtons}>
        <div className={classes.addProduct} onClick={() => handleAddProduct()}>
          Add
        </div>
      </div>
    </div>

    {isAddProduct && (
      <AddNewProduct
        onSubmit={onSubmit}
        handleUploadImage={handleUploadImage}
      />
    )}

    {productsData &&
      productsData.map(item => (
        <Product id={item.id} data={item} key={item.id} />
      ))}
  </div>
)

Products.propTypes = {
  classes: PropTypes.object,
  productsData: PropTypes.array,
  isAddProduct: PropTypes.bool,
  handleAddProduct: PropTypes.func,
  handleUploadImage: PropTypes.func,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(Products)
