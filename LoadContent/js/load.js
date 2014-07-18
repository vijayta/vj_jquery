function LoadDescription(blog) {
  var $blog = blog;
      this.heading = $blog.find('h3');
      this.init();
}
LoadDescription.prototype.init = function() {
  this.heading.each(function() {
    var $this = $(this),
        $target = $('<div/>').insertAfter($this);
    $this.data('target', $target);
  });
  this.heading.click(function(event) {
    event.preventDefault();
    var $this = $(this),
        postDetailLocation = 'data/' + $(this).children('a').attr('href').replace('#',' #');
    $this.data('target').load(postDetailLocation);
  });
}      

$(function() { 
  var $blog = $('#blog');
  new LoadDescription($blog);
});