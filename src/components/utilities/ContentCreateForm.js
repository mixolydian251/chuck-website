import React from 'react';
import { startCreateContent } from '../../actions/content';
import { connect } from 'react-redux';

class ContentCreateForm extends React.Component{
  state = {
    category: '',
    title: '',
    description: '',
    date: '',
  };

  handleCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };

  handleTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let stateObj = {
      category: this.state.category,
      title: this.state.title,
      description: this.state.description,
    };

    this.props.startCreateContent( stateObj );
  };

  render() {
    return(
      <div className="create-content">
        <form
          className="create-content__form"
        >

          <select onChange={this.handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="10-minute-play">10 Minute Play</option>
            <option value="one-act-play">One Act Play</option>
            <option value="full-length-play">Full Length Play</option>
            <option value="short-story">Short Story</option>
            <option value="online-series">Online Story Series</option>
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


          <fieldset>
            <legend>Upload a photo</legend>
            <input type="file" name="photo" id="photo"/>
            <input type="submit" value="Upload"/>
          </fieldset>


          <input onClick={this.handleSubmit} type="submit" value="Create"/>

        </form>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startCreateContent: (obj) => dispatch(startCreateContent(obj))
});

export default connect(undefined, mapDispatchToProps)(ContentCreateForm);




