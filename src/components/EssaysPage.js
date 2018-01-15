import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSetContent } from "../actions/content"
import PreviewCard from "./utilities/PreviewCard";

class EssaysPage extends React.Component{
  state = {
    essays: this.props.content
  };

  componentDidMount(){
    this.props.startSetContent('essay')
      .then(() => {
        this.setState({ essays: this.props.content });
      });
  }

  render () {
    return(
      <div className="plays">
        <div className="ten-min-plays">
          <h1 id="ten-minute-plays" className="ten-min-plays__title">Essays</h1>
          {this.state.essays.map((essay) => {
            if(essay.subcategory === 'essay'){
              return(
                <div className="list_item">
                  <Link to={`/content/${essay.id}`}>
                    <PreviewCard
                      contentId={essay.id}
                      title={essay.title}
                      description={essay.description}
                      date={essay.date}/>
                  </Link>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EssaysPage)