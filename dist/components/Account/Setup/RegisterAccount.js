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

var _metamaskLogo = require('metamask-logo');

var _metamaskLogo2 = _interopRequireDefault(_metamaskLogo);

var _reactBootstrap = require('react-bootstrap');

var _check = require('react-icons/lib/fa/check');

var _check2 = _interopRequireDefault(_check);

var _ProfileIcon = require('../ProfileIcon');

var _ProfileIcon2 = _interopRequireDefault(_ProfileIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterAccountComponent = function (_Component) {
  _inherits(RegisterAccountComponent, _Component);

  function RegisterAccountComponent() {
    _classCallCheck(this, RegisterAccountComponent);

    return _possibleConstructorReturn(this, (RegisterAccountComponent.__proto__ || Object.getPrototypeOf(RegisterAccountComponent)).call(this));
  }

  _createClass(RegisterAccountComponent, [{
    key: 'verify',
    value: function verify() {
      var _props = this.props,
          dispatch = _props.dispatch,
          account = _props.Actions.account,
          termsOfService = _props.AccountSetup.termsOfService,
          address = _props.Account.address;


      var username = 'Ryanmtate';
      dispatch(account.verifyAccount({ username: username, address: address, termsOfService: termsOfService }));
      dispatch({
        type: 'SET_ACCOUNT_SETUP_DETAILS',
        id: 'verificationStatus',
        value: 'verifying'
      });

      /* NOTE: Only for development */
      // setTimeout(() => {
      //   dispatch({
      //     type: 'SET_ACCOUNT_SETUP_DETAILS',
      //     id: 'verificationStatus',
      //     value: 'verified'
      //   })
      // }, 5000)
    }
  }, {
    key: 'verificationStatus',
    value: function verificationStatus() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          verificationStatus = _props2.AccountSetup.verificationStatus;


      switch (verificationStatus) {
        case 'verifying':
          return _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              'center',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Verifying Account...'
              )
            ),
            _react2.default.createElement('br', null)
          );
          break;
        case 'verified':
          return _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              'center',
              null,
              _react2.default.createElement(
                'h3',
                null,
                'Account Verified! ',
                _react2.default.createElement(_check2.default, { style: { fontSize: '72px', color: '#2AA198' } })
              )
            ),
            _react2.default.createElement('br', null)
          );
          break;
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$Account = this.props.Account,
          address = _props$Account.address,
          profile = _props$Account.profile;

      // const { username, _json: { avatar_url } } = profile

      var avatar_url = "https://avatars2.githubusercontent.com/u/2837196?v=4";
      var username = "Ryanmtate";

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
                'Register Account'
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _react2.default.createElement(
              'center',
              null,
              _react2.default.createElement('img', { width: '100%', src: avatar_url })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 8 },
            _react2.default.createElement(
              'strong',
              null,
              'Ethereum Address'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'small',
                null,
                address
              )
            ),
            _react2.default.createElement(
              'strong',
              null,
              'GitHub Username:'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'small',
                null,
                username
              )
            ),
            _react2.default.createElement(
              'strong',
              null,
              'Agree to GitToken Terms of Service:'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_check2.default, { style: { fontSize: '36px', color: '#2AA198' } })
            )
          )
        ),
        _react2.default.createElement('br', null),
        this.verificationStatus(),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                bsSize: 'lg',
                bsStyle: 'primary',
                onClick: this.verify.bind(this),
                block: true },
              'Register Account'
            )
          )
        )
      );
    }
  }]);

  return RegisterAccountComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Account: store.Account,
    Actions: store.Actions,
    AccountSetup: store.AccountSetup
  };
};

var RegisterAccount = (0, _reactRedux.connect)(mapStoreToProps)(RegisterAccountComponent);

exports.default = RegisterAccount;