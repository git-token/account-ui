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

var _metamaskLogo = require('metamask-logo');

var _metamaskLogo2 = _interopRequireDefault(_metamaskLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaMaskComponent = function (_Component) {
  _inherits(MetaMaskComponent, _Component);

  function MetaMaskComponent() {
    _classCallCheck(this, MetaMaskComponent);

    return _possibleConstructorReturn(this, (MetaMaskComponent.__proto__ || Object.getPrototypeOf(MetaMaskComponent)).call(this));
  }

  _createClass(MetaMaskComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      // To render with fixed dimensions:
      this.viewer = (0, _metamaskLogo2.default)({

        // Dictates whether width & height are px or multiplied
        pxNotRatio: true,
        width: 500,
        height: 400,
        // pxNotRatio: false,
        // width: 0.9,
        // height: 0.9,

        // To make the face follow the mouse.
        followMouse: true,

        // head should slowly drift (overrides lookAt)
        slowDrift: false

      });

      // add viewer to DOM
      this.metaMaskLogo.appendChild(this.viewer.container);

      // look at something on the page
      this.viewer.lookAt({ x: 950, y: 750 });
    }
  }, {
    key: 'unlockMetaMask',
    value: function unlockMetaMask() {
      var _props = this.props,
          dispatch = _props.dispatch,
          account = _props.Actions.account;


      return _react2.default.createElement(
        'center',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Please Unlock MetaMask & Click \'Refresh MetaMask\''
        ),
        _react2.default.createElement(
          _reactBootstrap.Button,
          {
            bsSize: 'lg',
            bsStyle: 'primary',
            onClick: function onClick() {
              dispatch(account.metamask());
            },
            block: true
          },
          'Refresh MetaMask'
        )
      );
    }
  }, {
    key: 'installMetaMask',
    value: function installMetaMask() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          refreshMetaMask = _props2.Account.refreshMetaMask;


      return _react2.default.createElement(
        'div',
        null,
        !refreshMetaMask ? _react2.default.createElement(
          _reactBootstrap.Button,
          {
            bsStyle: 'primary',
            bsSize: 'lg',
            block: true,
            onClick: function onClick() {
              window.open("https://metamask.io");
              dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'refreshMetaMask', value: true });
            } },
          'Install MetaMask'
        ) : _react2.default.createElement(
          _reactBootstrap.Button,
          {
            bsStyle: 'primary',
            bsSize: 'lg',
            block: true,
            onClick: function onClick() {
              location.href = "/account/setup/metamask";
              dispatch({
                type: 'SET_ACCOUNT_DETAILS',
                id: 'refreshMetaMask',
                value: true
              });
            } },
          'Refresh After MetaMask Install'
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props3 = this.props,
          dispatch = _props3.dispatch,
          _props3$Account = _props3.Account,
          metaMaskInstalled = _props3$Account.metaMaskInstalled,
          metaMaskLocked = _props3$Account.metaMaskLocked,
          address = _props3$Account.address;


      if (metaMaskInstalled && !metaMaskLocked) {
        setTimeout(function () {
          dispatch({
            type: 'SET_ACCOUNT_SETUP_DETAILS',
            id: 'activeStep',
            value: 'verify'
          });

          location.href = "/account/setup/verify";
        }, 3000);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          dispatch = _props4.dispatch,
          _props4$Account = _props4.Account,
          metaMaskInstalled = _props4$Account.metaMaskInstalled,
          metaMaskLocked = _props4$Account.metaMaskLocked,
          address = _props4$Account.address;


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
              !metaMaskInstalled ? _react2.default.createElement(
                'h1',
                null,
                'Install MetaMask'
              ) : null,
              metaMaskLocked && metaMaskInstalled ? _react2.default.createElement(
                'h1',
                null,
                'Unlock MetaMask'
              ) : null,
              metaMaskInstalled && !metaMaskLocked ? _react2.default.createElement(
                'h1',
                null,
                'MetaMask Ready!'
              ) : null,
              _react2.default.createElement('br', null),
              _react2.default.createElement('div', { id: 'metamask-logo', key: "metamask-logo", ref: function ref(node) {
                  _this2.metaMaskLogo = node;
                } })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            !metaMaskInstalled ? _react2.default.createElement(
              'center',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'GitToken requires MetaMask to interact with Ethereum.'
              ),
              _react2.default.createElement('br', null),
              this.installMetaMask()
            ) : null,
            metaMaskLocked && metaMaskInstalled ? this.unlockMetaMask() : null
          )
        )
      );
    }
  }]);

  return MetaMaskComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Account: store.Account,
    Actions: store.Actions
  };
};

var MetaMask = (0, _reactRedux.connect)(mapStoreToProps)(MetaMaskComponent);

exports.default = MetaMask;