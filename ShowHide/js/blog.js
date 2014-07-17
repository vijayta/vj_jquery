function Slide(blogItem){
  var $blogItem = blogItem;
  $blogItem.each(function() {
    var $this = $(this);
    $this.find('h3').click(function(clickObject) {
      clickObject.preventDefault();
      $this.siblings().find('p').each(function() {
          $(this).slideUp('400');
      });
      $this.find('p').slideDown('400');
    });
  });
}

$(function() { 
  var $blogItem = $('#blog ul li');
  new Slide($blogItem);
});