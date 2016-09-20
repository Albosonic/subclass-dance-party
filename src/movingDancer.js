var movingDancer = function(top, left, timeBetweenSteps, image) {
  makeDancer.call(this, top, left, timeBetweenSteps, image);
  // this.$node = $('<image class="movingDancer" src="assets/movingWolf.gif"/>');
  // this.setPosition(top, left);
  this.animationLocation;
};

movingDancer.prototype = Object.create(makeDancer.prototype);

var makeDancerStep = movingDancer.prototype.step;

movingDancer.prototype.step = function () {
  makeDancerStep.call(this);
  if (this.animationLocation === this.left + 100 + 'px') {  
    this.animationLocation = this.left - 100 + 'px'
    this.$node.animate({left:this.animationLocation});
  } else {
    this.animationLocation = this.left + 100 + 'px'
    this.$node.animate({left:this.animationLocation});
  }
};