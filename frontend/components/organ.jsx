var React = require('react'),
    TONES = require('./../constants/Tones.js'),
    Key = require('./key.jsx');

var Organ = React.createClass({
  render: function () {
    return (
      <div>
        {
          Object.keys(TONES).map(function (note, index) {
            return (
              <Key noteName={note} key={index} />
            );
          })
        }
      </div>
    );
  }
})

module.exports = Organ;
