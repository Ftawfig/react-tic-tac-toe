"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Board": () => (/* binding */ Board),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "Square": () => (/* binding */ Square),
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Square({
  num,
  value,
  onSquareClick,
  winningSquares
}) {
  function handleClick() {
    console.log(console.log('square #' + num + ' clicked: value:' + value));
    onSquareClick(num - 1);
  }

  var isWinningSquare = false;
  console.log(winningSquares);

  for (let i = 0; i < winningSquares.length; i++) {
    if (winningSquares[i] == num - 1) {
      isWinningSquare = true;
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
    className: "square" + (isWinningSquare == 1 ? "  winning-square" : ""),
    onClick: handleClick,
    children: value
  });
}

function calculateWinner(squares, winningSquares, setWinningSquares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //check if any of the lines match up. if so, return the winner

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      if (winningSquares[0] == null) {
        setWinningSquares(lines[i].slice());
      }

      return squares[a];
    }
  } //If there are no empty squares, declare a draw


  for (let i = 0; i < squares.length; i++) {
    var draw = true;

    if (squares[i] == null) {
      draw = false;
      break;
    }
  }

  if (draw) {
    console.log("Draw!");
    return "Draw!";
  }

  return null;
}

function randomBool() {
  const max = 2;
  const min = 0;
  return Math.floor(Math.random() * 2) > 0;
} //Row() - returns a Row component of three squares. Gives each square a number starting from {start}


function Row({
  start,
  squares,
  handleClick,
  winningSquares
}) {
  var row = []; //generate three squares 

  for (var i = 0; i < 3; i++) {
    var num = i + start;
    row.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Square, {
      num: num,
      value: squares[num - 1],
      onSquareClick: handleClick,
      winningSquares: winningSquares
    }));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "row",
    children: row
  });
} //Board() - returns a Board componenent of nine squares across three rows

function Board({
  xIsNext,
  squares,
  onPlay
}) {
  var board = [];
  const [winningSquares, setWinningSquares] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array(3).fill(null));
  const winner = calculateWinner(squares, winningSquares, setWinningSquares);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares, winningSquares, setWinningSquares)) {
      return;
    } //slice makes a copy of an array


    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "O" : "X";
    onPlay(newSquares);
  }

  let status;

  if (winner) {
    if (winner == "Draw!") {
      status = winner;
    } else {
      status = "Winner: " + (xIsNext ? "X" : "O") + "!";
    }
  } else {
    status = "Next player: " + (xIsNext ? "O" : "X");
  }

  board.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
      className: "status-text",
      children: status
    })
  }));

  for (var i = 0; i < 3; i++) {
    board.push( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Row, {
      start: i * 3 + 1,
      squares: squares,
      handleClick: handleClick,
      winningSquares: winningSquares
    }));
  }

  return board;
}
function Game() {
  //true if X's turn is next, false if O is next. Randomized at init
  const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(randomBool());
  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const currentSquares = history[currentMove];

  function handlePlay(newSquares) {
    const newHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(moveNum) {
    setHistory(history.slice(0, moveNum + 1));
    setCurrentMove(moveNum);
  }

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Restart";
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
        onClick: () => jumpTo(move),
        children: description
      })
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "game-board",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Board, {
        xIsNext: xIsNext,
        squares: currentSquares,
        onPlay: handlePlay
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "game-info" + (history.length == 1 ? " hidden" : ""),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
        children: "Rewind:"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("ul", {
        className: "moves-list",
        children: moves
      })]
    })]
  });
}

/***/ })

};
;