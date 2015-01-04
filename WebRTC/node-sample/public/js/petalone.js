$(function() {
  $('body').on("click", "#treat", function() {
    $.get("http://10.10.18.119/")
    return false;
  });
  $('body').on("click", "#calldog", function() {

    dialCall('bark@cotoblue.com', 'video',  document.getElementById('localVideo'), document.getElementById('remoteVideo'));

    return false;

  });
  $('body').on("click", "#whistle", function() {
    alert("Kaman API for playing Whistle!");
    return false;
  });
});
