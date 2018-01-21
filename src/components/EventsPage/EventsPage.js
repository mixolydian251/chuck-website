import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSetContent } from "../../actions/content"
import Event from './Event';


class EventsPage extends React.Component{
  state = {
    events: this.props.content,
    pageLoaded: false,
  };

  componentDidMount(){
    this.props.startSetContent('event')
      .then(() => {
        this.setState({ events: this.props.content, pageLoaded: true});
      });
  }

  render(){
    return(
      <div className="events-page">
        Events
        {this.state.events.map((event) => {
          if (event.subcategory === 'event') {
            return (
              <div>
                <Link to={`/${event.id}`}>
                  <Event
                    contentId={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    time={event.time}
                    url={event.url}/>
                </Link>
              </div>
            )
          }
        })}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  startSetContent: (category) => dispatch(startSetContent(category))
});

const mapStateToProps = (state) => ({
  content: state.content
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage)