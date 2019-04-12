import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withProps, withState, withHandlers, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import Admins from '../../../components/Pages/Admins/Desktop'

const mockData = [
  {
    id: 1,
    login: 'admin@mail.com',
    password: '67a74306b06d0c01624fe0d0249a570f4d093747',
    auth_token:
      '4e816036ed1fac74113a2549131ec1d52aadd332730b011b95d91291a6e20503',
    valid_until: '2019-03-18 10:22:25',
    role: 0,
    failed_attempts: 0,
    created_at: '2019-03-18 12:07:26.104574'
  },
  {
    id: 2,
    login: 'admin1@mail.com',
    password: 'dce0b27ba675df41e9cc07af80ec59c475810824',
    auth_token:
      '7800a3852e07597ea14e0b572d1759b9af68e9a48633c76b791d1cb0f934e05e',
    valid_until: '2019-03-18 10:30:40',
    role: 0,
    failed_attempts: 0,
    created_at: '2019-03-18 12:15:40.184834'
  },
  {
    id: 3,
    login: 'admin2@mail.com',
    password: 'aa767c94bf4410c1b12a2be9dafa6d951ce44728',
    auth_token:
      '3dedfc105eac35bc1fce02e41398cf5e2dbea9325b694ee87851ab85deb0b281',
    valid_until: '2019-03-18 10:31:04',
    role: 0,
    failed_attempts: 0,
    created_at: '2019-03-18 12:16:04.266211'
  }
]

const FORM_NAME = 'newAdmin'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddAdmin', 'setAddAdmin', false),
  withState('roleValue', 'setRoleValue', 0),
  withHandlers({
    handleAddAdmin: ({ setAddAdmin, isAddAdmin }) => () => {
      setAddAdmin(!isAddAdmin)
    },

    handleChangeRole: ({ setRoleValue }) => value => {
      setRoleValue(value)
    },

    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)
      })
  }),
  withProps(() => ({ adminsData: mockData })),
  pure
)(Admins)
