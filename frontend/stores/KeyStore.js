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
      createKey(payload.note);
      break;
    case "REMOVE_KEY":
      removeKey(payload.note);
      break;
  }
};

var createKey = function (key) {
  if ( _keys.indexOf(key) === -1) {
    _keys.push(key);
    KeyStore.__emitChange();
  }
};

var removeKey = function (key) {
  var idx = _keys.indexOf(key);
  if ( idx !== -1) {
    _keys.splice(idx, 1);
    KeyStore.__emitChange();
  }
}


module.exports = KeyStore;
