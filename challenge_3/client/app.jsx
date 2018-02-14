import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<Board />
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
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
			</div>
		);
	}
}

var Column = () => (
	<div className="column">
	<div>
	<Square />
	<Square />
	<Square />
	<Square />
	<Square />
	<Square />
	</div>
	</div>
);

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