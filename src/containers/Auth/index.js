import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import validate from './validate'

import Auth from '../../components/Auth/Desktop'

const FORM_NAME = 'login'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withHandlers({
    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)
      })
  }),
  pure
)(Auth)
