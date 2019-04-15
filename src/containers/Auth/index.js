import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import validate from './validate'

import { loginUser } from '../../redux/actions/auth'

import Auth from '../../components/Auth/Desktop'

const FORM_NAME = 'login'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withHandlers({
    onSubmit: ({ handleSubmit, dispatch, history }) =>
      handleSubmit(variables => {
        dispatch(loginUser(variables))
          .then(res => {
            if (res.success) {
              localStorage.setItem('token', res.token)

              history.push('/')
            }
          })
          .catch(err => {
            console.log('Error login', err)
          })
      })
  }),
  pure
)(Auth)
