import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSetContent } from "../actions/content"
import PreviewCard from "./utilities/PreviewCard";

class LinksPage extends React.Component{
  state = {
    links: this.props.content
  };

  componentDidMount(){
    this.props.startSetContent('link')
      .then(() => {
        this.setState({ links: this.props.content });
      });
  }

  render () {
    return(
      <div className="plays">
        <div className="category-container">
          <h1 id="links" className="category-container__title">Links</h1>
          {this.state.links.map((link) => {
            if(link.subcategory === 'link'){
              return(
                <div className="list_item">
                  <Link to={`/${link.id}`}>
                    <PreviewCard
                      contentId={link.id}
                      title={link.title}
                      description={link.description}
                      date={link.date}
                      url={link.url}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LinksPage)