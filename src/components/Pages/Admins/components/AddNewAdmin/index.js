import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import styles from './styles'

const AddNewAdmin = ({ classes, roleValue, onSubmit, handleChangeRole }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <Field
        id="login"
        name="login"
        type="text"
        component={InputField}
        placeholder="Login"
        className={classes.field}
      />

      <Field
        id="password"
        name="password"
        type="text"
        component={InputField}
        placeholder="Password"
        className={classes.field}
      />

      <Select
        id="role"
        name="role"
        className={classes.select}
        value={roleValue}
        onChange={e => handleChangeRole(e.target.value)}
      >
        <MenuItem value={0}>Admin</MenuItem>
        <MenuItem value={1}>Super Admin</MenuItem>
      </Select>

      <button type="submit" className={classes.submit}>
        Save
      </button>
    </Form>
  </div>
)

AddNewAdmin.propTypes = {
  classes: PropTypes.object,
  roleValue: PropTypes.number,
  onSubmit: PropTypes.func,
  handleChangeRole: PropTypes.func
}

export default withStyles(styles)(AddNewAdmin)
