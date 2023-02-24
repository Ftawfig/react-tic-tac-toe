const router = require('express').Router();
const React = require('react');
var  ReactDOMServer = require('react-dom/server');
var App = require('../src/index.js');

router.get('*', (req, res) => {
    let html = ReactDOMServer.renderToString(
        <StaticRouter location = {req.url}>
            <App/>
        </StaticRouter>
    );

    res.send("<!DOCTYPE html>" + html);
});