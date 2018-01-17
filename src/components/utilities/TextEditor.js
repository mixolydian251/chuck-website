import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startEditContent} from "../../actions/content";
import { convertToRaw, convertFromRaw, EditorState, RichUtils } from 'draft-js';
import { Map } from 'immutable';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';

import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import createLinkPlugin from 'draft-js-anchor-plugin';
import createDragNDropUploadPlugin from '@mikeljames/draft-js-drag-n-drop-upload-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';

import { ItalicButton, BoldButton, UnderlineButton,
  HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,
  UnorderedListButton, OrderedListButton } from 'draft-js-buttons';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-anchor-plugin/lib/plugin.css';
import 'draft-js-focus-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css'

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);


const imagePlugin = createImagePlugin({decorator});


const mockUpload = () => (
  <div style={{fontSize: '1.6rem'}}>
    Uploading....
  </div>
);

const customRenderMap = Map({
  unstyled: {
    element: 'div',
    aliasedElements: ['p'],
  },
});


const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: mockUpload(),
  addImage: imagePlugin.addImage,
});



const linkPlugin = createLinkPlugin({
  placeholder: 'http://…'
});

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    Separator,
    UnorderedListButton,
    OrderedListButton,
    linkPlugin.LinkButton
  ]
});
const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
  dragNDropFileUploadPlugin,
  inlineToolbarPlugin,
  linkPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin
];


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
                blockRenderMap={customRenderMap}
                ref={(element) => { this.editor = element; }}
              />

              {!this.state.readOnly &&
                <div>
                  <InlineToolbar/>
                </div>
              }

              {!this.state.readOnly &&
              <div>
                <AlignmentTool/>
              </div>
              }

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