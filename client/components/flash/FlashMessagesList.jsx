import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      (<FlashMessage Key={message.id} message={message} 
      deleteFlashMessage={this.props.deleteFlashMessage} />));
    return (
      <div>
        { messages }
      </div>
    );
  }
}


FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.flashMessages
});

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
