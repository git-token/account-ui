'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WelcomeComponent = function (_Component) {
  _inherits(WelcomeComponent, _Component);

  function WelcomeComponent() {
    _classCallCheck(this, WelcomeComponent);

    return _possibleConstructorReturn(this, (WelcomeComponent.__proto__ || Object.getPrototypeOf(WelcomeComponent)).call(this));
  }

  _createClass(WelcomeComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          account = _props.Actions.account,
          _props$Account = _props.Account,
          steps = _props$Account.steps,
          username = _props$Account.profile.username;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              'center',
              null,
              _react2.default.createElement(
                'h1',
                null,
                'Welcome, ',
                username,
                '!'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Thank You for using GitToken!'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                null,
                'The following guide will help you get started.'
              ),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                bsSize: 'lg',
                bsStyle: 'primary',
                block: true,
                onClick: function onClick() {
                  dispatch({ type: 'SET_ACCOUNT_SETUP_DETAILS', id: 'activeStep', value: 'terms' });
                  location.href = '/account/setup/terms';
                } },
              'Get Started!'
            )
          )
        )
      );
    }
  }]);

  return WelcomeComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Actions: store.Actions,
    Account: store.Account
  };
};

var Welcome = (0, _reactRedux.connect)(mapStoreToProps)(WelcomeComponent);

exports.default = Welcome;