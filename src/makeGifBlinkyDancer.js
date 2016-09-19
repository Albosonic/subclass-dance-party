var makeGifBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<image class="gifDancer" src="assets/polarBear.png"></span>');
  
  this.setPosition(top, left);
};

makeGifBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);

