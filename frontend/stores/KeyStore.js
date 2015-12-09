var AppDispatcher = require('../dispatcher/Dispatcher.js'),
    Store = require('flux/utils').Store;

var KeyStore = new Store(AppDispatcher);

var _keys = [];

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "CREATE_KEY":
      createKey(payload);
      break;
    case "REMOVE_KEY":
      removeKey(payload);
      break;
  }
};

var createKey = function (key) {
  var idx;
  _keys.forEach(function (note, index) {
    if (note === key.note) {
      idx = index;
    }
  });

  if (typeof idx === "undefined") {
    _keys.push(key.note);
    KeyStore.__emitChange();
  }
};

var removeKey = function (key) {
  var idx;
  _keys.forEach(function (note, index) {
    if (note === key.note) {
      idx = index;
    }
  });

  if (typeof idx !== "undefined") {
    _keys.splice(idx, 1);
    KeyStore.__emitChange();
  }
}


module.exports = KeyStore;
