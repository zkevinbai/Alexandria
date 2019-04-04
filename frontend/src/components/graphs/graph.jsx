import * as d3 from 'd3';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Graph extends React.Component {

  constructor(props){
    super(props);
    this.getGenreArray = this.getGenreArray.bind(this);
  }
 
  makeChart(){
    d3.selectAll("svg").remove();
    const colorScale = d3.scaleOrdinal(d3.schemePaired);
    const data = this.getGenreArray();
    const r = 250; // outer radius 
    //put pie chart in graph div from books index
    const svg = d3.select(".graph").append("svg")
      .attr("width", 1100)
      .attr("height", 600)
      .attr('viewBox', '-550 -300 1100 600');

    const group = svg.append("g")

    const arc = d3.arc()
      // .innerRadius(0)//makes a closed pie chart
      .innerRadius(120)//makes a donut chart
      .outerRadius(r);

    const outerArc = d3.arc()
      .outerRadius(r * 0.9)
      .innerRadius(r * 0.9);

    const pie = d3.pie()
      .value(function (d) { 
        return d; }); 

    const arcs = group.selectAll(".arc")
      .data(pie(data.value))
      .enter()
      .append("g")
      .attr("class", "arc");
      
      arcs.append("path")
      .attr("d", arc) 
      .attr("fill", function (d, i) { return colorScale(i); })
      .attr("opacity", "0.85");
    
    //add own elements for text so data doesn't cover it
    const labels = group.selectAll(".arc2")
      .data(pie(data.value))
      .enter()
      .append('g')
      .attr('class', 'labels');

    labels.append("text")
      // .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; }) // put text at the center of every arc
      .attr("text-anchor", "middle")
      .attr("font-size", "1em")
      .attr("font-family", "Source Sans Pro")
      .attr("font-weight", "500")
      .text( function (d, i) { 
        return data.label[i]; })
      .attr('dy', '.35em')
      .attr('transform', function(d) {

          // effectively computes the centre of the slice.
          // see https://github.com/d3/d3-shape/blob/master/README.md#arc_centroid
          var pos = outerArc.centroid(d);

          // changes the point to be on left or right depending on where label is.
          pos[0] = r * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
          return 'translate(' + pos + ')';
      })
      .style('text-anchor', function(d) {
          // if slice centre is on the left, anchor text to start, otherwise anchor to end
          return (midAngle(d)) < Math.PI ? 'start' : 'end';
      });

    const lines = group.append('g').attr('class', 'lines')

    const polyline = lines.selectAll('polyline')
      .data(pie(data.value))
      .enter().append('polyline')
      .attr('stroke','black')
      .attr('fill', 'none')
      .attr('points', function(d) {

          // see label transform function for explanations of these three lines.
          var pos = outerArc.centroid(d);
          pos[0] = r * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
          return [arc.centroid(d), outerArc.centroid(d), pos]
      });

      function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

  }
  
  getGenreArray() {
    let books =this.props.books;
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
    this.makeChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.books.length !== this.props.books.length) {
      this.makeChart();
    }
  }
  
  render(){
    return( 
      <div></div> 
    )
  }
}

export default withRouter(Graph);
