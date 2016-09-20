var movingDancer = function(top, left, timeBetweenSteps, image) {
  makeDancer.call(this, top, left, timeBetweenSteps, image);
  // this.$node = $('<image class="movingDancer" src="assets/movingWolf.gif"/>');
  // this.setPosition(top, left);
};

movingDancer.prototype = Object.create(makeDancer.prototype);

var makeDancerStep = movingDancer.prototype.step;

movingDancer.prototype.step = function () {
  makeDancerStep.call(this);
  this.$node.toggle();
};