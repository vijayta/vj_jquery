function LoadContent(blog) {
  var $blog = blog, 
      $heading = $blog.find('h3');
  $heading.each(function() {
    var $this = $(this),
        $target = $('<div/>').insertAfter($this);
    $this.data('target', $target);
  });
  $heading.click(function(event) {
    event.preventDefault();
    var $this = $(this),
        $a = $this.find('a'),
        $target = $this.data('target'),
        href = $a.attr('href'),
        id = '#' + href.split('#')[1];
    $this.data('target').load("data/blog.html " + id);
  });
}

$(function() { 
  var $blog = $('#blog');
  new LoadContent($blog);
});