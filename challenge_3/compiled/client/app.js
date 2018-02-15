'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// app!
var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(Board, {
					numRows: '6',
					board: this.props.board
				})
			);
		}
	}]);

	return App;
}(_react2.default.Component);

// board!


var Board = function (_React$Component2) {
	_inherits(Board, _React$Component2);

	function Board(props) {
		_classCallCheck(this, Board);

		var _this2 = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

		_this2.state = {
			board: _this2.props.board,
			player: 1, // player 1 + player 2
			playing: true
		};
		return _this2;
	}

	_createClass(Board, [{
		key: 'handleClick',
		value: function handleClick(col) {
			// console.log(col);
			var row = this.props.numRows - 1;
			while (this.state.board[col][row] !== 0) {
				row--;
			}
			if (row < 0) {
				console.log('that column is full! play in a different spot');
			} else {
				var boardCopy = Object.assign(this.state.board);
				boardCopy[col][row] = this.state.player;
				this.setState({
					board: boardCopy
				});
				console.log('board is');
				console.log(this.state.board);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'board' },
				this.props.board.map(function (elem, index) {
					return _react2.default.createElement(Column, {
						colArr: elem,
						colIndex: index,
						handleClick: _this3.handleClick.bind(_this3),
						key: index
					});
				})
			);
		}
	}]);

	return Board;
}(_react2.default.Component);

// column!


var Column = function Column(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'column', onClick: function onClick() {
				return props.handleClick(props.colIndex);
			} },
		props.colArr.map(function (elem, index) {
			return _react2.default.createElement(Square, {
				'class': elem === 0 ? "empty" : elem === 1 ? "player1" : "player2",
				key: index

			});
		})
	);
};

// square!
var Square = function Square(props) {
	return _react2.default.createElement('div', { className: props.class });
};

// initialize
var getInitialBoard = function getInitialBoard(cols, rows) {
	var board = [];
	var col = [];
	for (var i = 0; i < rows; i++) {
		col.push(0);
	}
	for (var i = 0; i < cols; i++) {
		board.push(col);
	}
	return board;
};

var initialBoard = getInitialBoard(7, 6);

