import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { history } from "../../routers/AppRouter"
import { startSetContent } from "../../actions/content"
import PreviewCard from "./PreviewCard";

class PlaysPage extends React.Component{
  state = {
    plays: this.props.content
  };

  componentDidMount(){
    this.props.startSetContent()
      .then(() => {
        this.setState({ plays: this.props.content });
        // history.push(`${window.location.href}`)
      });
  }

  render () {
    return(
      <div className="plays">

        <div className="ten-min-plays">
          <h1 id="ten-minute-plays" className="ten-min-plays__title">10 Minute Plays</h1>
          {this.state.plays.map((play) => {
            if(play.subcategory === 'ten-min-play'){
              return(
                <div className="list_item">
                  <Link to={`/content/${play.id}`}>
                    <PreviewCard
                      contentId={play.id}
                      title={play.title}
                      description={play.description}
                      date={play.date}/>
                  </Link>
                </div>
              )
            }
          })}
        </div>


        <div id="one-act-plays" className="one-act-plays">
          <h1 className="one-act-plays__title">One Act Plays</h1>
          {this.state.plays.map((play) => {
            if(play.subcategory === 'one-act-play'){
              return(
                <Link className="list_items" to={`/content/${play.id}`}>
                  <PreviewCard
                    contentId={play.id}
                    title={play.title}
                    description={play.description}
                    date={play.date}/>
                </Link>
              )
            }
          })}
        </div>


        <div id="full-length-plays" className="full-length-plays">
          <h1 className="full-length-plays__title">Full-Length Plays</h1>
          {this.state.plays.map((play) => {
            if(play.subcategory === 'full-length-play'){
              return(
                <Link contentId={play.id} className="list_items" to={`/content/${play.id}`}>
                  <PreviewCard
                    contentId={play.id}
                    title={play.title}
                    description={play.description}
                    date={play.date}/>
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
  startSetContent: () => dispatch(startSetContent())
});

const mapStateToProps = (state) => ({
  content: state.content
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaysPage)