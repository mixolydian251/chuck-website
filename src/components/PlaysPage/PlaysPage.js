import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { history } from "../../routers/AppRouter"
import { startSetContent } from "../../actions/content"
import PreviewCard from "../utilities/PreviewCard";
import Loading from '../Loading';

class PlaysPage extends React.Component{
  state = {
    plays: this.props.content,
    pageLoaded: false,
  };

  componentDidMount(){
    this.props.startSetContent('play')
      .then(() => {
        this.setState({ plays: this.props.content, pageLoaded: true});
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
      <div>
        { this.state.pageLoaded ?
          <div className="plays">
            <div className="category-container">
              <h1 id="ten-minute-plays" className="category-container__title">10 Minute Plays</h1>
              {this.state.plays.map((play) => {
                if (play.subcategory === 'ten-min-play') {
                  return (
                    <div className="list_item">
                      <Link to={`/${play.id}`}>
                        <PreviewCard
                          contentId={play.id}
                          title={play.title}
                          description={play.description}
                          date={play.date}
                          url={play.url}/>
                      </Link>
                    </div>
                  )
                }
              })}
            </div>


            <div id="one-act-plays" className="category-container">
              <h1 className="category-container__title">One Act Plays</h1>
              {this.state.plays.map((play) => {
                if (play.subcategory === 'one-act-play') {
                  return (
                    <Link className="list_items" to={`/${play.id}`}>
                      <PreviewCard
                        contentId={play.id}
                        title={play.title}
                        description={play.description}
                        date={play.date}
                        url={play.url}/>
                    </Link>
                  )
                }
              })}
            </div>


            <div id="full-length-plays" className="category-container">
              <h1 className="category-container__title">Full-Length Plays</h1>
              {this.state.plays.map((play) => {
                if (play.subcategory === 'full-length-play') {
                  return (
                    <Link contentId={play.id} className="list_items" to={`${play.id}`}>
                      <PreviewCard
                        contentId={play.id}
                        title={play.title}
                        description={play.description}
                        date={play.date}
                        url={play.url}/>
                    </Link>
                  )
                }
              })}
            </div>
          </div>

          :

          <Loading/>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaysPage)