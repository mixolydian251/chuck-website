import React, { Component } from 'react';
import { connect } from 'react-redux';

import { convertToRaw, convertFromRaw, EditorState, RichUtils } from 'draft-js';

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

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
const text = 'Create a masterpiece..';

class CustomToolbarEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.editorState))),
    html: ''
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
        <div className="text-area">
          <div className="editor"
               onClick={this.focus}
          >
            <Editor
              editorState={ this.state.editorState }
              onChange={this.onChange}
              onTab={this._onTab}
              plugins={plugins}
              ref={(element) => { this.editor = element; }}
            />
            <div className="toolbar">
              <Toolbar />
            </div>
          </div>
        </div>
        <button onClick={this.saveEditor}>Save my content</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditContent: (id, state) => dispatch(startEditContent(id, { ...state }))
});

export default connect(undefined, mapDispatchToProps)(CustomToolbarEditor);