import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSetContent } from "../actions/content"
import PreviewCard from "./utilities/PreviewCard";
import Loading from "./Loading";

class EssaysPage extends React.Component{
  state = {
    essays: this.props.content,
    pageLoaded: false,
  };

  componentDidMount(){
    this.props.startSetContent('essay')
      .then(() => {
        this.setState({ essays: this.props.content, pageLoaded: true });
      });
  }

  render () {
    return(
      <div>
        {this.state.pageLoaded ?
          <div className="plays">
            <div className="category-container">
              <h1 id="ten-minute-plays" className="category-container__title">Essays</h1>
              {this.state.essays.map((essay) => {
                if (essay.subcategory === 'essay') {
                  return (
                    <div className="list_item">
                      <Link to={`/${essay.id}`}>
                        <PreviewCard
                          contentId={essay.id}
                          title={essay.title}
                          description={essay.description}
                          date={essay.date}
                          url={essay.url}/>
                      </Link>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EssaysPage)