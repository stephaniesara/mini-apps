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
			rows={[0, 1, 2, 3, 4, 5]}
			columns={[0, 1, 2, 3, 4, 5, 6]}
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

	handleClick(x) {
		console.log('clicked!')
		var col = this.state.board[x];
		// col[5] = 2;
		// col[4] = 2;
		// col[4] = 2;
		// col[3] = 2;
		// col[2] = 2;
		// col[1] = 2;
		// col[0] = 2;
		// console.log(col);
		var index = this.props.numRows - 1;
		while (col[index]) {
			index--;
			if (index < 0) break;
		}
		if (index < 0) {
			console.log('that column is already full, you can\'t play there!');
		} else {
			this.state.board[index] = this.state.player;
		}
	}

	render() {
		return (
			<div className="board">
			{this.props.columns.map((elem) =>
				<Column
				x={elem}
				rows={this.props.rows}
				key={'' + elem}
				handleClick={this.handleClick.bind(this)}
				/>
			)}
			</div>
		);
	}
}

// column!
var Column = (props) => (
	<div className="column">
	<button onClick={() => props.handleClick(props.x)}>
		click here
	</button>

	<div>
	{props.rows.map((elem) =>
		<Square
		x={props.x}
		y={elem}
		key={'' + props.x + elem}
		/>
	)}
	</div>
	</div>
);


// square!
var Square = (props) => (
	<div className="square">
	<div>
	</div>
	</div>
);

// initialize
var getInitialBoard = (cols, rows) => {
	var board = [];
	var col = [];
	for (var i = 0; i < rows; i++) {
		col.push(false);
		// col.push(i);
	}
	for (var i = 0; i < cols; i++) {
		board.push(col);
	}
	console.log(board);
	return board;
};

var initialBoard = getInitialBoard(7, 6);

ReactDOM.render(
	<App board={initialBoard}/>,
	document.getElementById('app')
);