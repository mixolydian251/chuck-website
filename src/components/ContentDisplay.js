import React from 'react';
import { connect } from 'react-redux';
import TextEditor from './AdminPage/TextEditor';
import {startRemoveContent} from "../actions/content";

const ContentDisplay = (props) => {
  const removeContent = () => {
    props.dispatch(startRemoveContent({ id: props.content.id }));
  };
  return(
  <div className="content">
    <div className="content__title">{props.content.title}</div>
    <div className="content__date">{props.content.date}</div>
    <div className="content__text">{props.content.description}</div>
    <TextEditor contentId={props.content.id} editorState={props.content.editorState}/>
    <button onClick={removeContent}>Remove this content</button>
  </div>
)};

const mapStateToProps = (state, props) => ({
  content: state.content.find(
    content => content.id === props.match.params.id
  )
});

export default connect(mapStateToProps)(ContentDisplay)

