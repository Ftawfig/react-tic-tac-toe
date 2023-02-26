"use strict";
(() => {
var exports = {};
exports.id = 271;
exports.ids = [271,193];
exports.modules = {

/***/ 600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiplayerGame": () => (/* binding */ MultiplayerGame),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(888);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(612);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["default"].connect("http://localhost:3000");
function MultiplayerGame() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); //get gameId from URL parameter and join room

  const {
    gameId
  } = router.query;
  socket.emit('join', gameId);
  const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); //true if X's turn is next, false if O is next. Randomized at init

  const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [myTurn, setMyTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  var currentSquares = history[currentMove];
  console.log(`current move: ${currentMove}`);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    socket.on("receive_turn", data => {
      const newHistory = data.turn;
      console.log(`history length: ${history.length}`);
      console.log(history);
      console.log(`newHistory length: ${newHistory.length}`);
      console.log(history);

      if (newHistory.length > history.length) {
        console.log('history changed');
        setHistory(newHistory);
      }

      setCurrentMove(newHistory.length - 1);
      setXIsNext(!xIsNext);
    });
  }, [socket]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log("history change hook");
    socket.emit("send_turn", {
      turn: history
    });
  }, [history]);

  function handlePlay(newSquares) {
    const newHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
    setXIsNext(!xIsNext);
  } //jumps back in history to a certain move


  function jumpTo(moveNum) {
    setHistory(history.slice(0, moveNum + 1));
    setCurrentMove(moveNum);
  } //keeps a history of moves and returns them as list items


  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = "Move #" + move;
    } else {
      description = "Restart";
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
        onClick: () => jumpTo(move),
        children: description
      })
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
      children: `Room Code: ${gameId} `
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "game-board",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__.Board, {
        xIsNext: xIsNext,
        squares: currentSquares,
        onPlay: handlePlay
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "game-info" + (history.length == 1 ? " hidden" : ""),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
        children: "Rewind:"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
        className: "moves-list",
        children: moves
      })]
    })]
  });
}

MultiplayerGame.getInitialProps = async ({
  req
}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return {
    userAgent
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiplayerGame);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [224], () => (__webpack_exec__(600)));
module.exports = __webpack_exports__;

})();