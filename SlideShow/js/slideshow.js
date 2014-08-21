function SlideShow(slideshow) {
  this.init(slideshow);
}

SlideShow.prototype.showItem = function() {
  var _this = this, 
      i = 0;
  if(i == $length) {
    i = 0;
  }
  $items.eq(i).fadeIn(1000).delay(1000).fadeOut(1000,function() { 
    _this.showItem();
    $nav.text((i) + " of " + $length);
  });
  i++; 
}

SlideShow.prototype.updateCounter = function() {
  var i = 0;
  $nav = $('<div class="nav" />').insertAfter(slideshow);
  $nav.text((i + 1) + " of " + $length);
}

SlideShow.prototype.init = function(slideshow) {
  $slideshow = slideshow.prependTo($('body'));
  $items = slideshow.find('li');
  $length = $items.length;
  $items.hide();
  this.updateCounter();
  this.showItem();
}

$(function() { 
  var $slideshow = $('#slideshow');
  new SlideShow($slideshow);
});