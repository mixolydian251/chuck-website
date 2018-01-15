import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertToRaw, convertFromRaw, EditorState, RichUtils } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import database from '../../firebase/firebase';

import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';

import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import {startEditContent} from "../../actions/content";

const toolbarPlugin = createToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
  ]
});
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];

class CustomToolbarEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.editorState))),
    readOnly: this.props.authId !== 'V7kpYQ7RBWVx3HQS6iIUMW6Xjpy2',
    contentRemoved: false,
  };

  onChange = (editorState) => {
    this.setState(() => ({
      editorState,
    }));

    this.saveEditor()
  };

  saveEditor = () => {
    let state = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
    this.props.startEditContent(this.props.contentId, { editorState: state });
  };

  saveContent = () => {
    this.props.editContent()
  };

  handleRemoveContent = () => {
    this.setState({contentRemoved: true});
    this.props.removeContent()
  };

  focus = () => {
    this.editor.focus();
  };

  _onTab(event) {
    event.preventDefault();
    console.log('onTab');
    this.onChange(RichUtils.onTab(event, this.state.editorState, 6));
  }


  render() {
    return (
      <div>
        {!this.state.contentRemoved && <div>
          <div className="text-area">
            <div className="editor"
                 onClick={this.focus}
            >
              <Editor
                editorState={ this.state.editorState }
                onChange={this.onChange}
                onTab={this._onTab}
                plugins={plugins}
                spellCheck={!this.state.readOnly}
                readOnly={this.state.readOnly}
                ref={(element) => { this.editor = element; }}
              />

              {!this.state.readOnly &&
              <div className="toolbar">
                <Toolbar />
              </div>}

            </div>
          </div>
          {!this.state.readOnly &&
          <div className="content__btn-container">
            <button
              className="content__btn content__btn--save"
              onClick={this.saveContent}>
              Save my content
            </button>
            <button
              className="content__btn content__btn--remove"
              onClick={this.handleRemoveContent}>
              Remove this content
            </button>
          </div>}
        </div>}
        {this.state.contentRemoved &&
        <div>
          <h1>This content has been removed.</h1>
        </div>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditContent: (id, state) => dispatch(startEditContent(id, { ...state }))
});

const mapStateToProps = (state, props) => ({
  authId: state.auth.uid,
  removeContent: props.removeContent
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomToolbarEditor);