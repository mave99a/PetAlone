$(function() {
  $('body').on("click", "#treat", function() {
    alert("send a treat!");
  });
  $('body').on("click", "#calldog", function() {

    dialCall('14254425101', 'video',  document.getElementById('localVideo'), document.getElementById('remoteVideo'));

  });
  $('body').on("click", "#whistle", function() {
    alert("Kaman API for playing Whistle!");
  });
});