_reactDom2.default.render(_react2.default.createElement(App, { board: initialBoard }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiYm9hcmQiLCJDb21wb25lbnQiLCJCb2FyZCIsInN0YXRlIiwicGxheWVyIiwicGxheWluZyIsImNvbCIsInJvdyIsIm51bVJvd3MiLCJjb25zb2xlIiwibG9nIiwiYm9hcmRDb3B5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0U3RhdGUiLCJtYXAiLCJlbGVtIiwiaW5kZXgiLCJoYW5kbGVDbGljayIsImJpbmQiLCJDb2x1bW4iLCJjb2xJbmRleCIsImNvbEFyciIsIlNxdWFyZSIsImNsYXNzIiwiZ2V0SW5pdGlhbEJvYXJkIiwiY29scyIsInJvd3MiLCJpIiwicHVzaCIsImluaXRpYWxCb2FyZCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtJQUNNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUdBQ1pBLEtBRFk7QUFFbEI7Ozs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNBLGtDQUFDLEtBQUQ7QUFDQSxjQUFRLEdBRFI7QUFFQSxZQUFPLEtBQUtBLEtBQUwsQ0FBV0M7QUFGbEI7QUFEQSxJQUREO0FBUUE7Ozs7RUFkZ0IsZ0JBQU1DLFM7O0FBaUJ4Qjs7O0lBQ01DLEs7OztBQUNMLGdCQUFZSCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkdBQ1pBLEtBRFk7O0FBRWxCLFNBQUtJLEtBQUwsR0FBYTtBQUNaSCxVQUFPLE9BQUtELEtBQUwsQ0FBV0MsS0FETjtBQUVaSSxXQUFRLENBRkksRUFFRDtBQUNYQyxZQUFTO0FBSEcsR0FBYjtBQUZrQjtBQU9sQjs7Ozs4QkFFV0MsRyxFQUFLO0FBQ2hCO0FBQ0EsT0FBSUMsTUFBTSxLQUFLUixLQUFMLENBQVdTLE9BQVgsR0FBcUIsQ0FBL0I7QUFDQSxVQUFPLEtBQUtMLEtBQUwsQ0FBV0gsS0FBWCxDQUFpQk0sR0FBakIsRUFBc0JDLEdBQXRCLE1BQStCLENBQXRDLEVBQXlDO0FBQ3hDQTtBQUNBO0FBQ0QsT0FBSUEsTUFBTSxDQUFWLEVBQWE7QUFDWkUsWUFBUUMsR0FBUixDQUFZLCtDQUFaO0FBQ0EsSUFGRCxNQUVPO0FBQ04sUUFBSUMsWUFBWUMsT0FBT0MsTUFBUCxDQUFjLEtBQUtWLEtBQUwsQ0FBV0gsS0FBekIsQ0FBaEI7QUFDQVcsY0FBVUwsR0FBVixFQUFlQyxHQUFmLElBQXNCLEtBQUtKLEtBQUwsQ0FBV0MsTUFBakM7QUFDQSxTQUFLVSxRQUFMLENBQWM7QUFDYmQsWUFBT1c7QUFETSxLQUFkO0FBR0FGLFlBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FELFlBQVFDLEdBQVIsQ0FBWSxLQUFLUCxLQUFMLENBQVdILEtBQXZCO0FBQ0E7QUFDRDs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWY7QUFDQyxTQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJlLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFlBQ3JCLDhCQUFDLE1BQUQ7QUFDQSxjQUFRRCxJQURSO0FBRUEsZ0JBQVVDLEtBRlY7QUFHQSxtQkFBYSxPQUFLQyxXQUFMLENBQWlCQyxJQUFqQixRQUhiO0FBSUEsV0FBS0Y7QUFKTCxPQURxQjtBQUFBLEtBQXJCO0FBREQsSUFERDtBQVlBOzs7O0VBMUNrQixnQkFBTWhCLFM7O0FBNkMxQjs7O0FBQ0EsSUFBSW1CLFNBQVMsU0FBVEEsTUFBUyxDQUFDckIsS0FBRDtBQUFBLFFBQ1o7QUFBQTtBQUFBLElBQUssV0FBVSxRQUFmLEVBQXdCLFNBQVM7QUFBQSxXQUFNQSxNQUFNbUIsV0FBTixDQUFrQm5CLE1BQU1zQixRQUF4QixDQUFOO0FBQUEsSUFBakM7QUFHQ3RCLFFBQU11QixNQUFOLENBQWFQLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsVUFDakIsOEJBQUMsTUFBRDtBQUNBLGFBQU9ELFNBQVMsQ0FBVCxHQUFhLE9BQWIsR0FBd0JBLFNBQVMsQ0FBVCxHQUFhLFNBQWIsR0FBeUIsU0FEeEQ7QUFFQSxTQUFLQzs7QUFGTCxLQURpQjtBQUFBLEdBQWpCO0FBSEQsRUFEWTtBQUFBLENBQWI7O0FBZUE7QUFDQSxJQUFJTSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ3hCLEtBQUQ7QUFBQSxRQUNaLHVDQUFLLFdBQVdBLE1BQU15QixLQUF0QixHQURZO0FBQUEsQ0FBYjs7QUFLQTtBQUNBLElBQUlDLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3JDLEtBQUkzQixRQUFRLEVBQVo7QUFDQSxLQUFJTSxNQUFNLEVBQVY7QUFDQSxNQUFLLElBQUlzQixJQUFJLENBQWIsRUFBZ0JBLElBQUlELElBQXBCLEVBQTBCQyxHQUExQixFQUErQjtBQUM5QnRCLE1BQUl1QixJQUFKLENBQVMsQ0FBVDtBQUNBO0FBQ0QsTUFBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLElBQXBCLEVBQTBCRSxHQUExQixFQUErQjtBQUM5QjVCLFFBQU02QixJQUFOLENBQVd2QixHQUFYO0FBQ0E7QUFDRCxRQUFPTixLQUFQO0FBQ0EsQ0FWRDs7QUFZQSxJQUFJOEIsZUFBZUwsZ0JBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQW5COztBQUVBLG1CQUFTTSxNQUFULENBQ0MsOEJBQUMsR0FBRCxJQUFLLE9BQU9ELFlBQVosR0FERCxFQUVDRSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5cbi8vIGFwcCFcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PEJvYXJkXG5cdFx0XHRudW1Sb3dzPVwiNlwiXG5cdFx0XHRib2FyZD17dGhpcy5wcm9wcy5ib2FyZH1cblx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIGJvYXJkIVxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Ym9hcmQ6IHRoaXMucHJvcHMuYm9hcmQsXG5cdFx0XHRwbGF5ZXI6IDEsIC8vIHBsYXllciAxICsgcGxheWVyIDJcblx0XHRcdHBsYXlpbmc6IHRydWVcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGljayhjb2wpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhjb2wpO1xuXHRcdHZhciByb3cgPSB0aGlzLnByb3BzLm51bVJvd3MgLSAxO1xuXHRcdHdoaWxlICh0aGlzLnN0YXRlLmJvYXJkW2NvbF1bcm93XSAhPT0gMCkge1xuXHRcdFx0cm93LS07XG5cdFx0fVxuXHRcdGlmIChyb3cgPCAwKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGhhdCBjb2x1bW4gaXMgZnVsbCEgcGxheSBpbiBhIGRpZmZlcmVudCBzcG90Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBib2FyZENvcHkgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuYm9hcmQpO1xuXHRcdFx0Ym9hcmRDb3B5W2NvbF1bcm93XSA9IHRoaXMuc3RhdGUucGxheWVyO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGJvYXJkOiBib2FyZENvcHlcblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2coJ2JvYXJkIGlzJyk7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJvYXJkKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuXHRcdFx0e3RoaXMucHJvcHMuYm9hcmQubWFwKChlbGVtLCBpbmRleCkgPT5cblx0XHRcdFx0PENvbHVtblxuXHRcdFx0XHRjb2xBcnI9e2VsZW19XG5cdFx0XHRcdGNvbEluZGV4PXtpbmRleH1cblx0XHRcdFx0aGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX1cblx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIGNvbHVtbiFcbnZhciBDb2x1bW4gPSAocHJvcHMpID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDbGljayhwcm9wcy5jb2xJbmRleCl9PlxuXG5cblx0e3Byb3BzLmNvbEFyci5tYXAoKGVsZW0sIGluZGV4KSA9PlxuXHRcdDxTcXVhcmVcblx0XHRjbGFzcz17ZWxlbSA9PT0gMCA/IFwiZW1wdHlcIiA6IChlbGVtID09PSAxID8gXCJwbGF5ZXIxXCIgOiBcInBsYXllcjJcIil9XG5cdFx0a2V5PXtpbmRleH1cblxuXHRcdC8+XG5cdCl9XG5cdDwvZGl2PlxuKTtcblxuXG4vLyBzcXVhcmUhXG52YXIgU3F1YXJlID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc30+XG5cdDwvZGl2PlxuKTtcblxuLy8gaW5pdGlhbGl6ZVxudmFyIGdldEluaXRpYWxCb2FyZCA9IChjb2xzLCByb3dzKSA9PiB7XG5cdHZhciBib2FyZCA9IFtdO1xuXHR2YXIgY29sID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0Y29sLnB1c2goMCk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb2xzOyBpKyspIHtcblx0XHRib2FyZC5wdXNoKGNvbCk7XG5cdH1cblx0cmV0dXJuIGJvYXJkO1xufTtcblxudmFyIGluaXRpYWxCb2FyZCA9IGdldEluaXRpYWxCb2FyZCg3LCA2KTtcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8QXBwIGJvYXJkPXtpbml0aWFsQm9hcmR9Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTsiXX0=