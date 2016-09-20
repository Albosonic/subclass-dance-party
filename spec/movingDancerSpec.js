describe('movingDancer', function() {

  var myMovingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    myMovingDancer = new movingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(myMovingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animates itself', function() {
    sinon.spy(myMovingDancer.$node, 'animate');
    myMovingDancer.step();
    expect(myMovingDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(myMovingDancer, 'step');
      expect(myMovingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(myMovingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(myMovingDancer.step.callCount).to.be.equal(2);
    });
  });
});
