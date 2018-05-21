import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import EditBusiness from './EditBusiness';


// actions
import { getOneBusiness, saveImageCloudinary, editBusiness } from '../../actions/businessAction';
import { addFlashMessage } from '../../actions/flashMessages';

class EditBusinessParent extends React.Component {
    componentDidMount() {
        this.props.getOneBusiness(this.props.match.params.id); 
    }
  render() {
    const { getOneBusiness, addFlashMessage } = this.props;
    return (
      <EditBusiness getOneBusiness={ getOneBusiness } addFlashMessage={addFlashMessage} />
    );
  }
}

EditBusinessParent.propTypes = {
  getOneBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}


export default connect((state) => {return {}} , { getOneBusiness, saveImageCloudinary, editBusiness, addFlashMessage })(EditBusinessParent);

  
