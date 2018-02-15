import React from 'react';
import ReactDOM from 'react-dom';


// app!
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<Board
			numRows="6"
			board={this.props.board}
			/>
			</div>
		);
	}
}

// board!
class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: this.props.board,
			player: 1, // player 1 + player 2
			playing: true
		}
	}

	handleClick(col) {
		var row = this.props.numRows - 1;
		while (this.state.board[col][row] !== 0) {
			row--;
			if (row < 0) { 
				break;
			}
		}
		if (row < 0) {
			console.log('that column is full! play in a different spot');
		} else {
			var boardCopy = Object.assign(this.state.board);
			boardCopy[col][row] = this.state.player;
			var nextPlayer = this.state.player % 2 === 0 ? 1 : 2;
			this.setState({
				board: boardCopy,
				player: nextPlayer
			});
		}
	}

	render() {
		return (
			<div className="board">
			{this.props.board.map((elem, index) =>
				<Column
				colArr={elem}
				colIndex={index}
				handleClick={this.handleClick.bind(this)}
				key={index}
				/>
			)}
			</div>
		);
	}
}

// column!
var Column = (props) => (
	<div className="column" onClick={() => props.handleClick(props.colIndex)}>


	{props.colArr.map((elem, index) =>
		<Square
		class={elem === 0 ? "empty" : (elem === 1 ? "player1" : "player2")}
		key={index}

		/>
	)}
	</div>
);


// square!
var Square = (props) => (
	<div className={props.class}>
	</div>
);

// initialize
var getInitialBoard = (cols, rows) => {
	// CODE FOR A TERRIBLE NON-WORKING BOARD!!!!!!
	// var board = [];
	// var col = [];
	// for (var i = 0; i < rows; i++) {
	// 	col.push(0);
	// }
	// for (var i = 0; i < cols; i++) {
	// 	board.push(col);
	// }
	// return board;
	var board = [];
	for (var i = 0; i < cols; i++) {
		board[i] = new Array(rows).fill(0);
	}
	return board;
};

var initialBoard = getInitialBoard(7, 6);

ReactDOM.render(
	<App board={initialBoard}/>,
	document.getElementById('app')
);