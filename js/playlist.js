
$(document).ready(function() {

	var bgAudio = document.getElementById("myAudio");
  var src1 = "music/mp3-3.mp3";
  var src2 = "music/mp3-1.mp3";
  var src2 = "music/mp3-3.mp3";
  var src2 = "music/mp3-4.mp3";
  
  var currentlyPlaying = 0;
  
  bgAudio.volume = 0.3;

  bgAudio.controls = true;
  bgAudio.loop = true;
  bgAudio.autoplay = true;
  bgAudio.src = src1;
  
  bgAudio.onended = function(){
  	bgAudio.stop();
    bgAudio.src = src2;
    bgAudio.play();
  }
  
  bgAudio.play();
  
});