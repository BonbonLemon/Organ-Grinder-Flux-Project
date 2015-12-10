var React = require('react'),
    Track = require('./../util/Track.js'),
    KeyStore = require('./../stores/KeyStore.js');

var Recorder = React.createClass({
  getInitialstate: function () {
    return {
      isRecording: false,
      Track: new Track()
    };
  },

  startRecording: function () {
    KeyStore.addListener((this.state.Track.addNotes).bind(this));
  },

  stopRecording: function () {
    KeyStore.removeListener((this.state.Track.addNotes).bind(this));
  },

  render: function () {
    var value, action;
    if (this.state.isRecording) {
      value = "Stop";
      action = this.state.Track.stopRecording;
      this.startRecording();
    } else {
      value = "Record";
      action = this.state.Track.startRecording;
      this.stopRecording();
    }
    return (
      <div>
        <input type="submit"
               value={value}
               onClick={action()}
        />
        <input type="submit"
               value="Play"
               onClick={this.state.Track.play()}
        />
      </div>
    );
  }
})

module.exports = Recorder;
