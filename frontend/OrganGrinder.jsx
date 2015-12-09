var ReactDOM = require('react-dom');
var React = require('react');
var TONES = require('./constants/Tones.js');
var Organ = require('./components/organ.jsx');
var KeyListener = require('./util/KeyListener.js')

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#root');
  new KeyListener(root);
  ReactDOM.render(<Organ />, root);
});
