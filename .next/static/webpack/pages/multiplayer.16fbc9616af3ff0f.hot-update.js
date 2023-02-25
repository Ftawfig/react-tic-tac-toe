"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/multiplayer",{

/***/ "./pages/multiplayer.js":
/*!******************************!*\
  !*** ./pages/multiplayer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RoomCode\": function() { return /* binding */ RoomCode; },\n/* harmony export */   \"default\": function() { return /* binding */ MultiplayerGame; }\n/* harmony export */ });\n/* harmony import */ var _tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tic-tac-toe */ \"./pages/tic-tac-toe.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(\"http://localhost:3000\");\n\nfunction randomString() {\n  Math.random().toString(36).substring(2, 7);\n}\n\nfunction RoomCode(gameId) {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"h2\", {\n    children: [\"RoomCode \", gameId, \" \"]\n  });\n}\n_c = RoomCode;\nfunction MultiplayerGame(gameId) {\n  _s();\n\n  const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const roomCode = gameId ? gameId : randomString(); //true if X's turn is next, false if O is next. Randomized at init\n\n  const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([Array(9).fill(null)]);\n  const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const [myTurn, setMyTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  var currentSquares = history[currentMove];\n  console.log(`current move: ${currentMove}`);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    socket.on(\"player_count_change\", data => {\n      setPlayers(data.players);\n    });\n    socket.on(\"receive_turn\", data => {\n      const newHistory = data.turn;\n\n      if (newHistory.length > history.length) {\n        setHistory(newHistory);\n      }\n\n      setCurrentMove(newHistory.length - 1);\n      setXIsNext(!xIsNext);\n    });\n  }, [socket]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    console.log(\"history change hook\");\n    socket.emit(\"send_turn\", {\n      turn: history\n    });\n  }, [history]);\n\n  function handlePlay(newSquares) {\n    const newHistory = [...history.slice(0, currentMove + 1), newSquares];\n    setHistory(newHistory);\n    setCurrentMove(newHistory.length - 1);\n    setXIsNext(!xIsNext);\n  } //jumps back in history to a certain move\n\n\n  function jumpTo(moveNum) {\n    setHistory(history.slice(0, moveNum + 1));\n    setCurrentMove(moveNum);\n  } //keeps a history of moves and returns them as list items\n\n\n  const moves = history.map((squares, move) => {\n    let description;\n\n    if (move > 0) {\n      description = \"Move #\" + move;\n    } else {\n      description = \"Restart\";\n    }\n\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"button\", {\n        onClick: () => jumpTo(move),\n        children: description\n      })\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"h2\", {\n      children: \"Room Code: \"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      className: \"game-board\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__.Board, {\n        xIsNext: xIsNext,\n        squares: currentSquares,\n        onPlay: handlePlay\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n      className: \"game-info\" + (history.length == 1 ? \" hidden\" : \"\"),\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"h2\", {\n        children: \"Rewind:\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"ul\", {\n        className: \"moves-list\",\n        children: moves\n      })]\n    })]\n  });\n}\n\n_s(MultiplayerGame, \"drjNel+rpecB9hW8VqpmhAbk2cw=\");\n\n_c2 = MultiplayerGame;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RoomCode\");\n$RefreshReg$(_c2, \"MultiplayerGame\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U3NCLE1BQVQsQ0FBZ0JDLE9BQWhCLEVBQXlCO0lBQ3JCcEIsVUFBVSxDQUFDRCxPQUFPLENBQUNtQixLQUFSLENBQWMsQ0FBZCxFQUFpQkUsT0FBTyxHQUFHLENBQTNCLENBQUQsQ0FBVjtJQUNBaEIsY0FBYyxDQUFDZ0IsT0FBRCxDQUFkO0VBQ0gsQ0FoRDJDLENBa0Q1Qzs7O0VBQ0EsTUFBTUMsS0FBSyxHQUFHdEIsT0FBTyxDQUFDdUIsR0FBUixDQUFZLENBQUNDLE9BQUQsRUFBVUMsSUFBVixLQUFtQjtJQUN6QyxJQUFJQyxXQUFKOztJQUVBLElBQUlELElBQUksR0FBRyxDQUFYLEVBQWM7TUFDVkMsV0FBVyxHQUFJLFdBQVdELElBQTFCO0lBQ0gsQ0FGRCxNQUVPO01BQ0hDLFdBQVcsR0FBSSxTQUFmO0lBQ0g7O0lBRUQsb0JBQ0k7TUFBQSx1QkFDSTtRQUFRLE9BQU8sRUFBRyxNQUFNTixNQUFNLENBQUNLLElBQUQsQ0FBOUI7UUFBQSxVQUF3Q0M7TUFBeEM7SUFESixFQURKO0VBS0gsQ0FkYSxDQUFkO0VBZ0JBLG9CQUNJO0lBQUEsd0JBQ0k7TUFBQSxVQUFJO0lBQUosRUFESixlQUVJO01BQUssU0FBUyxFQUFDLFlBQWY7TUFBQSx1QkFDSSx1REFBQywrQ0FBRDtRQUNJLE9BQU8sRUFBSzVCLE9BRGhCO1FBRUksT0FBTyxFQUFLVSxjQUZoQjtRQUdJLE1BQU0sRUFBS1M7TUFIZjtJQURKLEVBRkosZUFTSTtNQUFLLFNBQVMsRUFBSSxlQUFlakIsT0FBTyxDQUFDZSxNQUFSLElBQWtCLENBQWxCLEdBQXNCLFNBQXRCLEdBQWtDLEVBQWpELENBQWxCO01BQUEsd0JBQ1E7UUFBQSxVQUFJO01BQUosRUFEUixlQUVRO1FBQUksU0FBUyxFQUFDLFlBQWQ7UUFBQSxVQUE2Qk87TUFBN0IsRUFGUjtJQUFBLEVBVEo7RUFBQSxFQURKO0FBZ0JIOztHQW5GdUI1Qjs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVsdGlwbGF5ZXIuanM/ZWQ3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL3RpYy10YWMtdG9lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcclxuXHJcbmNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIik7XHJcblxyXG5mdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XHJcbiAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgNyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSb29tQ29kZSAoZ2FtZUlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMj5Sb29tQ29kZSB7Z2FtZUlkfSA8L2gyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNdWx0aXBsYXllckdhbWUoZ2FtZUlkKSB7XHJcbiAgICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHJvb21Db2RlID0gZ2FtZUlkID8gZ2FtZUlkIDogcmFuZG9tU3RyaW5nKCk7XHJcblxyXG4gICAgLy90cnVlIGlmIFgncyB0dXJuIGlzIG5leHQsIGZhbHNlIGlmIE8gaXMgbmV4dC4gUmFuZG9taXplZCBhdCBpbml0XHJcbiAgICBjb25zdCBbeElzTmV4dCwgc2V0WElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtBcnJheSg5KS5maWxsKG51bGwpXSk7XHJcbiAgICBjb25zdCBbY3VycmVudE1vdmUsIHNldEN1cnJlbnRNb3ZlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW215VHVybiwgc2V0TXlUdXJuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHZhciBjdXJyZW50U3F1YXJlcyA9IGhpc3RvcnlbY3VycmVudE1vdmVdO1xyXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgbW92ZTogJHtjdXJyZW50TW92ZX1gKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb2NrZXQub24oXCJwbGF5ZXJfY291bnRfY2hhbmdlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBsYXllcnMoZGF0YS5wbGF5ZXJzKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlX3R1cm5cIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IGRhdGEudHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChuZXdIaXN0b3J5Lmxlbmd0aCA+IGhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIaXN0b3J5KG5ld0hpc3RvcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50TW92ZShuZXdIaXN0b3J5Lmxlbmd0aCAtMSk7XHJcbiAgICAgICAgICAgIHNldFhJc05leHQoIXhJc05leHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3NvY2tldF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoaXN0b3J5IGNoYW5nZSBob29rXCIpO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwic2VuZF90dXJuXCIsIHsgdHVybiA6IGhpc3RvcnkgfSk7IFxyXG4gICAgfSwgW2hpc3RvcnldKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxheShuZXdTcXVhcmVzKSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IFsuLi5oaXN0b3J5LnNsaWNlKDAsIGN1cnJlbnRNb3ZlICsgMSksIG5ld1NxdWFyZXNdO1xyXG4gICAgICAgIHNldEhpc3RvcnkobmV3SGlzdG9yeSk7XHJcbiAgICAgICAgc2V0Q3VycmVudE1vdmUobmV3SGlzdG9yeS5sZW5ndGggLTEpO1xyXG4gICAgICAgIHNldFhJc05leHQoIXhJc05leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vanVtcHMgYmFjayBpbiBoaXN0b3J5IHRvIGEgY2VydGFpbiBtb3ZlXHJcbiAgICBmdW5jdGlvbiBqdW1wVG8obW92ZU51bSkge1xyXG4gICAgICAgIHNldEhpc3RvcnkoaGlzdG9yeS5zbGljZSgwLCBtb3ZlTnVtICsgMSkpO1xyXG4gICAgICAgIHNldEN1cnJlbnRNb3ZlKG1vdmVOdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8va2VlcHMgYSBoaXN0b3J5IG9mIG1vdmVzIGFuZCByZXR1cm5zIHRoZW0gYXMgbGlzdCBpdGVtc1xyXG4gICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3F1YXJlcywgbW92ZSkgPT4ge1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKG1vdmUgPiAwKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICA9IFwiTW92ZSAjXCIgKyBtb3ZlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICA9IFwiUmVzdGFydFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4ganVtcFRvKG1vdmUpfT57IGRlc2NyaXB0aW9uIH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+Um9vbSBDb2RlOiA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZCBcclxuICAgICAgICAgICAgICAgICAgICB4SXNOZXh0ID0geyB4SXNOZXh0IH1cclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzID0geyBjdXJyZW50U3F1YXJlcyB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25QbGF5ID0geyBoYW5kbGVQbGF5IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0geyBcImdhbWUtaW5mb1wiICsgKGhpc3RvcnkubGVuZ3RoID09IDEgPyBcIiBoaWRkZW5cIiA6IFwiXCIpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlJld2luZDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb3Zlcy1saXN0XCI+eyBtb3ZlcyB9PC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkJvYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsInNvY2tldCIsImNvbm5lY3QiLCJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJSb29tQ29kZSIsImdhbWVJZCIsIk11bHRpcGxheWVyR2FtZSIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwicm9vbUNvZGUiLCJ4SXNOZXh0Iiwic2V0WElzTmV4dCIsImhpc3RvcnkiLCJzZXRIaXN0b3J5IiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudE1vdmUiLCJzZXRDdXJyZW50TW92ZSIsIm15VHVybiIsInNldE15VHVybiIsImN1cnJlbnRTcXVhcmVzIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZGF0YSIsIm5ld0hpc3RvcnkiLCJ0dXJuIiwibGVuZ3RoIiwiZW1pdCIsImhhbmRsZVBsYXkiLCJuZXdTcXVhcmVzIiwic2xpY2UiLCJqdW1wVG8iLCJtb3ZlTnVtIiwibW92ZXMiLCJtYXAiLCJzcXVhcmVzIiwibW92ZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/multiplayer.js\n"));

/***/ })

});