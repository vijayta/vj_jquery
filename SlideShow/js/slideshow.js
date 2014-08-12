function SlideShow(slideshow) {
  //Move the #slideshow element to the top of the body.
  this.slideshow = slideshow.prependTo($('body'));
  this.init();
}

SlideShow.prototype.getItem = function($item, trav) {
  var $returnItem = $item[trav]();
  return $returnItem.length ?
    $returnItem : this.totalSlide[(trav == 'next') ? 'first' : 'last']();
}
SlideShow.prototype.showItem = function($currentItem, $itemToShow) {
  var $itemToShow = $itemToShow || this.getItem($currentItem,'next');
    $currentItem.fadeOut(200, function() {
      $itemToShow.fadeIn(200, this.fadeCallback());
    });
}
SlideShow.prototype.updateCounter = function(num) {
  $nav = $('<div class="nav" />').insertAfter(this.slideshow);
  $nav.text((num + 1) + " of " + this.totalSlide.length);
}
SlideShow.prototype.fadeCallback = function() {
  var $this = $(this),
  num = $this.prevAll().length,
  $next = this.getItem($this, 'next'),
  timeout = false;
  this.updateCounter(num);
  timeout = setTimeout(function() {
    $this.showItem($this ,$next);
    }, 2000);
}
SlideShow.prototype.init = function() {
  this.totalSlide = this.slideshow.children();
  this.totalSlide.hide();
  this.totalSlide.eq(0).fadeIn(100, this.fadeCallback());
}

$(function() { 
  var $slideshow = $('#slideshow');
  new SlideShow($slideshow);
});