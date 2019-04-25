import compose from 'recompose/compose'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'

import { fetchProducts, createProduct } from '../../../redux/actions/products'

import Products from '../../../components/Pages/Products/Desktop'

// const mockData = [
//   {
//     id: 1,
//     title: 'Serpent cube',
//     price: '999',
//     oldPrice: '1499',
//     description:
//       'Add here some interesting details about the product. Help people realized that this product is exactly what they need. It could be practical and useful information as well: size of the product, material that it is made of or care instructions.',
//     images: [
//       'https://static.tildacdn.com/tild3664-3733-4639-a531-346334306664/SnakeCubePuzzleWG0012.jpg',
//       'https://static.tildacdn.com/tild6130-6233-4061-b662-313064653163/IMG_4628.jpeg'
//     ],
//     createdAt: '2019-03-18 13:55:45.942344'
//   },
//   {
//     id: 2,
//     title: 'Tic tac toe 2D',
//     price: '1499',
//     oldPrice: '1699',
//     description:
//       'Add here some interesting details about the product. Help people realized that this product is exactly what they need. It could be practical and useful information as well: size of the product, material that it is made of or care instructions.',
//     images: [
//       'https://static.tildacdn.com/tild6438-6664-4535-b263-656264626666/XOXO2DWG214.jpeg'
//     ],
//     createdAt: '2019-03-18 13:55:45.942344'
//   }
// ]

const FORM_NAME = 'newProduct'

const mapStateToProps = state => ({
  productsData: state.products.products,
  page: state.products.page,
  pages: state.products.pages
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddProduct', 'setAddProduct', false),
  withState('imagesUploaded', 'setImage', []),
  withState('activePage', 'setPage', 1),
  withHandlers({
    handlePageChange: ({ setPage, dispatch }) => pageNumber => {
      setPage(pageNumber)
      dispatch(fetchProducts(pageNumber))
    },

    handleUploadImage: ({ setImage }) => e => {
      const images = []

      Array.from(e.target.files).forEach(item => {
        images.push(item)
      })

      setImage(images)
    },

    handleAddProduct: ({ setAddProduct, isAddProduct }) => () => {
      setAddProduct(!isAddProduct)
    },

    onSubmit: ({ imagesUploaded, dispatch, handleSubmit, setAddProduct }) =>
      handleSubmit(variables => {
        const data = {
          title: variables.title,
          price: variables.price,
          oldPrice: variables.oldPrice,
          description: variables.description,
          images: imagesUploaded
        }

        dispatch(createProduct(data))
          .then(res => {
            if (res.success) {
              dispatch(fetchProducts())
              setAddProduct(false)
              dispatch(reset(FORM_NAME))
            }
          })
          .catch(err => {
            console.log('Error create:', err)
          })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchProducts())
    }
  }),
  // withProps(() => ({ productsData: mockData })),
  pure
)(Products)
