$(document).ready(function() {
  window.dancers = [];

var addAvatarButtonHandlers = function() {
  $('.chooseAvatarButton').on('click', function(event) {

    var dancerMakerFunctionName = $(event.target).data('dancer-maker-function-name');
    var dancerAvatar = $(event.target).data('dancer-image');


    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      dancerAvatar
    );
    $('body').append(dancer.$node);
    dancer.addEventHandlers();
    // addDancerMouseOver(dancer);
    // addDancerMouseLeave(dancer);
    window.dancers.push(dancer);
    $('.chooseAvatarButton').remove();
  });
};

$('.addDancerButton').on('click', function(event) {

  var dancerType = $(event.target).data('dancer-maker-function-name');
  var $dropDown = $('<a href="#" class="chooseAvatarButton" data-dancer-maker-function-name="' + dancerType + '" data-dancer-image="movingWolf.gif">Wolf</a>');
  $dropDown.css({top: event.target.offsetTop + event.target.offsetHeight, left: event.target.offsetLeft, width: event.target.offsetWidth, height: event.target.offsetHeight, position: 'absolute'});
  $('body').append($dropDown);

  var $dropDown = $('<a href="#" class="chooseAvatarButton" data-dancer-maker-function-name="' + dancerType + '" data-dancer-image="narwhal.gif">Narwhal</a>');
  $dropDown.css({top: event.target.offsetTop + event.target.offsetHeight * 2, left: event.target.offsetLeft, width: event.target.offsetWidth, height: event.target.offsetHeight, position: 'absolute'});
  $('body').append($dropDown);

  var $dropDown = $('<a href="#" class="chooseAvatarButton" data-dancer-maker-function-name="' + dancerType + '" data-dancer-image="polarBear.png">polarBear</a>');
  $dropDown.css({top: event.target.offsetTop + event.target.offsetHeight * 3, left: event.target.offsetLeft, width: event.target.offsetWidth, height: event.target.offsetHeight, position: 'absolute'});
  $('body').append($dropDown);
  
  addAvatarButtonHandlers();

});


  $('.lineUpButton').on('click', function(event) {


    var lineUpFunctionName = $(this).data('line-up-function');
    var lineUpFunction = window[lineUpFunctionName];

    lineUpFunction();

  });

});

var lineUp = function() {
  
  
  var spacing = ($('body').width() - 200) / dancers.length;
  for (var i = 0; i < dancers.length; i++) {
    clearTimeout(dancers[i].stepInstance);
    dancers[i].setPosition($('body').height() / 2, 100 + (spacing * i));
  }
};



// var addDancerMouseOver = function(dancer) {
//   dancer.originalSpeed = dancer.timeBetweenSteps;
//   dancer.$node.on('mouseenter', function() {
//     clearTimeout(dancer.stepInstance);
//     console.log(dancer.timeBetweenSteps);
//   });
// };

// var addDancerMouseLeave = function(dancer) {
//   dancer.$node.on('mouseleave', function() {
//     dancer.step();
//     console.log(dancer.timeBetweenSteps);
//   });
// };

  