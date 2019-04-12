import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../App/Form/InputField'

import styles from './styles'

const Auth = ({ classes, onSubmit }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.title}>Login</div>
      <Field
        id="login"
        name="login"
        type="text"
        className={classes.field}
        component={InputField}
        placeholder="Login"
      />
      <Field
        id="password"
        name="password"
        type="password"
        className={classes.field}
        component={InputField}
        placeholder="Password"
      />

      <button type="submit" className={classes.button}>
        Login!
      </button>
    </Form>
  </div>
)

Auth.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Auth)
