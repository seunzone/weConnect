import React from 'react';
import { PropTypes } from 'prop-types';

import classnames from 'classnames';

const TextFieldGroup = ({
  field, value, type, placeholder, error, onChange
}) => (
  <div className={classnames('form-group', { 'has-error': error })}>
    <input
      className="form-control form-control-sm"
      type={type}
      name={field}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <span className="help-block">{error }</span>}
  </div>);

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextFieldGroup.defaultProps = {
  placeholder: 'text'
};

export default TextFieldGroup;
