import compose from 'recompose/compose'
import { lifecycle, pure, withState } from 'recompose'
import { connect } from 'react-redux'

import { getOrder } from '../../../../redux/actions/orders'

import Order from '../../../../components/Pages/Orders/components/Order'

// const mockData = [
//   {
//     id: 1,
//     quantity: '10',
//     product: {
//       title: 'Super FURY',
//       price: '1499',
//       images: ['/images/test.png'],
//       description:
//         'Add here some interesting details about the product. Help people realized that this product is exactly what they need. It could be practical and useful information as well: size of the product, material that it is made of or care instructions.'
//     }
//   },
//   {
//     id: 2,
//     quantity: '10',
//     product: {
//       title: 'Super FURY',
//       price: '1499',
//       images: ['/images/test.png'],
//       description:
//         'Add here some interesting details about the product. Help people realized that this product is exactly what they need. It could be practical and useful information as well: size of the product, material that it is made of or care instructions.'
//     }
//   }
// ]

export default compose(
  connect(),
  withState('orderData', 'setOrderData', []),
  lifecycle({
    componentDidMount() {
      const { dispatch, id, setOrderData } = this.props

      dispatch(getOrder(id))
        .then(res => {
          if (res.success) {
            setOrderData(res.models)
          }
        })
        .catch(err => {
          console.log('Error order:', err)
        })
    }
  }),
  // withProps(() => ({
  //   orderData: mockData
  // })),
  pure
)(Order)
