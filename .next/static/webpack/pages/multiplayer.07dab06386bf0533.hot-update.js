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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MultiplayerGame; }\n/* harmony export */ });\n/* harmony import */ var _tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tic-tac-toe */ \"./pages/tic-tac-toe.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(\"http://localhost:3000\");\n\nfunction randomString() {\n  return Math.random().toString(36).substring(2, 7);\n}\n\nfunction MultiplayerGame() {\n  _s();\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const {\n    gameId\n  } = router.query;\n  const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const roomCode = randomString(); //true if X's turn is next, false if O is next. Randomized at init\n\n  const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([Array(9).fill(null)]);\n  const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const [myTurn, setMyTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  var currentSquares = history[currentMove];\n  console.log(`current move: ${currentMove}`);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    socket.on(\"player_count_change\", data => {\n      setPlayers(data.players);\n    });\n    socket.on(\"receive_turn\", data => {\n      const newHistory = data.turn;\n\n      if (newHistory.length > history.length) {\n        setHistory(newHistory);\n      }\n\n      setCurrentMove(newHistory.length - 1);\n      setXIsNext(!xIsNext);\n    });\n  }, [socket]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    console.log(\"history change hook\");\n    socket.emit(\"send_turn\", {\n      turn: history\n    });\n  }, [history]);\n\n  function handlePlay(newSquares) {\n    const newHistory = [...history.slice(0, currentMove + 1), newSquares];\n    setHistory(newHistory);\n    setCurrentMove(newHistory.length - 1);\n    setXIsNext(!xIsNext);\n  } //jumps back in history to a certain move\n\n\n  function jumpTo(moveNum) {\n    setHistory(history.slice(0, moveNum + 1));\n    setCurrentMove(moveNum);\n  } //keeps a history of moves and returns them as list items\n\n\n  const moves = history.map((squares, move) => {\n    let description;\n\n    if (move > 0) {\n      description = \"Move #\" + move;\n    } else {\n      description = \"Restart\";\n    }\n\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"li\", {\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"button\", {\n        onClick: () => jumpTo(move),\n        children: description\n      })\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h2\", {\n      children: `Room Code: ${roomCode} `\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h2\", {\n      children: `Room Code: ${gameId} `\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      className: \"game-board\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__.Board, {\n        xIsNext: xIsNext,\n        squares: currentSquares,\n        onPlay: handlePlay\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n      className: \"game-info\" + (history.length == 1 ? \" hidden\" : \"\"),\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h2\", {\n        children: \"Rewind:\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"ul\", {\n        className: \"moves-list\",\n        children: moves\n      })]\n    })]\n  });\n}\n\n_s(MultiplayerGame, \"a4vTiSr6RtWbRpV5miu8cEJ4Q5c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = MultiplayerGame;\n\nvar _c;\n\n$RefreshReg$(_c, \"MultiplayerGame\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi90aWMtdGFjLXRvZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiKTtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgNyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11bHRpcGxheWVyR2FtZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBnYW1lSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHJvb21Db2RlID0gcmFuZG9tU3RyaW5nKCk7XHJcblxyXG4gICAgLy90cnVlIGlmIFgncyB0dXJuIGlzIG5leHQsIGZhbHNlIGlmIE8gaXMgbmV4dC4gUmFuZG9taXplZCBhdCBpbml0XHJcbiAgICBjb25zdCBbeElzTmV4dCwgc2V0WElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtBcnJheSg5KS5maWxsKG51bGwpXSk7XHJcbiAgICBjb25zdCBbY3VycmVudE1vdmUsIHNldEN1cnJlbnRNb3ZlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW215VHVybiwgc2V0TXlUdXJuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHZhciBjdXJyZW50U3F1YXJlcyA9IGhpc3RvcnlbY3VycmVudE1vdmVdO1xyXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgbW92ZTogJHtjdXJyZW50TW92ZX1gKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb2NrZXQub24oXCJwbGF5ZXJfY291bnRfY2hhbmdlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBsYXllcnMoZGF0YS5wbGF5ZXJzKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlX3R1cm5cIiwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IGRhdGEudHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChuZXdIaXN0b3J5Lmxlbmd0aCA+IGhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIaXN0b3J5KG5ld0hpc3RvcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50TW92ZShuZXdIaXN0b3J5Lmxlbmd0aCAtMSk7XHJcbiAgICAgICAgICAgIHNldFhJc05leHQoIXhJc05leHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3NvY2tldF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoaXN0b3J5IGNoYW5nZSBob29rXCIpO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwic2VuZF90dXJuXCIsIHsgdHVybiA6IGhpc3RvcnkgfSk7IFxyXG4gICAgfSwgW2hpc3RvcnldKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxheShuZXdTcXVhcmVzKSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IFsuLi5oaXN0b3J5LnNsaWNlKDAsIGN1cnJlbnRNb3ZlICsgMSksIG5ld1NxdWFyZXNdO1xyXG4gICAgICAgIHNldEhpc3RvcnkobmV3SGlzdG9yeSk7XHJcbiAgICAgICAgc2V0Q3VycmVudE1vdmUobmV3SGlzdG9yeS5sZW5ndGggLTEpO1xyXG4gICAgICAgIHNldFhJc05leHQoIXhJc05leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vanVtcHMgYmFjayBpbiBoaXN0b3J5IHRvIGEgY2VydGFpbiBtb3ZlXHJcbiAgICBmdW5jdGlvbiBqdW1wVG8obW92ZU51bSkge1xyXG4gICAgICAgIHNldEhpc3RvcnkoaGlzdG9yeS5zbGljZSgwLCBtb3ZlTnVtICsgMSkpO1xyXG4gICAgICAgIHNldEN1cnJlbnRNb3ZlKG1vdmVOdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8va2VlcHMgYSBoaXN0b3J5IG9mIG1vdmVzIGFuZCByZXR1cm5zIHRoZW0gYXMgbGlzdCBpdGVtc1xyXG4gICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3F1YXJlcywgbW92ZSkgPT4ge1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKG1vdmUgPiAwKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICA9IFwiTW92ZSAjXCIgKyBtb3ZlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uICA9IFwiUmVzdGFydFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4ganVtcFRvKG1vdmUpfT57IGRlc2NyaXB0aW9uIH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+e2BSb29tIENvZGU6ICR7IHJvb21Db2RlIH0gYH08L2gyPlxyXG4gICAgICAgICAgICA8aDI+e2BSb29tIENvZGU6ICR7IGdhbWVJZCB9IGB9PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgeElzTmV4dCA9IHsgeElzTmV4dCB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlcyA9IHsgY3VycmVudFNxdWFyZXMgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUGxheSA9IHsgaGFuZGxlUGxheSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHsgXCJnYW1lLWluZm9cIiArIChoaXN0b3J5Lmxlbmd0aCA9PSAxID8gXCIgaGlkZGVuXCIgOiBcIlwiKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5SZXdpbmQ6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW92ZXMtbGlzdFwiPnsgbW92ZXMgfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJCb2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJ1c2VSb3V0ZXIiLCJzb2NrZXQiLCJjb25uZWN0IiwicmFuZG9tU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiTXVsdGlwbGF5ZXJHYW1lIiwicm91dGVyIiwiZ2FtZUlkIiwicXVlcnkiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsInJvb21Db2RlIiwieElzTmV4dCIsInNldFhJc05leHQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRNb3ZlIiwic2V0Q3VycmVudE1vdmUiLCJteVR1cm4iLCJzZXRNeVR1cm4iLCJjdXJyZW50U3F1YXJlcyIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImRhdGEiLCJuZXdIaXN0b3J5IiwidHVybiIsImxlbmd0aCIsImVtaXQiLCJoYW5kbGVQbGF5IiwibmV3U3F1YXJlcyIsInNsaWNlIiwianVtcFRvIiwibW92ZU51bSIsIm1vdmVzIiwibWFwIiwic3F1YXJlcyIsIm1vdmUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/multiplayer.js\n"));

/***/ })

});