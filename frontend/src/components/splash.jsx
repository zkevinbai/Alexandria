import React, { Component } from 'react';
import SearchBarContainer from './search/searchBarContainer';
import './splash.css'


export default class Splash extends Component {
  
  render() {
    return (
      <div>
        <div className="splash-wrapper">
          
          <div className="splash-image">
            <div className="splash-image-text">
              <h1>Track your reading with Alexandria</h1>
            </div>
            <div className="splash-search-bar">
              <SearchBarContainer />
            </div>
          </div>
          
          <div className="splash-middle-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed lectus felis. Duis vitae nisi turpis. Curabitur in ligula nec nisi bibendum auctor. Duis pellentesque nunc at dictum ullamcorper. Pellentesque dictum viverra est vestibulum hendrerit. </p>
          </div>
          
          <div className="splash-info-box">
            <div>
              <i class="fas fa-search"></i>
              <h3>Track your reading</h3>
              <p>Keep track of what you're reading, what you've read, and what you want to read. </p>
            </div>
            <div>
              <i class="fas fa-book"></i>
              <h3>Meet your goals</h3>
              <p>Set and track reading goals to help you read more.</p>
            </div>
            <div>
              <i class="fas fa-bolt"></i>
              <h3>Find new books</h3>
              <p>Get reading suggestions tailored to your taste along with curated picks from our team.</p>
            </div>
          </div>
        
        </div>
      </div>
    )
  }
}