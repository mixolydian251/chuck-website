import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { admins } from "../firebase/firebase";
import {startEditContent, startRemoveContent, startSetContentById} from "../actions/content";
import TextEditor from './utilities/TextEditor';
import Loading from './Loading';
import SavedBanner from './utilities/SavedBanner';
import RemovedBanner from './utilities/RemovedBanner';



class ContentDisplay extends React.Component {
  state = {
    id: undefined,
    category: undefined,
    subcategory: undefined,
    title: undefined,
    date: undefined,
    description: undefined,
    editorState: null,
    pageLoaded: false,
    saveBanner: false,
    removeBanner: false,
    admin: admins.includes(this.props.authId)
    ,
  };

  componentDidMount(){
    window.scrollTo(0,0);
    this.props.startSetContentById(this.props.match.params.id)
      .then(() => {
        console.log('setting the state');
        this.setState({
          id: this.props.content.id,
          category: this.props.content.category,
          subcategory: this.props.content.subcategory,
          title: this.props.content.title,
          date: this.props.content.date,
          description: this.props.content.description,
          editorState: this.props.content.editorState,
          pageLoaded: true,
        })
      });
  }

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

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  editContent = () => {
    this.props.startEditContent(this.state.id, {
      category: this.state.category,
      subcategory: this.state.subcategory,
      title: this.state.title,
      date: this.state.date,
      description: this.state.description,
    });

    this.setState(() => ({ saveBanner: true }));

    setTimeout(() => {
      this.setState(() => ({ saveBanner: false }));
    },2000)
  };

  removeContent = () => {
    this.props.startRemoveContent({ id: this.state.id });

    this.setState(() => ({ removeBanner: true }));
  };

  render(){
    return(
      <div>
        {this.state.pageLoaded && !this.state.removeBanner ?
        <div className="content">
          <div className="content-header-container">

            {this.state.admin ?
              <input
                className="display-content__form display-content__form--title"
                name="title"
                value={this.state.title}
                onChange={this.handleTitleChange}/> :
              <div className="content__title">
                {this.state.title}
              </div>

            }

            <div className="content__date">
              {moment(this.state.date).format('MMMM Do, YYYY')}
            </div>

            {this.state.admin ?
              <textarea
                className="display-content__form display-content__form--description"
                name="description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}/> :
              <div className="content__text">
                {this.state.description}
              </div>
            }

            {this.state.admin && this.state.subcategory !== 'event'  &&
            <select className="display-content__form--category"
                    value={this.state.subcategory}
                    onChange={this.handleCategoryChange}>
              <option value="ten-min-play">10 Minute Play</option>
              <option value="one-act-play">One Act Play</option>
              <option value="full-length-play">Full Length Play</option>
              <option value="short-story">Short Story</option>
              <option value="online-series">Online Story Series</option>
              <option value="essay">Essay</option>
              <option value="link">Link</option>
            </select>}
          </div>

          {this.state.editorState ?
          <TextEditor
            contentId={this.state.id}
            editorState={this.state.editorState}
            editContent={this.editContent}
            removeContent={this.removeContent}/> :

            <div>
              {this.state.admin &&
              <div className="content__btn-container">
                <button
                className="content__btn content__btn--save"
                onClick={this.editContent}>
                Save Event
                </button>
                <button
                className="content__btn content__btn--remove"
                onClick={this.removeContent}>
                Remove Event
                </button>
              </div>}
            </div>
          }

        </div> :
          <Loading/>}

        {this.state.removeBanner &&
        <RemovedBanner/>}

        {this.state.saveBanner &&
        <SavedBanner/>}
      </div>
    )};
}

const mapDispatchToProps = (dispatch) => ({
  startSetContentById: (id) => dispatch(startSetContentById(id)),
  startEditContent: (id, obj) => dispatch(startEditContent(id, obj)),
  startRemoveContent: (id) => dispatch(startRemoveContent(id))
});

const mapStateToProps = (state, props) => ({
  content: state.content.find(
    content => content.id === props.match.params.id),
  authId: state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentDisplay)

