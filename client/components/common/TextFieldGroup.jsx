import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, type, placeholder, error, err, onChange }) => {
    return (
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
            {err && <span className="help-block">{err }</span>}
        </div>);
}
  

export default TextFieldGroup;
