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
      this.background = {background: 'red'};
      this.note.start();
    } else {
      this.background = {background: 'white'};
      this.note.stop();
    }

    this.forceUpdate();
  },

  isPressed: function () {

    if (KeyStore.all().indexOf(this.props.noteName) === -1) {
      return false;
    } else {
      // this.background['color'] = 'red';
      return true;
    }
  },

  render: function () {
    return (
      <div style={this.background}>{this.props.noteName}</div>
    );
  }
});

module.exports = Key;
