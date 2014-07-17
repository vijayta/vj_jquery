function SlideShow(slideshow) {
      //Move the #slideshow element to the top of the body.
  var $slideshow = slideshow.prependTo($('body')),
      $nav = $('<div class="nav" />').insertAfter($slideshow),
      $totalSlide = $slideshow.children(),
      timeout = false;

  $totalSlide.hide();

  updateCounter = function(num) {
    $nav.text((num + 1) + " of " + $totalSlide.length);
  },

  getItem = function($item, trav) {
    var $returnItem = $item[trav]();
    return $returnItem.length ?
      $returnItem : $totalSlide[(trav == 'next') ? 'first' : 'last']();
  },
  
  showItem = function($currentItem, $itemToShow) {
    var $itemToShow = $itemToShow || getItem($currentItem,'next');
    $currentItem.fadeOut(200, function() {
      $itemToShow.fadeIn(200,fadeCallback);
    });
  },
  fadeCallback = function() {
  var $this = $(this)
  num = $this.prevAll().length,
  $next = getItem($this,'next');
  updateCounter(num);
  timeout = setTimeout(function() {
    showItem($this,$next);
    }, 2000);
  }
  $totalSlide.eq(0).fadeIn(100, fadeCallback);
}

$(function() { 
  var $slideshow = $('#slideshow');
  new SlideShow($slideshow);
});