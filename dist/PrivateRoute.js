'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _renderMergedProps = require('./renderMergedProps');

var _renderMergedProps2 = _interopRequireDefault(_renderMergedProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
    var component = _ref.component,
        _ref$authed = _ref.authed,
        authed = _ref$authed === undefined ? false : _ref$authed,
        redirectTo = _ref.redirectTo,
        rest = _objectWithoutProperties(_ref, ['component', 'authed', 'redirectTo']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(routeProps) {
            return authed ? (0, _renderMergedProps2.default)(component, routeProps, rest) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                    pathname: redirectTo,
                    state: { from: routeProps.location }
                } });
        } }));
};

exports.default = PrivateRoute;