import { CHECK_AUTH } from '../actions/types'

const auth = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case CHECK_AUTH:
      return {
        ...state,
        checkAuth: {
          success: payload.success,
          email: payload.email
        }
      }
    default:
      return state
  }
}

export default auth
