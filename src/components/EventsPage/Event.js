import React from 'react';
import moment from 'moment';

const Event = (props) => (
  <div className="event">
    <div className="event__date">
      <div className="event__date--month">
        {moment(props.date).format('MMM')}
      </div>
      <div className="event__date--day">
        {moment(props.date).format('D')}
      </div>
    </div>

    <div className="event__middle">
      <div className="event__title">
        {props.title}
      </div>

      <div className="event__location">
        {props.location}
      </div>
    </div>

    <div className="event__time">
      {moment(`${props.date} ${props.time}`).format('h:mm A')}
    </div>
  </div>
);

export default Event