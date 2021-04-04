let lake = document.getElementById("lake");
let thunder = document.getElementById("thunder");
lake.muted = false;
thunder.muted = true;

$(document).ready(function () {
  $(window).scroll(function (event) {
    var pos_body = $("html,body").scrollTop();
    console.log(pos_body);
    lake.muted = false;
    thunder.muted = true;
    if (pos_body > 550) {
      lake.muted = true;
      thunder.muted = false;
      $(".back-to-top").addClass("hien-ra");
    } else {
      $(".back-to-top").removeClass("hien-ra");
    }
  });
  $(".back-to-top").click(function (event) {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// document.addEventListener('play', function(e){
//   var audios = document.getElementsByTagName('audio');
//   for(var i = 0, len = audios.length; i < len;i++){
//       if(audios[i] != e.target){
//           audios[i].pause();
//       }
//   }
// }, true);
