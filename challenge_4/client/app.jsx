import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      frame: 1,
      message: 'ready to get your bowling on?'
    }
  }
  
  handleClick(value) {
    console.log('clicked')
    this.setState({
      // score: this.state.score + value,
      // message: 'clicked!'
    });
  }
  
  render() {
    return (
      <div className="container">
        <ButtonBoard
        buttons={this.props.buttons}
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
      {this.props.buttons.map((elem, index) => 
        <Button
        value={elem}
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
  <Board buttons={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>,
  document.getElementById('app')
);