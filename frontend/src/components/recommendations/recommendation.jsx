import React from 'react';
import RecItem from './recItem';
import { parseSingleRec } from '../../util/searchParseUtil';
import { queryAuthor } from '../../util/bookApiUtil';
// import './recommendations.css';

class Recommendation extends React.Component {

  constructor(props){
    super(props);
    this.getRecs = this.getRecs.bind(this);
    this.getAPICall = this.getAPICall.bind(this);
    this.handleAPICall = this.handleAPICall.bind(this);
    this.recs = [];
    this.waiting = 0;
    this.state = { recs: [] };
  }

  componentDidUpdate(){
    if(this.state.recs.length === 0 && this.props.recWanted){
      this.getRecs();
    }
  }

  async getRecs(){
    if(this.props.recWanted){
      const authors = Object.keys(this.props.authorHash);
      const authorHash = this.props.authorHash;
      for(let i = 0; i < authors.length; i++){
        let author = authors[i];
        let title = authorHash[author];
        let queryString = { author, title }
        await this.getAPICall(queryString);
        }
      }
  }

  getAPICall(queryString) {
    this.waiting += 1;
    queryAuthor(queryString)
      .then(res => ( this.handleAPICall(parseSingleRec(res))))
  }

  handleAPICall(rec) {
    this.recs.push(rec);
    this.waiting -= 1;
    if(this.waiting === 0){
      const recommendations = this.recs;
      this.setState({ recs: recommendations })
    }
  }
  
  renderRecs(recs){
    return recs.map((rec, i) => <RecItem key={i} book={rec} />)
  }

  render(){
    if(this.state.recs.length === 0){
      return null;
    }

    let parsedRecs = this.state.recs.filter(rec => rec)
    let renderedRecs = this.renderRecs(parsedRecs);
    return (
      <>
        <h2>Your Recommendations</h2>
        <div className="recs-wrapper">
          {renderedRecs}
        </div>
      </>
    )
  }
}

export default Recommendation;