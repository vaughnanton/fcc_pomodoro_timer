$(document).ready(function(){


var audio = new Audio('http://www.earthstation1.com/SFXs/SFX_Wavs/canary.wav');
var sessionNum = $("#session").html();
var breakNum = $("#break").html();

var clock = $('.timer').FlipClock(0, {
		clockFace: 'MinuteCounter',
  countdown: true,
  autoStart:false,
  callbacks: {
    interval: function() {
      time = clock.getTime().time;
      if(time === 0) {
        audio.play();
      }
    }
  }
	});

  //when plus is clicked add to sessionNum/breakNum
$("#plusSes").click(function(){
  sessionNum++;
  $("#session").html(sessionNum);
});

    $("#plusBre").click(function(){
  breakNum++;
  $("#break").html(breakNum);
    });

  //when minus is clicked subtract from sessionNum/breakNum
$("#minusSes").click(function(){
  if (sessionNum > 1) {
  sessionNum--;
  }
  $("#session").html(sessionNum);
});

   $("#minusBre").click(function(){
     if (breakNum > 1) {
  breakNum--;
     }
  $("#break").html(breakNum);
   });

  //when start session is clicked, start the session timer
  $("#startSession").click(function(){
    clock.setTime(parseInt(sessionNum)*60);
    clock.start(function(){
    });
  });

  //when start break is clicked, start the break
  $("#startBreak").click(function(){
    clock.setTime(parseInt(breakNum)*60);
    clock.start(function(){
    });
  });

  //reset timer to sessionNum
  $("#resetTimer").click(function(){
    clock.reset(function(){
      clock.setTime(0);
    });
  });



});
