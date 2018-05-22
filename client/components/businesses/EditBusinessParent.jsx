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
    const { getOneBusiness, addFlashMessage, oneBusiness, params } = this.props;
    
    return (
        <EditBusiness 
            oneBusiness={ oneBusiness } 
            addFlashMessage={addFlashMessage} 
            getOneBusiness={ getOneBusiness }
            params={ params }
        />
    );
  }
}

EditBusinessParent.propTypes = {
  getOneBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
    oneBusiness: state.singleBusiness,
    params: props.match.params
})


export default connect(mapStateToProps, { getOneBusiness, saveImageCloudinary, editBusiness, addFlashMessage })(EditBusinessParent);

  
// (state) => {return {}}