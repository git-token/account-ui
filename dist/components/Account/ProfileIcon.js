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

var ProfileIconComponent = function (_Component) {
  _inherits(ProfileIconComponent, _Component);

  function ProfileIconComponent() {
    _classCallCheck(this, ProfileIconComponent);

    return _possibleConstructorReturn(this, (ProfileIconComponent.__proto__ || Object.getPrototypeOf(ProfileIconComponent)).call(this));
  }

  _createClass(ProfileIconComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          style = _props.style,
          opacity = _props.opacity,
          url = _props.url,
          onClick = _props.onClick,
          viewBox = _props.viewBox;


      opacity = opacity ? opacity : '0';
      width = width ? width : '50%';
      height = height ? height : '50%';
      style = style ? style : null;
      viewBox = viewBox ? viewBox : '0 0 1000 1000';

      // return (
      //   <div>
      //     <Image circle />
      //   </div>
      // )

      return _react2.default.createElement(
        'div',
        { style: { float: 'right' }, onClick: onClick },
        _react2.default.createElement(
          'svg',
          { width: width, height: height, viewBox: viewBox, style: style },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'pattern',
              { id: 'img1', patternUnits: 'userSpaceOnUse', width: '60%', height: '60%' },
              _react2.default.createElement('image', { xlinkHref: url, x: '5%', y: '5%', width: '60%', height: '60%' })
            )
          ),
          _react2.default.createElement('path', { d: 'M 550 250 L 550 350 L 350 450 L 150 350 L 150 150 L 350 50 L 550 150 L 550 250 ',
            fill: 'url(#img1)',
            strokeLinejoin: "round",
            stroke: '#cc5333',
            strokeWidth: '38'
          }),
          _react2.default.createElement('circle', { cx: '550', cy: '150', r: '38', fill: '#cc5333' }),
          _react2.default.createElement('circle', { cx: '550', cy: '150', r: '20', fill: '#fff' })
        )
      );
    }
  }]);

  return ProfileIconComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Actions: store.Actions
  };
};

var ProfileIcon = (0, _reactRedux.connect)(mapStoreToProps)(ProfileIconComponent);

exports.default = ProfileIcon;