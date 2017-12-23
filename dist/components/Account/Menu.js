'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuComponent = function (_Component) {
  _inherits(MenuComponent, _Component);

  function MenuComponent() {
    _classCallCheck(this, MenuComponent);

    return _possibleConstructorReturn(this, (MenuComponent.__proto__ || Object.getPrototypeOf(MenuComponent)).call(this));
  }

  _createClass(MenuComponent, [{
    key: 'select',
    value: function select(item) {
      var _props = this.props,
          dispatch = _props.dispatch,
          menu = _props.Account.menu;

      location.href = '/' + item;
    }
  }, {
    key: 'menuItems',
    value: function menuItems(_ref) {
      var menu = _ref.menu;

      return menu.map(function (item, i) {
        var key = item.key,
            title = item.title,
            link = item.link;

        return _react2.default.createElement(
          _reactBootstrap.NavItem,
          {
            eventKey: key,
            href: link,
            key: key },
          title
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var menu = this.props.Account.menu;


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
              _reactBootstrap.Nav,
              {
                style: { marginTop: '-75px' },
                bsStyle: 'pills',
                activeKey: location.pathname.replace("/", ""),
                onSelect: this.select.bind(this) },
              this.menuItems({ menu: menu })
            )
          )
        )
      );
    }
  }]);

  return MenuComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Actions: store.Actions,
    Account: store.Account
  };
};

var Menu = (0, _reactRedux.connect)(mapStoreToProps)(MenuComponent);

exports.default = Menu;