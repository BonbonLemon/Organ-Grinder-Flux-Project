var Track = function (attributes) {
  this.name = attributes['name'];

  if (attributes['roll']) {
    this.roll = attributes['roll'];
  } else {
    this.roll = [];
  }
};
