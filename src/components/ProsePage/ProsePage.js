import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSetContent } from "../../actions/content"
import PreviewCard from "../utilities/PreviewCard";

class ProsePage extends React.Component{
  state = {
    prose: this.props.content
  };

  componentDidMount(){
    this.props.startSetContent('prose')
      .then(() => {
        this.setState({ prose: this.props.content });
        setTimeout(() => {
          window.location.hash = this.props.location.state.whereTo
        }, 0)
      });
  }

  componentDidUpdate(){
    setTimeout(() => {
      window.location.hash = this.props.location.state.whereTo
    }, 0)
  }

  render () {
    return(
      <div className="plays">
        <div className="ten-min-plays">
          <h1 id="short-stories" className="ten-min-plays__title">Short Stories</h1>
          {this.state.prose.map((prose) => {
            if(prose.subcategory === 'short-story'){
              return(
                <div className="list_item">
                  <Link to={`/content/${prose.id}`}>
                    <PreviewCard
                      contentId={prose.id}
                      title={prose.title}
                      description={prose.description}
                      date={prose.date}/>
                  </Link>
                </div>
              )
            }
          })}
        </div>


        <div id="online-series" className="one-act-plays">
          <h1 className="one-act-plays__title">Online Series</h1>
          {this.state.prose.map((prose) => {
            if(prose.subcategory === 'online-series'){
              return(
                <Link className="list_items" to={`/content/${prose.id}`}>
                  <PreviewCard
                    contentId={prose.id}
                    title={prose.title}
                    description={prose.description}
                    date={prose.date}/>
                </Link>
              )
            }
          })}
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProsePage)