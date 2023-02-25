"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tic-tac-toe",{

/***/ "./pages/tic-tac-toe.js":
/*!******************************!*\
  !*** ./pages/tic-tac-toe.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": function() { return /* binding */ Board; },\n/* harmony export */   \"Row\": function() { return /* binding */ Row; },\n/* harmony export */   \"Square\": function() { return /* binding */ Square; },\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nfunction Square({\n  num,\n  value,\n  onSquareClick,\n  winningSquares\n}) {\n  function handleClick() {\n    console.log(console.log('square #' + num + ' clicked: value:' + value));\n    onSquareClick(num - 1);\n  }\n\n  var isWinningSquare = false;\n  console.log(winningSquares);\n\n  for (let i = 0; i < winningSquares.length; i++) {\n    if (winningSquares[i] == num - 1) {\n      isWinningSquare = true;\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n    className: \"square\" + (isWinningSquare == 1 ? \"  winning-square\" : \"\"),\n    onClick: handleClick,\n    children: value\n  });\n}\n_c = Square;\n\nfunction calculateWinner(squares, winningSquares, setWinningSquares) {\n  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //check if any of the lines match up. if so, return the winner\n\n  for (let i = 0; i < lines.length; i++) {\n    const [a, b, c] = lines[i];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      if (winningSquares[0] == null) {\n        setWinningSquares(lines[i].slice());\n      }\n\n      return squares[a];\n    }\n  } //If there are no empty squares, declare a draw\n\n\n  for (let i = 0; i < squares.length; i++) {\n    var draw = true;\n\n    if (squares[i] == null) {\n      draw = false;\n      break;\n    }\n  }\n\n  if (draw) {\n    console.log(\"Draw!\");\n    return \"Draw!\";\n  }\n\n  return null;\n}\n\nfunction randomBool() {\n  const max = 2;\n  const min = 0;\n  return Math.floor(Math.random() * 2) > 0;\n} //Row() - returns a Row component of three squares. Gives each square a number starting from {start}\n\n\nfunction Row({\n  start,\n  squares,\n  handleClick,\n  winningSquares\n}) {\n  var row = []; //generate three squares \n\n  for (var i = 0; i < 3; i++) {\n    var num = i + start;\n    row.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Square, {\n      num: num,\n      value: squares[num - 1],\n      onSquareClick: handleClick,\n      winningSquares: winningSquares\n    }));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    className: \"row\",\n    children: row\n  });\n} //Board() - returns a Board componenent of nine squares across three rows\n\n_c2 = Row;\nfunction Board({\n  xIsNext,\n  squares,\n  onPlay\n}) {\n  _s();\n\n  var board = [];\n  const [winningSquares, setWinningSquares] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array(3).fill(null));\n  const winner = calculateWinner(squares, winningSquares, setWinningSquares);\n\n  function handleClick(i) {\n    if (squares[i] || calculateWinner(squares, winningSquares, setWinningSquares)) {\n      return;\n    } //slice makes a copy of an array\n\n\n    const newSquares = squares.slice();\n    newSquares[i] = xIsNext ? \"O\" : \"X\";\n    onPlay(newSquares);\n  }\n\n  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  if (winner) {\n    if (winner == \"Draw!\") {\n      setStatus(winner);\n    } else {\n      setStatus(\"Winner: \" + (xIsNext ? \"X\" : \"O\") + \"!\");\n    }\n  } else {\n    setStatus(\"Next player: \" + (xIsNext ? \"O\" : \"X\"));\n  }\n\n  board.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n      className: \"status-text\",\n      children: status\n    })\n  }));\n\n  for (var i = 0; i < 3; i++) {\n    board.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Row, {\n      start: i * 3 + 1,\n      squares: squares,\n      handleClick: handleClick,\n      winningSquares: winningSquares\n    }));\n  }\n\n  return board;\n}\n\n_s(Board, \"pJT1X1h9gx10QjWsxep2mXlu8GI=\");\n\n_c3 = Board;\nfunction Game() {\n  _s2();\n\n  //true if X's turn is next, false if O is next. Randomized at init\n  const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(randomBool());\n  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([Array(9).fill(null)]);\n  const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const currentSquares = history[currentMove];\n\n  function handlePlay(newSquares) {\n    const newHistory = [...history.slice(0, currentMove + 1), newSquares];\n    setHistory(newHistory);\n    setCurrentMove(newHistory.length - 1);\n    setXIsNext(!xIsNext);\n  }\n\n  function jumpTo(moveNum) {\n    setHistory(history.slice(0, moveNum + 1));\n    setCurrentMove(moveNum);\n  }\n\n  const moves = history.map((squares, move) => {\n    let description;\n\n    if (move > 0) {\n      description = \"Go to move #\" + move;\n    } else {\n      description = \"Restart\";\n    }\n\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n        onClick: () => jumpTo(move),\n        children: description\n      })\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      className: \"game-board\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Board, {\n        xIsNext: xIsNext,\n        squares: currentSquares,\n        onPlay: handlePlay\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"game-info\" + (history.length == 1 ? \" hidden\" : \"\"),\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n        children: \"Rewind:\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"ul\", {\n        className: \"moves-list\",\n        children: moves\n      })]\n    })]\n  });\n}\n\n_s2(Game, \"QgrtEhNRPOInrGYYcd8hLLxUy54=\");\n\n_c4 = Game;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Square\");\n$RefreshReg$(_c2, \"Row\");\n$RefreshReg$(_c3, \"Board\");\n$RefreshReg$(_c4, \"Game\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxjQUFjLENBQUNLLE9BQUQsQ0FBZDtFQUNIOztFQUVELE1BQU1DLEtBQUssR0FBR1QsT0FBTyxDQUFDVSxHQUFSLENBQVksQ0FBQ3hDLE9BQUQsRUFBVXlDLElBQVYsS0FBbUI7SUFDekMsSUFBSUMsV0FBSjs7SUFFQSxJQUFJRCxJQUFJLEdBQUcsQ0FBWCxFQUFjO01BQ1ZDLFdBQVcsR0FBSSxpQkFBaUJELElBQWhDO0lBQ0gsQ0FGRCxNQUVPO01BQ0hDLFdBQVcsR0FBSSxTQUFmO0lBQ0g7O0lBRUQsb0JBQ0k7TUFBQSx1QkFDSTtRQUFRLE9BQU8sRUFBRyxNQUFNTCxNQUFNLENBQUNJLElBQUQsQ0FBOUI7UUFBQSxVQUF3Q0M7TUFBeEM7SUFESixFQURKO0VBS0gsQ0FkYSxDQUFkO0VBZ0JBLG9CQUNJO0lBQUEsd0JBQ0k7TUFBSyxTQUFTLEVBQUMsWUFBZjtNQUFBLHVCQUNJLHVEQUFDLEtBQUQ7UUFDSSxPQUFPLEVBQUt2QixPQURoQjtRQUVJLE9BQU8sRUFBS2UsY0FGaEI7UUFHSSxNQUFNLEVBQUtDO01BSGY7SUFESixFQURKLGVBUUk7TUFBSyxTQUFTLEVBQUksZUFBZUwsT0FBTyxDQUFDaEMsTUFBUixJQUFrQixDQUFsQixHQUFzQixTQUF0QixHQUFrQyxFQUFqRCxDQUFsQjtNQUFBLHdCQUNRO1FBQUEsVUFBSTtNQUFKLEVBRFIsZUFFUTtRQUFJLFNBQVMsRUFBQyxZQUFkO1FBQUEsVUFBNkJ5QztNQUE3QixFQUZSO0lBQUEsRUFSSjtFQUFBLEVBREo7QUFlSDs7SUFsRHVCWDs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGljLXRhYy10b2UuanM/ZGI2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3F1YXJlKHsgbnVtLCB2YWx1ZSwgb25TcXVhcmVDbGljaywgd2lubmluZ1NxdWFyZXMgfSkge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29uc29sZS5sb2coJ3NxdWFyZSAjJyArIG51bSArICcgY2xpY2tlZDogdmFsdWU6JyArIHZhbHVlKSk7XHJcbiAgICAgICAgb25TcXVhcmVDbGljayhudW0gLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaXNXaW5uaW5nU3F1YXJlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc29sZS5sb2cod2lubmluZ1NxdWFyZXMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lubmluZ1NxdWFyZXMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgaWYgKHdpbm5pbmdTcXVhcmVzW2ldID09IG51bSAtIDEpIHtcclxuICAgICAgICAgICAgaXNXaW5uaW5nU3F1YXJlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9IHsgXCJzcXVhcmVcIiArIChpc1dpbm5pbmdTcXVhcmUgPT0gMSA/IFwiICB3aW5uaW5nLXNxdWFyZVwiIDogXCJcIikgfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzLCB3aW5uaW5nU3F1YXJlcywgc2V0V2lubmluZ1NxdWFyZXMpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW1xyXG4gICAgICBbMCwgMSwgMl0sXHJcbiAgICAgIFszLCA0LCA1XSxcclxuICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICBbMCwgMywgNl0sXHJcbiAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICBbMCwgNCwgOF0sXHJcbiAgICAgIFsyLCA0LCA2XVxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgLy9jaGVjayBpZiBhbnkgb2YgdGhlIGxpbmVzIG1hdGNoIHVwLiBpZiBzbywgcmV0dXJuIHRoZSB3aW5uZXJcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XHJcblxyXG4gICAgICBpZiAoc3F1YXJlc1thXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2JdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbY10pIHtcclxuICAgICAgICBcclxuICAgICAgICBpZih3aW5uaW5nU3F1YXJlc1swXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNldFdpbm5pbmdTcXVhcmVzKGxpbmVzW2ldLnNsaWNlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNxdWFyZXNbYV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0lmIHRoZXJlIGFyZSBubyBlbXB0eSBzcXVhcmVzLCBkZWNsYXJlIGEgZHJhd1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGRyYXcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoc3F1YXJlc1tpXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRyYXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkcmF3KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEcmF3IVwiKTtcclxuICAgICAgICByZXR1cm4gXCJEcmF3IVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUJvb2woKXtcclxuICAgIGNvbnN0IG1heCA9IDI7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG5cclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA+IDA7XHJcbn1cclxuXHJcbi8vUm93KCkgLSByZXR1cm5zIGEgUm93IGNvbXBvbmVudCBvZiB0aHJlZSBzcXVhcmVzLiBHaXZlcyBlYWNoIHNxdWFyZSBhIG51bWJlciBzdGFydGluZyBmcm9tIHtzdGFydH1cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7IHN0YXJ0LCBzcXVhcmVzLCBoYW5kbGVDbGljaywgd2lubmluZ1NxdWFyZXN9KSB7XHJcbiAgICB2YXIgcm93ID0gW107XHJcblxyXG4gICAgLy9nZW5lcmF0ZSB0aHJlZSBzcXVhcmVzIFxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIHZhciBudW0gPSBpICsgc3RhcnQ7XHJcbiAgICAgICAgcm93LnB1c2goPFNxdWFyZSBcclxuICAgICAgICAgICAgbnVtID0ge251bX0gXHJcbiAgICAgICAgICAgIHZhbHVlID0geyBzcXVhcmVzW251bSAtIDFdIH0gXHJcbiAgICAgICAgICAgIG9uU3F1YXJlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9IFxyXG4gICAgICAgICAgICB3aW5uaW5nU3F1YXJlcyA9IHsgd2lubmluZ1NxdWFyZXMgfVxyXG4gICAgICAgIC8+KTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+eyByb3cgfTwvZGl2PjtcclxufVxyXG5cclxuLy9Cb2FyZCgpIC0gcmV0dXJucyBhIEJvYXJkIGNvbXBvbmVuZW50IG9mIG5pbmUgc3F1YXJlcyBhY3Jvc3MgdGhyZWUgcm93c1xyXG5leHBvcnQgZnVuY3Rpb24gQm9hcmQoe3hJc05leHQsIHNxdWFyZXMsIG9uUGxheX0pIHtcclxuICAgIHZhciBib2FyZCA9IFtdO1xyXG4gICAgY29uc3QgW3dpbm5pbmdTcXVhcmVzLCBzZXRXaW5uaW5nU3F1YXJlc10gPSB1c2VTdGF0ZShBcnJheSgzKS5maWxsKG51bGwpKTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzLCB3aW5uaW5nU3F1YXJlcywgc2V0V2lubmluZ1NxdWFyZXMpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhpKSB7XHJcbiAgICAgICAgaWYgKHNxdWFyZXNbaV0gfHwgY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMsIHdpbm5pbmdTcXVhcmVzLCBzZXRXaW5uaW5nU3F1YXJlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zbGljZSBtYWtlcyBhIGNvcHkgb2YgYW4gYXJyYXlcclxuICAgICAgICBjb25zdCBuZXdTcXVhcmVzID0gc3F1YXJlcy5zbGljZSgpO1xyXG5cclxuICAgICAgICBuZXdTcXVhcmVzW2ldID0geElzTmV4dCA/IFwiT1wiIDogXCJYXCI7XHJcblxyXG4gICAgICAgIG9uUGxheShuZXdTcXVhcmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgIGlmKHdpbm5lciA9PSBcIkRyYXchXCIpIHtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKHdpbm5lcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKFwiV2lubmVyOiBcIisgKHhJc05leHQgPyBcIlhcIiA6IFwiT1wiKSArIFwiIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFN0YXR1cyhcIk5leHQgcGxheWVyOiBcIiArICh4SXNOZXh0ID8gXCJPXCIgOiBcIlhcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkLnB1c2goXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0YXR1cy10ZXh0XCI+eyBzdGF0dXMgfTwvaDI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgYm9hcmQucHVzaCg8Um93IFxyXG4gICAgICAgICAgICBzdGFydCA9IHsgaSAqIDMgICsgMSB9IFxyXG4gICAgICAgICAgICBzcXVhcmVzID0geyBzcXVhcmVzIH0gXHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrID0geyBoYW5kbGVDbGljayB9XHJcbiAgICAgICAgICAgIHdpbm5pbmdTcXVhcmVzID0geyB3aW5uaW5nU3F1YXJlcyB9XHJcbiAgICAgICAgLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBib2FyZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgLy90cnVlIGlmIFgncyB0dXJuIGlzIG5leHQsIGZhbHNlIGlmIE8gaXMgbmV4dC4gUmFuZG9taXplZCBhdCBpbml0XHJcbiAgICBjb25zdCBbeElzTmV4dCwgc2V0WElzTmV4dF0gPSB1c2VTdGF0ZShyYW5kb21Cb29sKCkpO1xyXG4gICAgY29uc3QgW2hpc3RvcnksIHNldEhpc3RvcnldID0gdXNlU3RhdGUoW0FycmF5KDkpLmZpbGwobnVsbCldKTtcclxuICAgIGNvbnN0IFtjdXJyZW50TW92ZSwgc2V0Q3VycmVudE1vdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjdXJyZW50U3F1YXJlcyA9IGhpc3RvcnlbY3VycmVudE1vdmVdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXkobmV3U3F1YXJlcykge1xyXG4gICAgICAgIGNvbnN0IG5ld0hpc3RvcnkgPSBbLi4uaGlzdG9yeS5zbGljZSgwLCBjdXJyZW50TW92ZSArIDEpLCBuZXdTcXVhcmVzXVxyXG4gICAgICAgIHNldEhpc3RvcnkobmV3SGlzdG9yeSk7XHJcbiAgICAgICAgc2V0Q3VycmVudE1vdmUobmV3SGlzdG9yeS5sZW5ndGggLTEpO1xyXG4gICAgICAgIHNldFhJc05leHQoIXhJc05leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGp1bXBUbyhtb3ZlTnVtKSB7XHJcbiAgICAgICAgc2V0SGlzdG9yeShoaXN0b3J5LnNsaWNlKDAsIG1vdmVOdW0gKyAxKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudE1vdmUobW92ZU51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3F1YXJlcywgbW92ZSkgPT4ge1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKG1vdmUgPiAwKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICA9IFwiR28gdG8gbW92ZSAjXCIgKyBtb3ZlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICA9IFwiUmVzdGFydFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4ganVtcFRvKG1vdmUpfT57IGRlc2NyaXB0aW9uIH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZCBcclxuICAgICAgICAgICAgICAgICAgICB4SXNOZXh0ID0geyB4SXNOZXh0IH1cclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzID0geyBjdXJyZW50U3F1YXJlcyB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25QbGF5ID0geyBoYW5kbGVQbGF5IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0geyBcImdhbWUtaW5mb1wiICsgKGhpc3RvcnkubGVuZ3RoID09IDEgPyBcIiBoaWRkZW5cIiA6IFwiXCIpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlJld2luZDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb3Zlcy1saXN0XCI+eyBtb3ZlcyB9PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3F1YXJlIiwibnVtIiwidmFsdWUiLCJvblNxdWFyZUNsaWNrIiwid2lubmluZ1NxdWFyZXMiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJpc1dpbm5pbmdTcXVhcmUiLCJpIiwibGVuZ3RoIiwiY2FsY3VsYXRlV2lubmVyIiwic3F1YXJlcyIsInNldFdpbm5pbmdTcXVhcmVzIiwibGluZXMiLCJhIiwiYiIsImMiLCJzbGljZSIsImRyYXciLCJyYW5kb21Cb29sIiwibWF4IiwibWluIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUm93Iiwic3RhcnQiLCJyb3ciLCJwdXNoIiwiQm9hcmQiLCJ4SXNOZXh0Iiwib25QbGF5IiwiYm9hcmQiLCJBcnJheSIsImZpbGwiLCJ3aW5uZXIiLCJuZXdTcXVhcmVzIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiR2FtZSIsInNldFhJc05leHQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImN1cnJlbnRNb3ZlIiwic2V0Q3VycmVudE1vdmUiLCJjdXJyZW50U3F1YXJlcyIsImhhbmRsZVBsYXkiLCJuZXdIaXN0b3J5IiwianVtcFRvIiwibW92ZU51bSIsIm1vdmVzIiwibWFwIiwibW92ZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tic-tac-toe.js\n"));

/***/ })

});