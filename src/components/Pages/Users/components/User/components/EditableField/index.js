import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const EditableField = ({
  classes,
  hendleEdit,
  isEditable,
  className,
  text,
  fieldId,
  fieldName,
  type,
  component,
  placeholder
}) => (
  <div className={className}>
    {isEditable ? (
      <React.Fragment>
        <Field
          id={fieldId}
          name={fieldName}
          type={type}
          component={component}
          placeholder={placeholder}
          className={className}
        />
        <button type="submit" className={classes.submit} />
      </React.Fragment>
    ) : (
      <React.Fragment>{text}</React.Fragment>
    )}

    <div className={classes.edit} onClick={() => hendleEdit()} />
  </div>
)

EditableField.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  component: PropTypes.func,
  isEditable: PropTypes.bool.isRequired,
  hendleEdit: PropTypes.func.isRequired
}

export default compose(
  withState('isEditable', 'setEditable', false),
  withHandlers({
    hendleEdit: ({ isEditable, setEditable }) => () => {
      setEditable(!isEditable)
    }
  }),
  pure
)(withStyles(styles)(EditableField))
