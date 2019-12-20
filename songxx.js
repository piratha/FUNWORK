SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {


  SC.stream('/tracks/183064498', function(song) {
    $('#play1').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause1').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });





SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {


  SC.stream('playlists/606350235', function(song) {
    $('#play2').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause2').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });

