import compose from 'recompose/compose'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { fetchProducts } from '../../../redux/actions/products'

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
  productsData: state.products.products
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddProduct', 'setAddProduct', false),
  // withState('imagesUploaded', 'setImage', ''),
  withHandlers({
    handleUploadImage: ({ setImage }) => e => {
      // let reader = new FileReader()
      // reader.readAsDataURL(e.target.files[0])
      // reader.onload = () => {
      //   setImage(reader.result)
      // }
      // reader.onerror = (error) => {
      //   console.log('Error upload file:', error)
      // }
    },
    handleAddProduct: ({ setAddProduct, isAddProduct }) => () => {
      setAddProduct(!isAddProduct)
    },

    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        const data = {
          // image: imagesUploaded,
          ...variables
        }
        console.log('data', data)
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
