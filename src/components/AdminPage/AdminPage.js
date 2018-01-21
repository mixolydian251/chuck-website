import React from 'react';
import ContentCreateForm from "./ContentCreateForm";
import EventCreateForm from './EventCreateForm';
import SavedBanner from '../utilities/SavedBanner';

class AdminPage extends React.Component{
  state = {
    contentPage: true,
    contentSaved: false,
  };

  changeToContent = () => {
    this.setState({ contentPage: true })
  };

  changeToEvent = () => {
    this.setState({ contentPage: false })
  };

  handleContentSave = () => {
    this.setState(() => ({ contentSaved: true }));

    setTimeout(() => {
      this.setState(() => ({ contentSaved: false }));
    },2500)

  };

  render(){
    return(
    <div className="admin">
      <div className="admin__button-container">
        <button className="content__btn content__btn--save"
                onClick={this.changeToContent}>
          Create Content
        </button>
        <button className="content__btn content__btn--blue"
                onClick={this.changeToEvent}>
          Create Event
        </button>
      </div>

      {this.state.contentPage  ?
        <div>
          <h1>Create Content</h1><br/>
          <ContentCreateForm
            handleContentSave={this.handleContentSave}/>
        </div> :
        <div>
          <h1>Create an Event</h1><br/>
          <EventCreateForm
            handleContentSave={this.handleContentSave}/>
        </div>
      }

      {this.state.contentSaved &&
      <SavedBanner/>}
    </div>
    )
  }
}

export default AdminPage