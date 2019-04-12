const validate = values => {
  const errors = {}

  if (!values.login) {
    errors.login = 'error.required'
  }

  if (!values.password) {
    errors.password = 'error.required'
  }

  return errors
}

export default validate