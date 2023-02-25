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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MultiplayerGame; }\n/* harmony export */ });\n/* harmony import */ var _tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tic-tac-toe */ \"./pages/tic-tac-toe.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(\"http://localhost:3000\");\n\nfunction randomString() {\n  return Math.random().toString(36).substring(2, 7);\n}\n\nfunction MultiplayerGame(gameId) {\n  _s();\n\n  const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const roomCode = gameId ? gameId : randomString(); //true if X's turn is next, false if O is next. Randomized at init\n\n  const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([Array(9).fill(null)]);\n  const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const [myTurn, setMyTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  var currentSquares = history[currentMove];\n  console.log(`current move: ${currentMove}`);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    socket.on(\"player_count_change\", data => {\n      setPlayers(data.players);\n    });\n    socket.on(\"receive_turn\", data => {\n      const newHistory = data.turn;\n\n      if (newHistory.length > history.length) {\n        setHistory(newHistory);\n      }\n\n      setCurrentMove(newHistory.length - 1);\n      setXIsNext(!xIsNext);\n    });\n  }, [socket]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    console.log(\"history change hook\");\n    socket.emit(\"send_turn\", {\n      turn: history\n    });\n  }, [history]);\n\n  function handlePlay(newSquares) {\n    const newHistory = [...history.slice(0, currentMove + 1), newSquares];\n    setHistory(newHistory);\n    setCurrentMove(newHistory.length - 1);\n    setXIsNext(!xIsNext);\n  } //jumps back in history to a certain move\n\n\n  function jumpTo(moveNum) {\n    setHistory(history.slice(0, moveNum + 1));\n    setCurrentMove(moveNum);\n  } //keeps a history of moves and returns them as list items\n\n\n  const moves = history.map((squares, move) => {\n    let description;\n\n    if (move > 0) {\n      description = \"Move #\" + move;\n    } else {\n      description = \"Restart\";\n    }\n\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"button\", {\n        onClick: () => jumpTo(move),\n        children: description\n      })\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"h2\", {\n      children: `Room Code: ${roomCode} `\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      className: \"game-board\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__.Board, {\n        xIsNext: xIsNext,\n        squares: currentSquares,\n        onPlay: handlePlay\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n      className: \"game-info\" + (history.length == 1 ? \" hidden\" : \"\"),\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"h2\", {\n        children: \"Rewind:\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"ul\", {\n        className: \"moves-list\",\n        children: moves\n      })]\n    })]\n  });\n}\n\n_s(MultiplayerGame, \"drjNel+rpecB9hW8VqpmhAbk2cw=\");\n\n_c = MultiplayerGame;\n\nvar _c;\n\n$RefreshReg$(_c, \"MultiplayerGame\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFELENBQVY7SUFDQWhCLGNBQWMsQ0FBQ2dCLE9BQUQsQ0FBZDtFQUNILENBaEQyQyxDQWtENUM7OztFQUNBLE1BQU1DLEtBQUssR0FBR3RCLE9BQU8sQ0FBQ3VCLEdBQVIsQ0FBWSxDQUFDQyxPQUFELEVBQVVDLElBQVYsS0FBbUI7SUFDekMsSUFBSUMsV0FBSjs7SUFFQSxJQUFJRCxJQUFJLEdBQUcsQ0FBWCxFQUFjO01BQ1ZDLFdBQVcsR0FBSSxXQUFXRCxJQUExQjtJQUNILENBRkQsTUFFTztNQUNIQyxXQUFXLEdBQUksU0FBZjtJQUNIOztJQUVELG9CQUNJO01BQUEsdUJBQ0k7UUFBUSxPQUFPLEVBQUcsTUFBTU4sTUFBTSxDQUFDSyxJQUFELENBQTlCO1FBQUEsVUFBd0NDO01BQXhDO0lBREosRUFESjtFQUtILENBZGEsQ0FBZDtFQWdCQSxvQkFDSTtJQUFBLHdCQUNJO01BQUEsVUFBTSxjQUFjN0IsUUFBVTtJQUE5QixFQURKLGVBRUk7TUFBSyxTQUFTLEVBQUMsWUFBZjtNQUFBLHVCQUNJLHVEQUFDLCtDQUFEO1FBQ0ksT0FBTyxFQUFLQyxPQURoQjtRQUVJLE9BQU8sRUFBS1UsY0FGaEI7UUFHSSxNQUFNLEVBQUtTO01BSGY7SUFESixFQUZKLGVBU0k7TUFBSyxTQUFTLEVBQUksZUFBZWpCLE9BQU8sQ0FBQ2UsTUFBUixJQUFrQixDQUFsQixHQUFzQixTQUF0QixHQUFrQyxFQUFqRCxDQUFsQjtNQUFBLHdCQUNRO1FBQUEsVUFBSTtNQUFKLEVBRFIsZUFFUTtRQUFJLFNBQVMsRUFBQyxZQUFkO1FBQUEsVUFBNkJPO01BQTdCLEVBRlI7SUFBQSxFQVRKO0VBQUEsRUFESjtBQWdCSDs7R0FuRnVCN0I7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL211bHRpcGxheWVyLmpzP2VkNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi90aWMtdGFjLXRvZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXHJcblxyXG5jb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIpO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA3KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVsdGlwbGF5ZXJHYW1lKGdhbWVJZCkge1xyXG4gICAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCByb29tQ29kZSA9IGdhbWVJZCA/IGdhbWVJZCA6ICByYW5kb21TdHJpbmcoKTtcclxuXHJcbiAgICAvL3RydWUgaWYgWCdzIHR1cm4gaXMgbmV4dCwgZmFsc2UgaWYgTyBpcyBuZXh0LiBSYW5kb21pemVkIGF0IGluaXRcclxuICAgIGNvbnN0IFt4SXNOZXh0LCBzZXRYSXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2hpc3RvcnksIHNldEhpc3RvcnldID0gdXNlU3RhdGUoW0FycmF5KDkpLmZpbGwobnVsbCldKTtcclxuICAgIGNvbnN0IFtjdXJyZW50TW92ZSwgc2V0Q3VycmVudE1vdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbXlUdXJuLCBzZXRNeVR1cm5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRTcXVhcmVzID0gaGlzdG9yeVtjdXJyZW50TW92ZV07XHJcbiAgICBjb25zb2xlLmxvZyhgY3VycmVudCBtb3ZlOiAke2N1cnJlbnRNb3ZlfWApO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5vbihcInBsYXllcl9jb3VudF9jaGFuZ2VcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UGxheWVycyhkYXRhLnBsYXllcnMpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVfdHVyblwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gZGF0YS50dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG5ld0hpc3RvcnkubGVuZ3RoID4gaGlzdG9yeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNldEhpc3RvcnkobmV3SGlzdG9yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRNb3ZlKG5ld0hpc3RvcnkubGVuZ3RoIC0xKTtcclxuICAgICAgICAgICAgc2V0WElzTmV4dCgheElzTmV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbc29ja2V0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhpc3RvcnkgY2hhbmdlIGhvb2tcIik7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kX3R1cm5cIiwgeyB0dXJuIDogaGlzdG9yeSB9KTsgXHJcbiAgICB9LCBbaGlzdG9yeV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQbGF5KG5ld1NxdWFyZXMpIHtcclxuICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gWy4uLmhpc3Rvcnkuc2xpY2UoMCwgY3VycmVudE1vdmUgKyAxKSwgbmV3U3F1YXJlc107XHJcbiAgICAgICAgc2V0SGlzdG9yeShuZXdIaXN0b3J5KTtcclxuICAgICAgICBzZXRDdXJyZW50TW92ZShuZXdIaXN0b3J5Lmxlbmd0aCAtMSk7XHJcbiAgICAgICAgc2V0WElzTmV4dCgheElzTmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9qdW1wcyBiYWNrIGluIGhpc3RvcnkgdG8gYSBjZXJ0YWluIG1vdmVcclxuICAgIGZ1bmN0aW9uIGp1bXBUbyhtb3ZlTnVtKSB7XHJcbiAgICAgICAgc2V0SGlzdG9yeShoaXN0b3J5LnNsaWNlKDAsIG1vdmVOdW0gKyAxKSk7XHJcbiAgICAgICAgc2V0Q3VycmVudE1vdmUobW92ZU51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9rZWVwcyBhIGhpc3Rvcnkgb2YgbW92ZXMgYW5kIHJldHVybnMgdGhlbSBhcyBsaXN0IGl0ZW1zXHJcbiAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubWFwKChzcXVhcmVzLCBtb3ZlKSA9PiB7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBpZiAobW92ZSA+IDApIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gID0gXCJNb3ZlICNcIiArIG1vdmU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gID0gXCJSZXN0YXJ0XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiBqdW1wVG8obW92ZSl9PnsgZGVzY3JpcHRpb24gfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMj57YFJvb20gQ29kZTogJHsgcm9vbUNvZGUgfSBgfTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgIHhJc05leHQgPSB7IHhJc05leHQgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZXMgPSB7IGN1cnJlbnRTcXVhcmVzIH1cclxuICAgICAgICAgICAgICAgICAgICBvblBsYXkgPSB7IGhhbmRsZVBsYXkgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7IFwiZ2FtZS1pbmZvXCIgKyAoaGlzdG9yeS5sZW5ndGggPT0gMSA/IFwiIGhpZGRlblwiIDogXCJcIikgfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UmV3aW5kOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vdmVzLWxpc3RcIj57IG1vdmVzIH08L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQm9hcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwic29ja2V0IiwiY29ubmVjdCIsInJhbmRvbVN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIk11bHRpcGxheWVyR2FtZSIsImdhbWVJZCIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwicm9vbUNvZGUiLCJ4SXNOZXh0Iiwic2V0WElzTmV4dCIsImhpc3RvcnkiLCJzZXRIaXN0b3J5IiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudE1vdmUiLCJzZXRDdXJyZW50TW92ZSIsIm15VHVybiIsInNldE15VHVybiIsImN1cnJlbnRTcXVhcmVzIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZGF0YSIsIm5ld0hpc3RvcnkiLCJ0dXJuIiwibGVuZ3RoIiwiZW1pdCIsImhhbmRsZVBsYXkiLCJuZXdTcXVhcmVzIiwic2xpY2UiLCJqdW1wVG8iLCJtb3ZlTnVtIiwibW92ZXMiLCJtYXAiLCJzcXVhcmVzIiwibW92ZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/multiplayer.js\n"));

/***/ })

});