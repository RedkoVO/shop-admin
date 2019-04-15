import React from 'react'
import PropTypes from 'prop-types'

const InputFileUpload = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return <input type="file" {...props.input} {...props} onChange={onChange} />
}

InputFileUpload.propTypes = {
  classNamees: PropTypes.object
}

export default InputFileUpload
