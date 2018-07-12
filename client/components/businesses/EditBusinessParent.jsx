import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import EditBusiness from './EditBusiness';


// actions
import { getOneBusiness } from '../../actions/businessAction';
import { editBusiness } from '../../actions/editBusinessAction';
import { saveImageCloudinary } from '../../actions/uploadImageAction';
import { addFlashMessage } from '../../actions/flashMessages';
/**
 * @description Parent of editBusiness Class
 *
 * @class EditBusinessParent
 *
 * @extends {React.Component}
 */
class EditBusinessParent extends React.Component {
  /**
   * @description Before component mounts
   *
   * @method isValid
   *
   * @memberof UserDashboard
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.getOneBusiness(this.props.match.params.id);
  }
  /**
   * @description Render react component
   *
   * @method render
   *
   * @memberof EditBusinessParent
   *
   * @returns {void}
   *
   */
  render() {
    const {
      getOneBusiness, addFlashMessage, oneBusiness, params
    } = this.props;

    return (
      <EditBusiness
        oneBusiness={oneBusiness}
        addFlashMessage={addFlashMessage}
        getOneBusiness={getOneBusiness}
        params={params}
      />
    );
  }
}

EditBusinessParent.propTypes = {
  getOneBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  oneBusiness: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  oneBusiness: state.singleBusiness,
  params: props.match.params
});


export default connect(mapStateToProps, {
  getOneBusiness, saveImageCloudinary, editBusiness, addFlashMessage
})(EditBusinessParent);
