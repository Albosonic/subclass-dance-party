var makeDancer = function(top, left, timeBetweenSteps, image, danceClass) {
  this.$node = $('<image class="dancer" src= "assets/' + image + '"/>');
  this.top = top;
  this.left = left;
  this.stepInstance;
  this.isBeingDragged = false;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(this.top, this.left);
  this.step();
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.stepInstance = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top = top,
    left: this.left = left
  };
  this.$node.css(styleSettings);
};


makeDancer.prototype.addEventHandlers = function () {
  var thisDancer = this;
  var thisNode = this.$node;
  var spacing = ($('body').width() - 200) / dancers.length;
  
  if (linedUp === false) { 
  // Click and drag behavior.
    thisNode.on('mousedown', function() {
      if (thisDancer.isBeingDragged === false) {
        clearTimeout(thisDancer.stepInstance);
        thisNode.stop();
        thisDancer.isBeingDragged = true;
        $('body').on('mousemove', function(event) {
          var position = {
            top: thisDancer.top = event.clientY - thisNode.height() / 2,
            left: thisDancer.left = event.clientX - thisNode.width() / 2
          };
          thisNode.css(position);
        });
      } else {
        thisDancer.isBeingDragged = false;
        $('body').off('mousemove');
        thisDancer.step();
      }
    });
  // END click and drag behavior.
  } else {
    thisNode.on('mousedown', function() {
      if (thisDancer.isBeingDragged === false) {
        clearTimeout(thisDancer.stepInstance);
        thisNode.stop();
        thisDancer.isBeingDragged = true;
        $('body').on('mousemove', function(event) {
          var position = {
            top: thisDancer.top = event.clientY - thisNode.height() / 2,
            left: thisDancer.left = event.clientX - thisNode.width() / 2
          };
          thisNode.css(position);
          for (var i = 1; i < dancers.length; i++) {
            var yUnit = dancers[i].top - dancers[i - 1].top;
            var xUnit = dancers[i].left - dancers[i - 1].left;
            var distanceToLeftNeighbor = Math.sqrt(Math.pow(xUnit, 2) + Math.pow(yUnit, 2));
            xUnit = xUnit / distanceToLeftNeighbor;
            yUnit = yUnit / distanceToLeftNeighbor;
            if (distanceToLeftNeighbor >= spacing) {
              dancers[i].setPosition(dancers[i - 1].top + spacing * yUnit, dancers[i - 1].left + spacing * xUnit);
            }
          }
        });
      } else {
        thisDancer.isBeingDragged = false;
        linedUp = false;
        $('body').off('mousemove');
        for(var i = 0; i<dancers.length; i++) {
          dancers[i].$node.off();
          dancers[i].step();
          dancers[i].addEventHandlers();
        }
      }
    });
  }


};

// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };