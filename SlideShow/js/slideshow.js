function SlideShow(slideshow) {
  i = 0;
  this.init(slideshow);
}

SlideShow.prototype.showItem = function() {
  if(i == $length) {
    i = 0;
  }
  $items.eq(i).fadeIn(1000).delay(1000).fadeOut(1000,function() { 
    showItem();
  });
  i++; 
}

SlideShow.prototype.updateCounter = function() {
  $nav = $('<div class="nav" />').insertAfter(slideshow);
  $nav.text((i + 1) + " of " + $length);
}

SlideShow.prototype.init = function(slideshow) {
  $slideshow = slideshow.prependTo($('body'));
  $items = slideshow.find('li');
  $length = $items.length;
  $items.hide();
  this.updateCounter();
  this.showItem($items.first());
}

$(function() { 
  var $slideshow = $('#slideshow');
  new SlideShow($slideshow);
});