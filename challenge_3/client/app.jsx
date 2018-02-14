import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<Board
			rows={[0, 1, 2, 3, 4, 5]}
			columns={[0, 1, 2, 3, 4, 5, 6]}/>
			</div>
		);
	}
}

class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="board">
			{this.props.columns.map((elem) =>
				<Column
				x={elem}
				rows={this.props.rows}
				key={'' + elem}
				/>
			)}
			</div>
		);
	}
}

class Column extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="column">
			{this.props.rows.map((elem) =>
				<Square
				x={this.props.x}
				y={elem}
				key={'' + this.props.x + elem}
				/>
			)}
			</div>
		);
	}
}

var Square = () => (
	<div className="square">
	<div>
	o
	</div>
	</div>
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);