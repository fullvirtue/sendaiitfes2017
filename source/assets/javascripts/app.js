function setAngle(e, angle) {
  e.css('transform', 'rotateX(' + angle + 'deg)'); // jQuery 1.8.0以降はベンダープレフィックスを自動で付けてくれる
}
// dir: 0:0→90度、1:90→0度
function animate(e, dir, ms) {
  const div = 9; /* 分割数 */
  for (var i = 0; i <= div; i++) {
    (function(i) {
      setTimeout(function() {
        setAngle(e, dir ? 90 / div * i : 90 / div * (div - i));
      }, ms / div * i);
    })(i);
  }
}

function fmt2(n) {
  return ('0' + n).slice(-2);
}


var startDateTime = new Date();
var endDateTime = new Date("October 28,2017 12:00:00");
var left = 0;
var a_day = 24 * 60 * 60 * 1000;

var d;
var h;
var m;
var s;

var pred;
var preh;
var prem;
var pres;
var videoDeleted = false;

function getTime() {
  startDateTime = new Date();
  left = endDateTime - startDateTime;
  d = Math.floor(left / a_day);
  h = Math.floor((left % a_day) / (60 * 60 * 1000));
  m = Math.floor((left % a_day) / (60 * 1000)) % 60;
  s = Math.floor((left % a_day) / 1000) % 60 % 60;
  //console.log(d+"days "+h+";"+m+";"+s);
}
$(function() {


  getTime();
  setTime();
  setTime();

  setInterval(function() {
    getTime();
    setTime();

  }, 1000);



  var $video = document.getElementById("videos");
  $video.addEventListener('play', function() {
    resizeFunc();
  }, false);

  $video.addEventListener('timeupdate', function() {
    //console.log(this.currentTime);
    resizeFunc();
    if (!videoDeleted && this.currentTime > 3) {
      videoDeleted = true;
      $(".wrapper").animate({
        opacity: '1',
      }, {
        duration: 400,
        easing: 'swing',
      });
    }
  }, false);

  ////////////////////////
  //RESIZE
  ////////////////////////
  function resizeFunc() {
    var ww = $(window).width();
    var wh = $(window).height();

    $('#videos').offset({
      top: ($(".wrapper").height() - $('#videos').height()) * .5,
      left: (ww - $('#videos').width()) * .5
    });

    $('.countdown').height($('.countdown_wrapper').height() + 26);
  }

  $(window).on('load resize', function() {
    resizeFunc();
  });

});

function setTime() {
  var cnt = 0;
  var e;
  const ms = 100; // 50～990(ミリ秒)

  var e = $('#sec');
  setAngle(e.find('.top2'), 0);
  setAngle(e.find('.bottom2'), 90);
  setAngle(e.find('.top2'), 0);
  e.find('.top').text(fmt2(s % 60));
  e.find('.top2').text(fmt2((s - 1) % 60)); // 回転する方
  animate(e.find('.top2'), true, ms);
  (function(cnt) {
    setTimeout(function() {
      setAngle(e.find('.bottom2'), 90);
      e.find('.bottom').text(fmt2((s - 1) % 60));
      e.find('.bottom2').text(fmt2(s % 60)); // 回転する方
      animate(e.find('.bottom2'), false, ms);
    }, ms);
  })(cnt);

  if (prem != m) {
    var em = $('#min');
    setAngle(em.find('.top2'), 0);
    setAngle(em.find('.bottom2'), 90);
    setAngle(em.find('.top2'), 0);
    em.find('.top').text(fmt2(m % 60));
    em.find('.top2').text(fmt2((m - 1) % 60)); // 回転する方
    animate(em.find('.top2'), true, ms);
    (function(cnt) {
      setTimeout(function() {
        setAngle(em.find('.bottom2'), 90);
        em.find('.bottom').text(fmt2(m % 60));
        em.find('.bottom2').text(fmt2((m) % 60)); // 回転する方
        animate(em.find('.bottom2'), false, ms);
      }, ms);
    })(cnt);
  }

  if (preh != h) {
    var eh = $('#hour');
    setAngle(eh.find('.top2'), 0);
    setAngle(eh.find('.bottom2'), 90);
    setAngle(eh.find('.top2'), 0);
    eh.find('.top').text(fmt2((h) % 60));
    eh.find('.top2').text(fmt2(h - 1 % 60)); // 回転する方
    animate(eh.find('.top2'), true, ms);
    (function(cnt) {
      setTimeout(function() {
        setAngle(eh.find('.bottom2'), 90);
        eh.find('.bottom').text(fmt2(h % 60));
        eh.find('.bottom2').text(fmt2((h) % 60)); // 回転する方
        animate(eh.find('.bottom2'), false, ms);
      }, ms);
    })(cnt);
  }

  if (pred != d) {
    var e = $('#day');
    setAngle(e.find('.top2'), 0);
    setAngle(e.find('.bottom2'), 90);
    setAngle(e.find('.top2'), 0);
    e.find('.top').text(fmt2((d) % 60));
    e.find('.top2').text(fmt2(d - 1 % 60)); // 回転する方
    animate(e.find('.top2'), true, ms);
    (function(cnt) {
      setTimeout(function() {
        setAngle(e.find('.bottom2'), 90);
        e.find('.bottom').text(fmt2(d % 60));
        e.find('.bottom2').text(fmt2((d) % 60)); // 回転する方
        animate(e.find('.bottom2'), false, ms);
      }, ms);
    })(cnt);
  }

  pred = d;
  preh = h;
  prem = m;
  pres = s;

}
