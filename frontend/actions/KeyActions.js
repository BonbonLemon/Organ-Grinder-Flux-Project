var AppDispatcher = require('./../dispatcher/Dispatcher.js');

var keyPressActions = {
  keyDown: function (note) {
    AppDispatcher.dispatch({
      actionType: "CREATE_KEY",
      note: note
    });
  },

  keyUp: function (note) {
    AppDispatcher.dispatch({
      actionType: "REMOVE_KEY",
      note: note
    });
  }
};

module.exports = keyPressActions;
