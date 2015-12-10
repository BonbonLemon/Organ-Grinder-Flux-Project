var KeyStore = require('./../stores/KeyStore.js'),
    keyPressActions = require('./../actions/KeyActions.js');

var Mapping = {
  65: 'C4',
  83: 'D4',
  68: 'E4'
};

var KeyListener = {}

KeyListener.bindEvents = function () {
  window.addEventListener("keydown", function(e) {
    keyPressActions.keyDown(Mapping[e.keyCode]);
  });
  window.addEventListener("keyup", function(e) {
    keyPressActions.keyUp(Mapping[e.keyCode]);
  });
};

module.exports = KeyListener;
