import * as d3 from 'd3';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Graph extends React.Component {

  constructor(props){
    super(props)
    this.getGenreArray = this.getGenreArray.bind(this);
    this.books = this.props.books
  }
 
  makeChart(){
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    const data = this.getGenreArray();
    const r = 275; // outer radius 
    //put pie chart in graph div from books index
    const svg = d3.select(".graph").append("svg")
      .attr("width", 600)
      .attr("height", 600);
    const group = svg.append("g")
      .attr("transform", "translate(300, 300)"); // set center of pie to 300,300

    const arc = d3.arc()
      .innerRadius(0)//makes a closed pie chart
      .outerRadius(r);

    const pie = d3.pie()
      .value(function (d) { return d; }); 

    const arcs = group.selectAll(".arc")
      .data(pie(data.value))
      .enter()
      .append("g")
      .attr("class", "arc");
      
      arcs.append("path")
      .attr("d", arc) 
      .attr("fill", function (d, i) { return colorScale(i); });
    
    //add own elements for text so data doesn't cover it
    const labels = group.selectAll(".arc2")
      .data(pie(data.value))
      .enter()
      .append('g')
      .attr('class', 'labels')

    labels.append("text")
      .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; }) // put text at the center of every arc
      .attr("text-anchor", "middle")
      .attr("font-size", "1em")
      .text( function (d, i) { return data.label[i]; });

  }
  
  getGenreArray() {
    let books =this.books;
    let hash = {};
    Object.values(books).forEach( book => {
      if(hash[book.genre]){
        hash[book.genre] += 1;
      } else{
        hash[book.genre] = 1;
      }
    })
    const info = {
      label: Object.keys(hash),
      value: Object.values(hash)
    }
    return info;
  }

  componentDidMount(){
    debugger;
    this.makeChart();
  }

  shouldComponentUpdate(){
    debugger;    
  }
  
  render(){
    return( 
      <div></div> 
    )
  }
}

export default withRouter(Graph);
