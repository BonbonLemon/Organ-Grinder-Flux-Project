var KeyStore = require('./../stores/KeyStore.js')

var Track = function (attributes) {
  this.name = attributes['name'];

  if (attributes['roll']) {
    this.roll = attributes['roll'];
  } else {
    this.roll = [];
  }
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.addNotes = function () {
  var notes = {};

  notes['timeSlice'] = Date.now() - this.startTime;
  notes['notes'] = KeyStore.all();

  this.roll.push(notes);
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }

  var playbackStartTime = Date.now(),
      currentNote = 0;

  setInterval(function () {
    if (Date.now() - playbackStartTime > this.roll[0]['timeSlice']) {
      
    }
  })
};

module.exports = Track;
