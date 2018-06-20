import React from "react";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

// actions
import { addBusiness } from '../../actions/addBusinessAction';
import { saveImageCloudinary } from '../../actions/uploadImageAction';
import { addFlashMessage } from '../../actions/flashMessages';

/**
 * @description Creates New Business
 *
 * @class AddNewBusiness
 *
 * @extends {React.Component}
 */
class AddNewBusiness extends React.Component {
  /**
   * @description Creates an instance of AddBusiness
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
    this.state = {
        name: '',
        category: '',
        location: '',
        newImage: '',
        image: '',
        description: '',
        errors: {},
        isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.submitImage = this.submitImage.bind(this);
}
/**
  * @description Bind the value of the inputs to state
  *
  * @method onChange
  *
  * @memberof AddBusiness
  *
  * @param {any} event
  *
  * @returns {void}
  */
onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
}
/**
  * @description Handles change image event
  *
  * @method handleImageChange
  *
  * @memberof AddNewBusiness
  *
  * @param {any} event
  *
  * @returns {void}
  */
handleImageChange(event){
  event.preventDefault();
  this.setState({ newImage: event.target.files[0] });
}
/**
  * @description Saves Image to cloudinary
  *
  * @method submitImage
  *
  * @memberof AddNewBusiness
  *
  * @param {any} event
  *
  * @returns {void}
  */
submitImage(event){
  event.preventDefault();
  this.props.saveImageCloudinary(this.state.newImage).then(()=> {
    this.setState({image: this.props.imageInfo.imageData});
  });
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
    const { imageData } = this.props.imageInfo; 
      this.setState({ image: imageData, errors: {}, isLoading: true });
        this.props.addBusiness(this.state).then(
            () => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'Business Created'
                })
                this.context.router.history.push('/dashboard')
            },
             (err) => this.setState({ errors: err.response.data.error, isLoading: false }) 
        );
}
/**
     * @description Render react component
     *
     * @method render
     *
     * @memberof AddNewBusiness
     *
     * @returns {void}
     *
     */
  render() {
    const { errors } = this.state;
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <h1 className="text-center my-5 header-color">
            Add New Business Profile
          </h1>
        </div>
        <form onSubmit={this.onSubmit} className={classnames('form-group', { 'has-error': errors })}>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10">
              <div className="card">
                <div className="card-body">
                  <div className="form-group row">
                    <div className="col-sm-4">
                      <label>Name:</label>
                      <input
                        value={this.state.name}
                        onChange={this.onChange}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                      />
                      {errors && <span className="help-block">{errors.name}</span>}
                    </div>
                    <div className="col-sm-4">
                      <label>Select Category</label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          type="select"
                          name="category"
                          value={this.state.category}
                          onChange={this.onChange}
                        >
                          <option value="" disabled>Choose Category</option>
                          <option value="ict">ICT</option>
                          <option value="oil">Oil Firm</option>
                          <option value="corporate">Corporate Firm</option>
                          <option value="agric">Agriculture</option>
                          <option value="entertainment">Entertainment</option>
                        </select>
                        {errors && <span className="help-block">{errors.category}</span>}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label>Select Location</label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          type="select"
                          name="location"
                          value={this.state.location}
                          onChange={this.onChange}
                        >
                          <option value="" disabled>Choose Location</option>
                          <option value="abuja">Abuja</option>
                          <option value="lagos">Lagos</option>
                          <option value="port-harcort">Port Harcort</option>
                          <option value="benin-city">Benin City</option>
                          <option value="ibadan">Ibadan</option>
                        </select>
                        {errors && <span className="help-block">{errors.location}</span>}
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
                        <button onClick={this.submitImage}>
                          <i className="fa fa-cloud-upload" />
                    Uplaod Image
                        </button>
                      </span>
                    </span> 
                    <img src={this.state.image} alt="preview pic" height="150" width="250" />
                    {errors && <span className="help-block">{errors.image}</span>}
                  </div>
                  <br />
                  <label>Details</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.onChange}
                    name="description"
                    placeholder="Put Business details here..."
                    cols="3"
                    rows="3"
                    className="form-control"
                  />
                  {errors && <span className="help-block">{errors.description}</span>}
                  <hr />
                  <div className="text-center">
                    <button className="btn btn-primary">
                      <i className="fa fa-plus-circle" aria-hidden="true" /> Add
                      Profile
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

AddNewBusiness.propTypes = {
  addBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

AddNewBusiness.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  imageInfo: state.imageUrl
})
export default connect(mapStateToProps, { saveImageCloudinary })(AddNewBusiness);
