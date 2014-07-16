function Slide(blogItem){
  var $blogItem = blogItem;
  $($blogItem).each(function() {
    var _this = $(this);
    _this.find('h3').click(function(clickObject){
      clickObject.preventDefault();
      _this.siblings().find('p').each(function() {
          $(this).slideUp('400');
      });
      _this.find('p').slideDown('400');
    });
  });
}

$(document).ready(function() { 
  var blogItem = $('#blog ul li');
  new Slide(blogItem);
});