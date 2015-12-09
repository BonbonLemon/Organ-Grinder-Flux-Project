var React = require('react'),
    KeyStore = require('./../stores/KeyStore.js'),
    Note = require('./../util/Note.js'),
    TONES = require('./../constants/Tones.js');

var Key = React.createClass({
  componentDidMount: function () {
    KeyStore.addListener(this.keyChanged);
    this.note = new Note(TONES[this.props.noteName]);
  },

  componentWillUnmount: function () {
    KeyStore.removeListener(this.keyChanged);
  },

  keyChanged: function() {
    if (this.isPressed()) {
      console.log("starting...");
      this.note.start();
    } else {
      console.log('stopping...');
      this.note.stop();
    }
  },

  isPressed: function () {

    if (KeyStore.all().indexOf(this.props.noteName) === -1) {
      return false;
    } else {
      return true;
    }
  },

  render: function () {
    return (
      <div>{this.props.noteName}</div>
    )
  }
});

module.exports = Key;
