import React from 'react';
import ReactDOM from 'react-dom';
import Scorekeep from './scorekeep.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    var scorekeep = new Scorekeep();
    this.state = {
      score: 0,
      frame: 1,
      isFirstBowl: true,
      message: 'ready to get your bowling on?',
      scorekeep: scorekeep
    }
  }
  
  handleClick(value) {
    console.log('clicked');
    // console.log(this.state.scorekeep.getScore());
    // var newScore = this.state.scorekeep.addBowl(value);
    // console.log(newScore);
    
    var nextFrame = this.state.scorekeep.getNextFrame(this.state.frame);
    this.setState({
      score: this.state.score + value,
      isFirstBowl: !this.state.isFirstBowl,
      frame: nextFrame
      // message: 'clicked!'
    });
    
  }
  
  render() {
    return (
      <div className="container">
        <ButtonBoard
        handleClick={this.handleClick.bind(this)}
        />
        <ScoreBoard 
        score={this.state.score}
        frame={this.state.frame}
        message={this.state.message}
        />
      </div>
    )
  }
}

class ButtonBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="button-board">
      {new Array(11).fill(0).map((elem, index) => 
        <Button
        value={index}
        key={index}
        handleClick={this.props.handleClick}
        />
      )}
      </div>
    )
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div 
      className="button"
      onClick={() => this.props.handleClick(this.props.value)}>
      {this.props.value}
      </div>
    )
  }
}

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="score-board">
        <div id="frame">frame: {this.props.frame}</div>
        <div id="score">score: {this.props.score}</div>
        <div>
          <div id="message">{this.props.message}</div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Board />,
  document.getElementById('app')
);