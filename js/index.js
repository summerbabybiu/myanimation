/**
 * Created by wangzhilong on 2017/7/31.
 */

var maincover = null;
var coverWidth = 0;
function create(index) {
  // var coverHeight = $maincover.outerHeight();
  var odiv= document.createElement('div');

  odiv.className = 'flower-cover flower-cover'+index;
  var indiv = document.createElement('div');
  indiv.className = 'flower flower'+index;
  odiv.appendChild(indiv);

  odiv.style.left = (Math.floor(coverWidth*Math.random())+'px');
  odiv.style.top = 0;
  indiv.style.backgroundSize = Math.max(0.5, Math.random()) * 27 + 'px';
  var random = Math.random();
  indiv.style.animationDelay = "-" + 5 * random + "s";
  // indiv.style.transform = "rotateX("+ 90 * random +"deg)";
  // odiv.style.animationDelay = "-" + 10 * random + "s";
  maincover.appendChild(odiv);
}

$(document).ready(function () {
  maincover = document.getElementById("main");
  coverWidth = $("#main").width();
  for(var x =0 ; x<16; x++) {
    var index = x;
    setTimeout(function (index) {
      create(index);
    }, Math.random() * 8000, index)
  }
});