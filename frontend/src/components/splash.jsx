import React, { Component } from 'react';
import SearchBarContainer from './search/searchBarContainer';


export default class Splash extends Component {
  
  render() {
    return (
      <div>
        <div className="splash-page">
          <SearchBarContainer/>
        </div>
      </div>
    )
  }
}