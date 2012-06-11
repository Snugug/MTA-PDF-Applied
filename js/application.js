jQuery(document).ready(function($) {
  $("#southbound").height($("#station-list").height());
  $("#northbound").height($("#station-list").height());
  
  // Timing Functions
  var time = 7;
  $('#TRAINID-3S .time-to').html(time + 'min');
  var train3SInterval = setInterval(function() {
    $('#TRAINID-3S .time-to').html(time-- + 'min');
  }, minMil(1));
  
  // Southbound trains
  var train3S = $('#TRAINID-3S');
  var train2S = $('#TRAINID-2S');
  var train1S = $('#TRAINID-1S');
  
  // Northbound Trains
  var train3N = $('#TRAINID-3N');
  var train2N = $('#TRAINID-2N');
  var train1N = $('#TRAINID-1N');
  
  // Stations
  var nintySixth = $('#nintysixth-st');
  var eightySixth = $('#eightysixth-st');
  var seventyNinth = $('#seventyninth-st');
  var seventySecond = $('#seventysecond-st');
  var sixtySixth = $('#sixtysixth-st');
  var fiftyNinth = $('#fiftyninth-st');
  var fiftyth = $('#fiftyth-st');
  var timeSq = $('#time-sq');
  var thirtyFourth = $('#thirtyfourth-st');
  var twentyEighth = $('#twentyeigth-st');
  var twentyThird = $('#twentythird-st');
  var eighteenth = $('#eighteenth-st');
  var fourteenth = $('#fourteenth-st');
  var christopher = $('#christopher-st');
  var houston = $('#houston-st');
  var canal = $('#canal-st');
  var franklin = $('#franklin-st');
  var chambers = $('#chambers-st');
  
  // Southbound Trains
  train3S.offset({ top: (nintySixth.offset().top + (train3S.height() / 2))});
  
  train2S.offset({ top: (nintySixth.offset().top + (train2S.height() / 2))});
  train2S.toggle();
  
  train1S.offset({ top: (nintySixth.offset().top + (train1S.height() / 2))});
  train1S.toggle();
  
  // Northbound Trains
  train3N.offset({ top: (chambers.offset().top + (train3N.height() / 2))});
  
  train2N.offset({ top: (chambers.offset().top + (train2N.height() / 2))});
  train2N.toggle();
  
  train1N.offset({ top: (chambers.offset().top + (train1N.height() / 2))});
  train1N.toggle();
  
  // Southbound Animation
  train3S.animate({
    top: seventySecond.offset().top + (train3S.height() / 2), 
  }, minMil(3), 'linear', function() {
    train3S.addClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train3S.height() / 2),
  }, minMil(1), 'linear', function() {
    train3S.removeClass('stop');
  }).animate({
    top: timeSq.offset().top + (train3S.height() / 2), 
  }, minMil(4), 'linear', function() {
    train3S.addClass('stop');
    clearInterval(train3SInterval);
  }).animate({
    top: timeSq.offset().top + (train3S.height() / 2),
  }, minMil(1), 'linear', function() {
    train3S.removeClass('stop');
    train3S.addClass('passive');
  }).animate({
    top: thirtyFourth.offset().top + (train3S.height() / 2), 
  }, minMil(2), 'linear', function() {
    train3S.addClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train3S.height() / 2),
  }, minMil(1), 'linear', function() {
    train3S.removeClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train3S.height() / 2), 
  }, minMil(3), 'linear', function() {
    train3S.addClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train3S.height() / 2),
  }, minMil(1), 'linear', function() {
    train3S.removeClass('stop');
  }).animate({
    top: chambers.offset().top + (train3S.height() / 2), 
  }, minMil(4), 'linear', function() {
    train3S.addClass('stop');
  }).animate({
    top: chambers.offset().top + (train3S.height() / 2),
  }, minMil(1), 'linear', function() {
    train3S.removeClass('stop');
  });
  
  train2S.animate({
    top: nintySixth.offset().top + (train2S.height() / 2),
  }, minMil(4), 'linear', function() {
    train2S.toggle();
  }).animate({
    top: seventySecond.offset().top + (train2S.height() / 2), 
  }, minMil(3), 'linear', function() {
    train2S.addClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train2S.height() / 2),
  }, minMil(1), 'linear', function() {
    train2S.removeClass('stop');
  }).animate({
    top: timeSq.offset().top + (train2S.height() / 2), 
  }, minMil(4), 'linear', function() {
    train2S.addClass('stop');
  }).animate({
    top: timeSq.offset().top + (train2S.height() / 2),
  }, minMil(1), 'linear', function() {
    train2S.removeClass('stop');
    train2S.addClass('passive');
  }).animate({
    top: thirtyFourth.offset().top + (train2S.height() / 2), 
  }, minMil(2), 'linear', function() {
    train2S.addClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train2S.height() / 2),
  }, minMil(1), 'linear', function() {
    train2S.removeClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train2S.height() / 2), 
  }, minMil(3), 'linear', function() {
    train2S.addClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train2S.height() / 2),
  }, minMil(1), 'linear', function() {
    train2S.removeClass('stop');
  }).animate({
    top: chambers.offset().top + (train2S.height() / 2), 
  }, minMil(4), 'linear', function() {
    train2S.addClass('stop');
  }).animate({
    top: chambers.offset().top + (train2S.height() / 2),
  }, minMil(1), 'linear', function() {
    train2S.removeClass('stop');
  });
  
  train1S.animate({
    top: nintySixth.offset().top + (train1S.height() / 2),
  }, minMil(.75), 'linear', function() {
    train1S.toggle();
  }).animate({
    top: eightySixth.offset().top + (train1S.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: eightySixth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: seventyNinth.offset().top + (train1S.height() / 2), 
  }, minMil(1.3), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: seventyNinth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train1S.height() / 2), 
  }, minMil(1.3), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: sixtySixth.offset().top + (train1S.height() / 2), 
  }, minMil(1.1), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: sixtySixth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: fiftyNinth.offset().top + (train1S.height() / 2), 
  }, minMil(4), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: fiftyNinth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: fiftyth.offset().top + (train1S.height() / 2), 
  }, minMil(2), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: fiftyth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: timeSq.offset().top + (train1S.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: timeSq.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
    train1S.addClass('passive');
  }).animate({
    top: thirtyFourth.offset().top + (train1S.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: twentyEighth.offset().top + (train1S.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: twentyEighth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: twentyThird.offset().top + (train1S.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: twentyThird.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: eighteenth.offset().top + (train1S.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: eighteenth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train1S.height() / 2), 
  }, minMil(1.25), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: christopher.offset().top + (train1S.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: christopher.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: houston.offset().top + (train1S.height() / 2), 
  }, minMil(1.25), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: houston.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: canal.offset().top + (train1S.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: canal.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: franklin.offset().top + (train1S.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: franklin.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  }).animate({
    top: chambers.offset().top + (train1S.height() / 2), 
  }, minMil(5), 'linear', function() {
    train1S.addClass('stop');
  }).animate({
    top: chambers.offset().top + (train1S.height() / 2),
  }, minMil(1), 'linear', function() {
    train1S.removeClass('stop');
  });
  
  // Northbound Animation
  // Southbound Animation
  train3N.animate({
    top: fourteenth.offset().top + (train3N.height() / 2), 
  }, minMil(3), 'linear', function() {
    train3N.addClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train3N.height() / 2),
  }, minMil(1), 'linear', function() {
    train3N.removeClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train3N.height() / 2), 
  }, minMil(2), 'linear', function() {
    train3N.addClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train3N.height() / 2),
  }, minMil(1), 'linear', function() {
    train3N.removeClass('stop');
  }).animate({
    top: timeSq.offset().top + (train3N.height() / 2), 
  }, minMil(4), 'linear', function() {
    train3N.addClass('stop');
  }).animate({
    top: timeSq.offset().top + (train3N.height() / 2),
  }, minMil(1), 'linear', function() {
    train3N.removeClass('stop');
    train3N.addClass('passive');
  }).animate({
    top: seventySecond.offset().top + (train3N.height() / 2), 
  }, minMil(3), 'linear', function() {
    train3N.addClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train3N.height() / 2),
  }, minMil(1), 'linear', function() {
    train3N.removeClass('stop');
  }).animate({
    top: nintySixth.offset().top + (train3N.height() / 2), 
  }, minMil(4), 'linear', function() {
    train3N.addClass('stop');
  }).animate({
    top: nintySixth.offset().top + (train3N.height() / 2),
  }, minMil(1), 'linear', function() {
    train3N.removeClass('stop');
  });

  train2N.animate({
    top: chambers.offset().top + (train2N.height() / 2),
  }, minMil(5), 'linear', function() {
    train2N.toggle();
  }).animate({
    top: fourteenth.offset().top + (train2N.height() / 2), 
  }, minMil(3), 'linear', function() {
    train2N.addClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train2N.height() / 2),
  }, minMil(1), 'linear', function() {
    train2N.removeClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train2N.height() / 2), 
  }, minMil(2), 'linear', function() {
    train2N.addClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train2N.height() / 2),
  }, minMil(1), 'linear', function() {
    train2N.removeClass('stop');
  }).animate({
    top: timeSq.offset().top + (train2N.height() / 2), 
  }, minMil(4), 'linear', function() {
    train2N.addClass('stop');
  }).animate({
    top: timeSq.offset().top + (train2N.height() / 2),
  }, minMil(1), 'linear', function() {
    train2N.removeClass('stop');
    train2N.addClass('passive');
  }).animate({
    top: seventySecond.offset().top + (train2N.height() / 2), 
  }, minMil(3), 'linear', function() {
    train2N.addClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train2N.height() / 2),
  }, minMil(1), 'linear', function() {
    train2N.removeClass('stop');
  }).animate({
    top: nintySixth.offset().top + (train2N.height() / 2), 
  }, minMil(4), 'linear', function() {
    train2N.addClass('stop');
  }).animate({
    top: nintySixth.offset().top + (train2N.height() / 2),
  }, minMil(1), 'linear', function() {
    train2N.removeClass('stop');
  });
  
  train1N.animate({
    top: chambers.offset().top + (train1N.height() / 2),
  }, minMil(.75), 'linear', function() {
    train1N.toggle();
  }).animate({
    top: franklin.offset().top + (train1N.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: franklin.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: canal.offset().top + (train1N.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: canal.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: houston.offset().top + (train1N.height() / 2), 
  }, minMil(1.25), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: houston.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: christopher.offset().top + (train1N.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: christopher.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train1N.height() / 2), 
  }, minMil(1.25), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: fourteenth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: eighteenth.offset().top + (train1N.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: eighteenth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: twentyThird.offset().top + (train1N.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: twentyThird.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: twentyEighth.offset().top + (train1N.height() / 2), 
  }, minMil(1), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: twentyEighth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train1N.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: thirtyFourth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: timeSq.offset().top + (train1N.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: timeSq.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
    train1N.addClass('passive');
  }).animate({
    top: fiftyth.offset().top + (train1N.height() / 2), 
  }, minMil(2), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: fiftyth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: fiftyNinth.offset().top + (train1N.height() / 2), 
  }, minMil(4), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: fiftyNinth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: sixtySixth.offset().top + (train1N.height() / 2), 
  }, minMil(1.1), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: sixtySixth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train1N.height() / 2), 
  }, minMil(1.3), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: seventySecond.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: seventyNinth.offset().top + (train1N.height() / 2), 
  }, minMil(1.3), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: seventyNinth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: eightySixth.offset().top + (train1N.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: eightySixth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  }).animate({
    top: nintySixth.offset().top + (train1N.height() / 2), 
  }, minMil(1.5), 'linear', function() {
    train1N.addClass('stop');
  }).animate({
    top: nintySixth.offset().top + (train1N.height() / 2),
  }, minMil(1), 'linear', function() {
    train1N.removeClass('stop');
  });
  
  
  function minMil(time) {
    return time * 60 * 1000;
  }
});