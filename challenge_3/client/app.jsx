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

		var hasFourCol = (column, player) => {
			var result = false;
			var count = 0;
			for (var i = column.length - 1; i >= 0; i--) {
				if (column[i] === player) {
					count++;
				} else {
					count = 0;
				}
				if (count === 4) {
					result = true;
				}
			}
			console.log('hasFourCol', result);
			return result;
		};

		var hasFourRow = (board, rowIndex, player) => {
			var result = false;
			var count = 0;
			board.forEach((column) => {
				if (column[rowIndex] === player) {
					count++;
				} else {
					count = 0;
				}
				if (count === 4) {
					result = true;
				}
			});
			console.log('hasFourRow', result);
			return result;
		};

		var hasFourMajorDiag = () => {

		};

		var hasFourMinorDiag = () => {

		};		

		var hasWinner = (board) => {
			return hasFourCol(this.state.board[col], this.state.player)
			|| hasFourRow(this.state.board, row, this.state.player);
		};

		var hasTie = () => {
			return !this.state.board.some((col) => {
				return col.some((square) => {
					return square === 0;
				});
			});
		};

		var isGameOver = () => {
			return hasWinner.call(this) || hasTie.call(this);
		};

		// START HERE
		var row = this.props.numRows - 1;
		while (this.state.board[col][row] !== 0) {
			row--;
			if (row < 0) break;
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
			if (isGameOver.call(this)) {
				console.log('game over!')
			} else {
				console.log('keep playing!');
			}
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