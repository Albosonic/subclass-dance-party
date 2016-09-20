var resizingDancer = function(top, left, timeBetweenSteps, image) {
  makeDancer.call(this, top, left, timeBetweenSteps, image);
  // this.$node = $('<image class="movingDancer" src="assets/movingWolf.gif"/>');
  // this.setPosition(top, left);
};

resizingDancer.prototype = Object.create(makeDancer.prototype);

var makeDancerStep = resizingDancer.prototype.step;

resizingDancer.prototype.step = function () {
  makeDancerStep.call(this);
  if (this.$node.width() <= 100) {
    this.$node.css({transform: 'scaleX(-1)'});
    this.$node.animate({width: '200px', height: '200px'}, this.timeBetweenSteps - 100);
  } else {
    this.$node.css({transform: 'scaleX(1)'});
    this.$node.animate({width: '100px', height: '100px'}, this.timeBetweenSteps - 100);
  }

};