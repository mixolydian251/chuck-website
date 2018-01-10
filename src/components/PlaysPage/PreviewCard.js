import React from 'react';
import moment from 'moment';


class PreviewCard extends React.Component{
  state = {
    contentId: this.props.contentId
  };

  render(){
    return(
      <div className="card">
        <div className="card__title">{this.props.title}</div>
        <div className="card__description">{this.props.description}</div>
        <div className="card__date">{moment(this.props.date).format('MMM Do, YYYY')}</div>
      </div>
    )
  }
}

export default PreviewCard