import compose from 'recompose/compose'
import { withState, withHandlers, withProps, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Users from '../../../components/Pages/Users/Desktop'

const mockData = [
  {
    id: 2,
    rank_id: 0,
    email: 'user.email@mail.com',
    password: '55c3b5386c486feb662a0785f340938f518d547f',
    username: 'username',
    lvl_balance: '0',
    real_balance: '0',
    bet_amount: 0,
    bet_last_counter: 0,
    winstrick: 0,
    rating_participant: 0,
    avatar: '',
    email_confirmed: 0,
    verified: 0,
    created_at: '2019-03-19 14:50:05.410941'
  },
  {
    id: 1,
    rank_id: 0,
    email: 'user001@mail.com',
    password: '55c3b5386c486feb662a0785f340938f518d547f',
    username: 'SuperUsername',
    lvl_balance: '0',
    real_balance: '0',
    bet_amount: 0,
    bet_last_counter: 0,
    winstrick: 0,
    rating_participant: 0,
    avatar: '',
    email_confirmed: 0,
    verified: 0,
    created_at: '2019-03-18 13:55:45.942344'
  }
]

const FORM_NAME = 'newUser'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddUser', 'setAddUser', false),
  withHandlers({
    handleAddUser: ({ setAddUser, isAddUser }) => () => {
      setAddUser(!isAddUser)
    },

    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)
      })
  }),
  withProps(() => ({ usersData: mockData })),
  pure
)(Users)
