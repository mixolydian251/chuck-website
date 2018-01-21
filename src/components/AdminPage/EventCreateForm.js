import React from 'react';
import { startCreateContent } from '../../actions/content';
import { connect } from 'react-redux';
import { storage } from '../../firebase/firebase';

class EventCreateForm extends React.Component{
  state = {
    time: '',
    date: '',
    subcategory: 'event',
    category: 'event',
    title: '',
    description: '',
    location: '',
    url: '',
    imagePath: '',
    uploadedImage: false
  };

  handleTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleDateChange = e => {
    const date = e.target.value;
    this.setState(() => ({ date }));
  };

  handleLocationChange = e => {
    const location = e.target.value;
    this.setState(() => ({ location }));
  };

  handleTimeChange = e => {
    const time = e.target.value;
    this.setState(() => ({ time }));
  };

  handlePhotoChange = e => {
    const photo = e.target.value;
    let file = e.target.files[0];

    if( this.state.subcategory ){
      const path = `${ this.state.subcategory }/${ String(photo) }`;
      const ref = storage.ref(path);
      ref.put(file)
        .then( snapshot => {
          this.setState(() => ({
            url: snapshot.downloadURL,
            uploadedImage: true,
            imagePath: path
          }));
        });
    }
  };

  handleRemovePhoto = () => {
    const ref = storage.ref().child(this.state.imagePath);
    ref.delete()
      .then( () => {
        this.setState(() => ({
          url: '',
          uploadedImage: false,
          imagePath: ''
        }));
      });
  };



  handleSubmit = (e) => {
    e.preventDefault();

    let stateObj = {
      time: this.state.time,
      date: this.state.date,
      category: this.state.category,
      subcategory: this.state.subcategory,
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      url: this.state.url,
      editorState: null,
    };

    if(
      this.state.date &&
      this.state.category &&
      this.state.subcategory &&
      this.state.title ) {
      this.props.startCreateContent(stateObj);
      this.props.handleContentSave();
    }
  };

  render() {
    return(
      <div className="create-content">
        <div className="create-content__form">

          <fieldset>
            <legend> Event Info </legend>

            <input
              className="create-content__form--title"
              name="Event Title"
              placeholder="Event Title"
              onChange={this.handleTitleChange}/>

            <input
              className="create-content__form--title"
              type="date"
              name="date"
              placeholder="MM/DD/YYYY"
              onChange={this.handleDateChange}/>

            <input
              className="create-content__form--title"
              type="time"
              name="time"
              onChange={this.handleTimeChange}/>


            <input
              className="create-content__form--title"
              name="location"
              placeholder="Location"
              onChange={this.handleLocationChange}/>

            <textarea
              className="create-content__form--description"
              name="description"
              placeholder="Enter Event Description.."
              onChange={this.handleDescriptionChange}/>

          </fieldset>

          {this.state.uploadedImage &&
          <div className="create-content__image-container">
            <img src={this.state.url} className="create-content__image"/><br/>
            <button
              className="content__btn content__btn--remove"
              onClick={this.handleRemovePhoto}>
              Remove image
            </button>
          </div>
          }

          <fieldset
            className="create-content__form--upload-container">
            <legend>Upload a photo</legend>
            <input type="file"
                   id="photo"
                   accept="image/*"
                   onChange={this.handlePhotoChange}
                   className="create-content__form--upload" />
          </fieldset>


          <input className="content__btn content__btn--save"
                 onClick={this.handleSubmit}
                 type="submit"
                 value="Create"/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startCreateContent: (obj) => dispatch(startCreateContent(obj))
});

export default connect(undefined, mapDispatchToProps)(EventCreateForm);