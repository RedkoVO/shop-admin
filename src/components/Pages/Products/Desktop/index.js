import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-js-pagination'
import withStyles from '@material-ui/core/styles/withStyles'

import gC from '../../../../constants'

import Product from '../../../../containers/Pages/Products/Product'
import AddNewProduct from '../components/AddNewProduct'

import styles from './styles'

const Products = ({
  classes,
  productsData,
  isAddProduct,
  handleAddProduct,
  handleUploadImage,
  onSubmit,
  handlePageChange,
  activePage,
  pages
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

Products.propTypes = {
  classes: PropTypes.object,
  productsData: PropTypes.array,
  isAddProduct: PropTypes.bool,
  handleAddProduct: PropTypes.func,
  handleUploadImage: PropTypes.func,
  onSubmit: PropTypes.func,
  page: PropTypes.number,
  pages: PropTypes.number,
  handlePageChange: PropTypes.func
}

export default withStyles(styles)(Products)
