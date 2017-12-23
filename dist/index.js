'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _store = require('./store');

var _index = require('gittoken-react-components/dist/components/index');

var _reactBootstrap = require('react-bootstrap');

var _index2 = require('./components/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store.store },
    _react2.default.createElement(
      _reactBootstrap.Grid,
      null,
      _react2.default.createElement(_index.Layout.Header, null),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _index2.Account.Main }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/setup", component: _index2.Account.Setup.Main })
      )
    )
  )
), document.getElementById('app'));