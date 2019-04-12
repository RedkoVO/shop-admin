import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import User from '../../../../components/Pages/Users/components/User'

const FORM_NAME = 'user'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    email: ownProps.data.email,
    username: ownProps.data.username,
    password: ownProps.data.password
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isShowMore', 'setShowMore', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)
      })
  }),
  pure
)(User)
