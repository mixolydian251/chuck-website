import React from 'react';
import { startCreateContent } from '../../actions/content';
import { connect } from 'react-redux';
import { storage } from '../../firebase/firebase';
import uuid from 'uuid';

class ContentCreateForm extends React.Component{
  state = {
    category: '',
    subcategory: '',
    title: '',
    description: '',
    url: '',
    imagePath: '',
    uploadedImage: false
  };

  determineCategory = (subcategory) => {
    let category = undefined;

    if(subcategory === 'ten-min-play' ||
       subcategory ==='one-act-play' ||
       subcategory ==='full-length-play') {
      category = 'play';
    }

    if (subcategory === 'link'){
      category = 'link';
    }

    if (subcategory === 'essay'){
      category = 'essay';
    }

    if (subcategory === 'short-story' ||
        subcategory ==='online-series'){
      category ='prose';
    }

    return category
  };

  handleCategoryChange = e => {
    let subcategory = e.target.value;

    this.setState(() => ({
      category: this.determineCategory(subcategory),
      subcategory: subcategory
    }));
  };

  handleTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
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

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let stateObj = {
      category: this.state.category,
      subcategory: this.state.subcategory,
      title: this.state.title,
      description: this.state.description,
      url: this.state.url,
    };

    if(this.state.category &&
       this.state.subcategory &&
       this.state.title ) {
      this.props.startCreateContent(stateObj);
    }
  };

  render() {
    return(
      <div className="create-content">
        <div className="create-content__form">
          <select onChange={this.handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="ten-min-play">10 Minute Play</option>
            <option value="one-act-play">One Act Play</option>
            <option value="full-length-play">Full Length Play</option>
            <option value="short-story">Short Story</option>
            <option value="online-series">Online Story Series</option>
            <option value="essay">Essay</option>
            <option value="link">Link</option>
          </select>

          <fieldset>
            <legend> Content Info </legend>
            <input
              className="create-content__form--title"
              name="title"
              placeholder="title"
              onChange={this.handleTitleChange}/>

            <textarea
              className="create-content__form--description"
              name="description"
              placeholder="description"
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

export default connect(undefined, mapDispatchToProps)(ContentCreateForm);




