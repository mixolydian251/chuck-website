import React from 'react';
import { connect } from 'react-redux';
import TextEditor from './AdminPage/TextEditor';
import {startRemoveContent, startSetContentById} from "../actions/content";

import moment from 'moment';

class ContentDisplay extends React.Component {
  state = {
    id: undefined,
    title: undefined,
    date: undefined,
    description: undefined,
    editorState: null,
    pageLoaded: false,
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
            <div className="content__title">{this.state.title}</div>
            <div className="content__date">{moment(this.state.date).format('MMMM Do, YYYY')}</div>
            <div className="content__text">{this.state.description}</div>
          </div>
          <TextEditor
            contentId={this.state.id}
            editorState={this.state.editorState}
            removeContent={this.removeContent}/>
        </div>}
      </div>
    )};
}

const mapDispatchToProps = (dispatch) => ({
  startSetContentById: (id) => dispatch(startSetContentById(id)),
  startRemoveContent: (id) => dispatch(startRemoveContent(id))
});

const mapStateToProps = (state, props) => ({
  content: state.content.find(
    content => content.id === props.match.params.id
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentDisplay)

