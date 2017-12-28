var channelList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "mrrikemat", "RobotCaleb", "noobs2ninjas", "johnnyboi_i", "summit1g", "medrybw"];
var streamData;
var channelUrl = "";
var url = "";

$(document).ready(function() {

  for (var i = 0; i < channelList.length; i++) {
    (function(i) {
      url = 'https://wind-bow.gomix.me/twitch-api/streams/' + channelList[i] + '?callback=?';
      $.getJSON(url, function(data) {
        streamData = data;
        if (streamData.stream) {
          $('#results').append('<div id="'+channelList[i]+'" class="onCh resultBox row"><a target="_blank" href="https://www.twitch.tv/'+channelList[i]+'"><div class="col-md-3 col-sm-3 col-xs-3"><img class="logoImg" src="' + streamData.stream.channel.logo + '"></div><div class="col-md-7 col-sm-7 col-xs-7"><h5><strong>' + streamData.stream.channel.display_name + '</strong></h5><p>' + streamData.stream.channel.game + '</p></div><div class="col-md-2 col-sm-2 col-xs-2"><img class="onlineIcon" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png"></div></a></div>');
        } else {
          channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/' + channelList[i] + '?callback=?';
          $.getJSON(channelUrl, function(dataChannel) {
            var offData = dataChannel;
            $('#results').append('<div id="'+channelList[i]+'" class="offCh resultBox row"><a target="_blank" href="https://www.twitch.tv/'+channelList[i]+'"><div class="col-md-3 col-sm-3 col-xs-3"><img class="logoImg" src="' + offData.logo + '"></div><div class="col-md-7 col-sm-7 col-xs-7"><h5><strong>' + offData.display_name + '</strong></h5></div><div class="col-md-2 col-sm-2 col-xs-2"><img class="onlineIcon" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png"></div></a></div>');
          });
        }
      });
    })(i);
  }
});

$('#searchBox').keyup(function() {
  if($('#searchBox').val() == "") {
    for(var i = 0; i <= channelList.length; i++) {
      $('#'+channelList[i]).show();
    }
  }
  var val = $('#searchBox').val().toLowerCase();
  
  for(var i = 0; i < channelList.length; i++) {
    if(!(channelList[i].toLowerCase().includes(val))) {
      $('#'+channelList[i]).hide();
    }
  }
});
  
$('#allButton').click(function() {
  $('#allButton').css('background-color', 'white');
  $('#offButton').css('background-color', '#6441a5');
  $('#onButton').css('background-color', '#6441a5');
  $('#span1').css('color', '#6441a5');
  $('#span2').css('color', 'white');
  $('#span3').css('color', 'white');
  for(var i = 0; i < channelList.length; i++) {
    $('#'+channelList[i]).show();
  }
});

$('#onButton').click(function() {
  $('#allButton').css('background-color', '#6441a5');
  $('#offButton').css('background-color', '#6441a5');
  $('#onButton').css('background-color', 'white');
  $('#span1').css('color', 'white');
  $('#span2').css('color', '#6441a5');
  $('#span3').css('color', 'white');
  for(var i = 0; i < channelList.length; i++) {
    if($('#'+channelList[i]).hasClass("offCh")) {
      $('#'+channelList[i]).hide();
    } else {
      $('#'+channelList[i]).show();
    }
  }
});

$('#offButton').click(function() {
  $('#allButton').css('background-color', '#6441a5');
  $('#offButton').css('background-color', 'white');
  $('#onButton').css('background-color', '#6441a5');
  $('#span1').css('color', 'white');
  $('#span2').css('color', 'white');
  $('#span3').css('color', '#6441a5');
  for(var i = 0; i < channelList.length; i++) {
    if($('#'+channelList[i]).hasClass("onCh")) {
      $('#'+channelList[i]).hide();
    } else {
      $('#'+channelList[i]).show();
    }
  }
});