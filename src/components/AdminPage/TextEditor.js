import React, { Component } from 'react';

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

export default class CustomToolbarEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
    html: ''
  };

  onChange = (editorState) => {
    this.setState(() => ({
      editorState,
    }));
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>

        <div className="text-area">
          <div className="editor" onClick={this.focus}>
            <Editor
              editorState={ this.state.editorState }
              onChange={this.onChange}
              plugins={plugins}
              ref={(element) => { this.editor = element; }}
            />
            <div className="toolbar">
              <Toolbar />
            </div>
          </div>
        </div>
      </div>

    );
  }
}