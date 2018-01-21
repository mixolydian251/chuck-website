import React from 'react';
import ContentCreateForm from "./ContentCreateForm";
import EventCreateForm from './EventCreateForm';

class AdminPage extends React.Component{
  state = {
    contentPage: true,
  };

  changeToContent = () => {
    this.setState({ contentPage: true })
  };

  changeToEvent = () => {
    this.setState({ contentPage: false })
  };

  render(){
    return(
    <div className="admin">
      <div className="admin__button-container">
        <button className="content__btn content__btn--save"
                onClick={this.changeToContent}>
          Create Content
        </button>
        <button className="content__btn content__btn--save"
                onClick={this.changeToEvent}>
          Create Event
        </button>
      </div>

      {this.state.contentPage  ?
        <div>
          <h1>Create Content</h1><br/>
          <ContentCreateForm/>
        </div> :
        <div>
          <h1>Create an Event</h1><br/>
          <EventCreateForm/>
        </div>
      }
    </div>
    )
  }
}

export default AdminPage