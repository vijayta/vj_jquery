function SlideShow(slideshow) {
  this.slideshow = slideshow;
  this.init();
}

SlideShow.prototype.showItem = function() {
  var _this = this;
  if(this.loop == this.length) {
    this.loop = 0;
  }
  this.items.eq(_this.loop).fadeIn(1000).delay(1000).fadeOut(1000,function() { 
    _this.showItem();
    $nav.text((_this.loop) + " of " + _this.length);
  });
  this.loop++;
}

SlideShow.prototype.updateCounter = function() {
  $nav = $('<div class="nav" />').insertAfter(this.slideshow);
  $nav.text((this.loop) + " of " + this.length);
}

SlideShow.prototype.init = function() {
  $slideshow = this.slideshow.prependTo($('body'));
  this.items = this.slideshow.find('li');
  this.length = this.items.length;
  this.items.hide();
  this.loop = 0;
  this.showItem();
  this.updateCounter();
  
}

$(function() { 
  var $slideshow = $('#slideshow');
  new SlideShow($slideshow);
});