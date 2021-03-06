import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import { checkAuth } from '../redux/actions/auth'

const mapStateToProps = state => ({
  checkAuth: state.auth.checkAuth
})

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch, history } = this.props

      dispatch(checkAuth())
        .then(res => {
          if (res.success) {
            history.push('/')
          } else {
            history.push('/login')
          }
        })
        .catch(err => {
          console.log('Error check', err)
        })
    }
  })
)
