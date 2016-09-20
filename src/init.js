$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      'movingWolf.gif'
    );
    $('body').append(dancer.$node);
    addDancerMouseOver(dancer);
    addDancerMouseLeave(dancer);
    window.dancers.push(dancer);
  });


  $('.lineUpButton').on('click', function(event) {


    var lineUpFunctionName = $(this).data('line-up-function');
    var lineUpFunction = window[lineUpFunctionName];

    lineUpFunction();

  });

});

var lineUp = function() {
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].lineUp();
  }
};

var addDancerMouseOver = function(dancer) {
  dancer.originalSpeed = dancer.timeBetweenSteps;
  dancer.$node.on('mouseenter', function() {
    dancer.timeBetweenSteps=100000;
    console.log(dancer.timeBetweenSteps);
  });
};

var addDancerMouseLeave = function(dancer) {
  dancer.$node.on('mouseleave', function() {
    dancer.timeBetweenSteps=dancer.originalSpeed;
    dancer.step();
    console.log(dancer.timeBetweenSteps);
  });
};

  