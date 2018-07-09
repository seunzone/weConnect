import React from 'react';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';

/**
 * @description Creates flash messages
 *
 * @class FlashMessage
 *
 * @extends {React.Component}
 */
class FlashMessage extends React.Component {
  /**
   * @description Creates an instance of FlashMessage
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof SignupForm
   *
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  /**
   * @description Action on click
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof SignupForm
   *
   * @returns {void}
   */
  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }
  /**
     * @description Render react component
     *
     * @method render
     *
     * @memberof FlashMessage
     *
     * @returns {void}
     *
     */
  render() {
    const { type, text } = this.props.message;
    setTimeout(() => {
      document.getElementById('close').click();
    }, 5000);
    return (
      <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}
      >
        <button onClick={this.onClick} className="close" id="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
