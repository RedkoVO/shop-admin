import { compose, withProps } from 'recompose'

export default compose(
  withProps(() => {
    return {
      token: localStorage.getItem('token')
    }
  }),
)
