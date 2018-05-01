import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, placeholder, errors, onChange }) => {
    return (
        <div className={classnames('form-group', { 'has-error': errors })}>
            <input
                className="form-control form-control-sm"
                name={field}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {errors && <span className="help-block">{errors}</span>}
        </div>);
}

export default TextFieldGroup;