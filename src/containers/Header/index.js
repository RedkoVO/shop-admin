import compose from 'recompose/compose'
import { pure, withHandlers } from 'recompose'
import { connect } from 'react-redux'

import { checkAuth } from '../../redux/actions/auth'

import HeaderDesktop from '../../components/Header/Desktop'

export default compose(
  connect(),
  withHandlers({
    handleLogout: ({ dispatch, history }) => () => {
      localStorage.removeItem('token')
      dispatch(checkAuth())
      .then(res => {
        if (!res.success) {
          history.push('/login')
        }
      })
      .catch()
    }
  }),
  pure
)(HeaderDesktop)
