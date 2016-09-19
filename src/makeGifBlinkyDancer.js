var makeGifBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="gifDancer"></span>');
  
  this.setPosition(top, left);
};

makeGifBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);

