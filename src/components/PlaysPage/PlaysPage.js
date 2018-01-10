import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSetContent } from "../../actions/content"
import PreviewCard from "./PreviewCard";

class PlaysPage extends React.Component{
  state = {
    tenMinutePlays: this.props.content
  };

  componentDidMount(){
    this.props.startSetContent()
      .then(() => {
        this.setState({ tenMinutePlays: this.props.content })
      });
  }

  render () {
    return(
      <div className="plays">
        <h1 className="plays__title">This is my Plays Page</h1>
        {this.state.tenMinutePlays.map((play) => {
          return(
            <Link className="list_items" to={`/content/${play.id}`}>
              <PreviewCard
                contentId={play.id}
                title={play.title}
                description={play.description}
                date={play.date}/>
            </Link>
            )
        })}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetContent: () => dispatch(startSetContent())
});

const mapStateToProps = (state) => ({
  content: state.content
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaysPage)