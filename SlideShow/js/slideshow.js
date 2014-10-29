var SlideShow = function ($slideShow, $slideList) {
  this.$slideShow = $slideShow;
  this.$slideList = $slideList;
  this.$length = this.$slideList.length;
  this.$index = 0;
}
SlideShow.prototype.SliderPosition = function () {
  this.$slideShow.prependTo('body');
  this.$slideList.hide();
}
SlideShow.prototype.updateCounter = function () {
  $('<nav />').attr('id', 'sliderNavigation').insertAfter(this.$slideShow);
}
SlideShow.prototype.showItem = function ($nextSlide) {
  var _this = this;
  $('#sliderNavigation').text((_this.$index + 1) + " of " + _this.$length);
    $nextSlide.fadeIn(1000).delay(1000).fadeOut(1000,function() { 
    _this.$index++;
    if(_this.$index < _this.$length) {
      _this.showItem($(this).next());
    }
    else {
      _this.$index = 0;
      _this.showItem(_this.$slideList.first());
    }
  });
}
SlideShow.prototype.init = function () {
  this.SliderPosition();
  this.updateCounter();
  this.showItem(this.$slideList.first());
}
$(function() {
  var Slider = new SlideShow($('#slideshow'), $('#slideshow li'));
  Slider.init();
});