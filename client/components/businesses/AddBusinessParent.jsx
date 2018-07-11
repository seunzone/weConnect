import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import AddBusiness from './AddBusiness';


// actions
import { addBusiness } from '../../actions/businessAction';
import { addFlashMessage } from '../../actions/flashMessages';
/**
 * @description Parent of addBusiness Class
 *
 * @class AddNewBusinessParent
 *
 * @extends {React.Component}
 */
class AddBusinessParent extends React.Component {
  render() {
    const { addBusiness, addFlashMessage } = this.props;
    return (
      <AddBusiness addBusiness={addBusiness} addFlashMessage={addFlashMessage} />
    );
  }
}

AddBusinessParent.propTypes = {
  addBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(() => ({}), { addBusiness, addFlashMessage })(AddBusinessParent);
