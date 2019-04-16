import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'
import InputFileUpload from '../../../../App/Form/InputFileUpload'

import styles from './styles'

const AddNewAdmin = ({ classes, onSubmit, handleUploadImage }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <Field
        id="title"
        name="title"
        type="text"
        component={InputField}
        placeholder="Title"
        className={classes.field}
      />

      <Field
        id="price"
        name="price"
        type="number"
        component={InputField}
        placeholder="Price"
        className={classes.field}
      />

      <Field
        id="oldPrice"
        name="oldPrice"
        type="number"
        component={InputField}
        placeholder="Old price"
        className={classes.field}
      />

      <Field
        id="description"
        name="description"
        type="text"
        component={InputField}
        placeholder="Description"
        className={classes.field}
      />

      <Field
        name="images"
        type="file"
        component={InputFileUpload}
        className={classes.file}
        onChange={e => handleUploadImage(e)}
        multiple
        accept=".jpg, .png, .jpeg"
      />

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
  handleChangeRole: PropTypes.func,
  handleUploadImage: PropTypes.func
}

export default withStyles(styles)(AddNewAdmin)
