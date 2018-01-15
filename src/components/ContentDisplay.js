import React from 'react';
import { connect } from 'react-redux';
import TextEditor from './AdminPage/TextEditor';
import {startEditContent, startRemoveContent, startSetContentById} from "../actions/content";

import moment from 'moment';

class ContentDisplay extends React.Component {
  state = {
    id: undefined,
    title: undefined,
    date: undefined,
    description: undefined,
    editorState: null,
    pageLoaded: false,
    admin: this.props.authId === 'V7kpYQ7RBWVx3HQS6iIUMW6Xjpy2',
  };

  componentDidMount(){
    this.props.startSetContentById(this.props.match.params.id)
      .then(() => {
        console.log('setting the state');
        this.setState({
          id: this.props.content.id,
          title: this.props.content.title,
          date: this.props.content.date,
          description: this.props.content.description,
          editorState: this.props.content.editorState,
          pageLoaded: true,
        })
      })
  }

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
      title: this.state.title,
      date: this.state.date,
      description: this.state.description,
    });
  };

  removeContent = () => {
    this.props.startRemoveContent({ id: this.state.id });
    history.push('/')
  };
  render(){
    return(
      <div className="content">
        {this.state.pageLoaded &&
        <div>
          <div className="content-header-container">

            {this.state.admin ?
              <input
                className="create-content__form--title"
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
                className="create-content__form--description"
                name="description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}/> :
              <div className="content__text">
                {this.state.description}
              </div>
            }
          </div>

          <TextEditor
            contentId={this.state.id}
            editorState={this.state.editorState}
            editContent={this.editContent}
            removeContent={this.removeContent}/>
        </div>}
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

