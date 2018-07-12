import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
// actions
import { getOneBusiness } from '../../actions/businessAction';
import { editBusiness } from '../../actions/editBusinessAction';
import { saveImageCloudinary } from '../../actions/uploadImageAction';

import { addFlashMessage } from '../../actions/flashMessages';
/**
 * @description Edits Business
 *
 * @class EditBusiness
 *
 * @extends {React.Component}
 */
class EditBusiness extends React.Component {
  /**
   * @description Creates an instance of Edit Business
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof AddNewBusiness
   *
   * @returns {void}
   */
  constructor(props) {
    super(props);
    const { oneBusiness, business } = this.props;
    this.state = {
      name: oneBusiness ? oneBusiness.name : '',
      category: business.category,
      location: business.location,
      newImage: business.newImage,
      image: business.image,
      description: business.description,
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.submitImage = this.submitImage.bind(this);
  }
  /**
   * @description Before component mounts
   *
   * @method isValid
   *
   * @memberof EditBusiness
   *
   * @returns {void}
   */
  componentWillMount() {
    this.props.getOneBusiness(this.props.params.id);
  }
  /**
   * @return {null} new state
   * @param {object} nextProps
   * @memberof EditBusiness
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.oneBusiness.name,
      category: nextProps.oneBusiness.category,
      location: nextProps.oneBusiness.location,
      newImage: nextProps.oneBusiness.newImage,
      image: nextProps.oneBusiness.image,
      description: nextProps.oneBusiness.description
    });
  }
  /**
   * @description Bind the value of the inputs to state
   *
   * @method onChange
   *
   * @memberof EditBusiness
   *
   * @param {any} event
   *
   * @returns {void}
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   * @description Handles Form Submission
   *
   * @method onSubmit
   *
   * @param {object} event
   *
   * @memberof AddNewBusiness
   *
   * @returns {void}
   */
  onSubmit(event) {
    event.preventDefault();
    this.props.editBusiness(this.props.business.id, this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Business Edited'
        });
        this.context.router.history.push('/dashboard');
      },
      res => this.setState({ errors: res.res.data.error, isLoading: false })
    );
  }
  /**
   * @description Saves Image to cloudinary
   *
   * @method submitImage
   *
   * @memberof EditBusiness
   *
   * @param {any} event
   *
   * @returns {void}
   */
  submitImage(event) {
    event.preventDefault();
    this.props.saveImageCloudinary(this.state.newImage).then(() => {
      this.setState({ image: this.props.imageInfo.imageData });
    });
  }
  /**
   * @description Handles change image event
   *
   * @method handleImageChange
   *
   * @memberof EditBusiness
   *
   * @param {any} event
   *
   * @returns {void}
   */
  handleImageChange(event) {
    event.preventDefault();
    this.setState({ newImage: event.target.files[0] });
  }
  /**
   * @description Render react component
   *
   * @method render
   *
   * @memberof EditBusiness
   *
   * @returns {void}
   *
   */
  render() {
    const {
      errors, name, category, description, location
    } = this.state;
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <h1 className="text-center my-5 header-color">
            Edit Business Profile
          </h1>
        </div>
        <form
          onSubmit={this.onSubmit}
          className={classnames('form-group', { 'has-error': errors })}
        >
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10">
              <div className="card">
                <div className="card-body">
                  <div className="form-group row">
                    <div className="col-sm-4">
                      <label>Name:</label>
                      <input
                        value={name}
                        onChange={this.onChange}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                      />
                      {errors && (
                        <span className="help-block">{errors.name}</span>
                      )}
                    </div>
                    <div className="col-sm-4">
                      <label>Select Category</label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          type="select"
                          name="category"
                          value={category}
                          onChange={this.onChange}
                        >
                          <option value="" disabled>
                            Choose Category
                          </option>
                          <option value="ict">ICT</option>
                          <option value="oil">Oil Firm</option>
                          <option value="corporate">Corporate Firm</option>
                          <option value="agric">Agriculture</option>
                          <option value="entertainment">Entertainment</option>
                        </select>
                        {errors && (
                          <span className="help-block">{errors.category}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label>Select Location</label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          type="select"
                          name="location"
                          value={location}
                          onChange={this.onChange}
                        >
                          <option value="" disabled>
                            Choose Location
                          </option>
                          <option value="abuja">Abuja</option>
                          <option value="lagos">Lagos</option>
                          <option value="port-harcort">Port Harcort</option>
                          <option value="benin-city">Benin City</option>
                          <option value="ibadan">Ibadan</option>
                        </select>
                        {errors && (
                          <span className="help-block">{errors.location}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <br />
                  <label>Upload Image</label>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <span className="btn btn-default btn-file">
                        Browse…
                        <input
                          type="file"
                          id="imgInp"
                          onChange={this.handleImageChange}
                        />
                      </span>
                    </span>{' '}
                    <button onClick={this.submitImage}>Uplaod Image</button>
                    {errors && (
                      <span className="help-block">{errors.image}</span>
                    )}
                  </div>
                  <br />
                  <label>Details</label>
                  <textarea
                    value={description}
                    onChange={this.onChange}
                    name="description"
                    placeholder="Put Business details here..."
                    cols="3"
                    rows="3"
                    className="form-control"
                  />
                  {errors && (
                    <span className="help-block">{errors.description}</span>
                  )}
                  <hr />
                  <div className="text-center">
                    <button className="btn btn-primary">
                      <i className="fa fa-plus-circle" aria-hidden="true" />{' '}
                      Update Business
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

EditBusiness.propTypes = {
  editBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired,
  oneBusiness: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  getOneBusiness: PropTypes.func.isRequired,
  imageInfo: PropTypes.object.isRequired,
  saveImageCloudinary: PropTypes.func.isRequired
};

EditBusiness.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  imageInfo: state.imageUrl,
  business: state.singleBusiness
});

export default connect(
  mapStateToProps,
  {
    getOneBusiness, saveImageCloudinary, editBusiness, addFlashMessage
  }
)(EditBusiness);
