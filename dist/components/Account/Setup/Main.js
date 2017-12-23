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

var _reactRouterDom = require('react-router-dom');

var _reactBootstrap = require('react-bootstrap');

var _Welcome = require('./Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _RegisterAccount = require('./RegisterAccount');

var _RegisterAccount2 = _interopRequireDefault(_RegisterAccount);

var _MetaMask = require('./MetaMask');

var _MetaMask2 = _interopRequireDefault(_MetaMask);

var _TermsOfService = require('gittoken-react-components/dist/components/Legal/TermsOfService');

var _TermsOfService2 = _interopRequireDefault(_TermsOfService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainComponent = function (_Component) {
  _inherits(MainComponent, _Component);

  function MainComponent() {
    _classCallCheck(this, MainComponent);

    return _possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).call(this));
  }

  _createClass(MainComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          account = _props.Actions.account;

      dispatch(account.metamask());

      var path = location.pathname.replace('/account/setup/', '').replace('/account/setup', '').replace('/setup/', '').replace('/setup', '');

      var activeStep = path.length ? path : 'welcome';

      dispatch({
        type: 'SET_ACCOUNT_SETUP_DETAILS',
        id: 'activeStep',
        value: activeStep
      });
    }
  }, {
    key: 'nodes',
    value: function nodes() {
      var _props$AccountSetup = this.props.AccountSetup,
          steps = _props$AccountSetup.steps,
          activeStep = _props$AccountSetup.activeStep;


      var x = 500;
      var y = 500;
      var distance = 320;
      var lineLength = 270;

      return Object.keys(steps).map(function (step, i) {
        var title = steps[step].title;


        var active = step == activeStep ? true : false;
        var d = 'M ' + x + ' ' + (25 + y + distance * i) + ' L ' + x + ' ' + (25 + y + distance * i + lineLength);

        return _react2.default.createElement(
          'svg',
          { key: i },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'radialGradient',
              { id: 'g2', fx: '50%', fy: '50%', cx: '50%', cy: '50%', r: '50%' },
              _react2.default.createElement('stop', { stopColor: 'white', offset: '10%' }),
              _react2.default.createElement('stop', { stopColor: '#CB4B16', offset: '40%' }),
              _react2.default.createElement('stop', { stopColor: '#320551', offset: '100%' })
            )
          ),
          active ? _react2.default.createElement('circle', { cx: x, cy: y + distance * (i + 1), r: '65', style: { fill: 'url(#g2)' } }) : null,
          _react2.default.createElement('path', { d: d,
            fill: 'transparent',
            strokeLinejoin: "round",
            stroke: '#fff',
            strokeWidth: '36'
          }),
          _react2.default.createElement('circle', {
            cx: x,
            cy: y + distance * (i + 1),
            r: '30',
            fill: 'transparent',
            stroke: '#fff',
            strokeWidth: '16'
          }),
          _react2.default.createElement(
            'text',
            {
              x: '600',
              y: y + 320 * (i + 1),
              fill: active ? '#fff' : "#320551",
              fontSize: '65px',
              onClick: function onClick() {
                location.href = '/account/setup/' + step;
              } },
            title
          )
        );
      });
    }
  }, {
    key: 'setupNode',
    value: function setupNode() {

      return _react2.default.createElement(
        'svg',
        { height: '100%', width: "100%", viewBox: '0 0 1200 3000' },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'radialGradient',
            { id: 'g1', fx: '50%', fy: '50%', cx: '50%', cy: '50%', r: '50%' },
            _react2.default.createElement('stop', { stopColor: '#210138', offset: '10%' }),
            _react2.default.createElement('stop', { stopColor: '#320551', offset: '100%' })
          )
        ),
        _react2.default.createElement('circle', { cx: '500', cy: '500', r: '2200', style: { fill: 'url(#g1)' } }),
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'radialGradient',
            { id: 'g2', fx: '50%', fy: '50%', cx: '50%', cy: '50%', r: '50%' },
            _react2.default.createElement('stop', { stopColor: 'white', offset: '10%' }),
            _react2.default.createElement('stop', { stopColor: '#CB4B16', offset: '40%' }),
            _react2.default.createElement('stop', { stopColor: '#320551', offset: '100%' })
          )
        ),
        _react2.default.createElement('circle', { cx: '500', cy: '500', r: '65', style: { fill: 'url(#g2)' } }),
        this.nodes(),
        _react2.default.createElement('path', { d: 'M 530 500 L 730 500 L 730 600 L 500 700 L 300 600 L 300 400 L 500 300 L 710 390 ',
          fill: 'transparent',
          strokeLinejoin: "round",
          stroke: '#CB4B16',
          strokeWidth: '36'
        }),
        _react2.default.createElement('circle', {
          cx: '500',
          cy: '500',
          r: '30',
          fill: 'transparent',
          stroke: '#CB4B16',
          strokeWidth: '16'
        }),
        _react2.default.createElement('circle', {
          cx: '730',
          cy: '400',
          r: '30',
          fill: 'transparent',
          stroke: '#CB4B16',
          strokeWidth: '16'
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          _props2$AccountSetup = _props2.AccountSetup,
          steps = _props2$AccountSetup.steps,
          activeStep = _props2$AccountSetup.activeStep;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { lg: 12 },
            _react2.default.createElement(
              _reactBootstrap.Jumbotron,
              { style: { height: '800px' } },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 4 },
                _react2.default.createElement(
                  _reactBootstrap.Panel,
                  { style: { textAlign: 'left' } },
                  this.setupNode()
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { lg: 8 },
                _react2.default.createElement(
                  _reactBootstrap.Panel,
                  null,
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/setup', component: _Welcome2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/setup/welcome', component: _Welcome2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/setup/terms', render: function render() {
                        return _react2.default.createElement(_TermsOfService2.default, {
                          agree: function agree() {
                            dispatch({ type: 'SET_ACCOUNT_SETUP_DETAILS', id: 'activeStep', value: 'metamask' });
                            location.href = '/account/setup/metamask';
                          },
                          organizationLink: 'https://github.com/git-token',
                          tokenDetails: {
                            name: 'GitToken',
                            symbol: 'GTK',
                            address: '0x0'
                          }
                        });
                      } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/setup/metamask', component: _MetaMask2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/setup/register', component: _RegisterAccount2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/setup/organization', component: _RegisterAccount2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/setup/finish', component: _RegisterAccount2.default })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MainComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Actions: store.Actions,
    Account: store.Account,
    AccountSetup: store.AccountSetup
  };
};

var Main = (0, _reactRedux.connect)(mapStoreToProps)(MainComponent);

exports.default = Main;