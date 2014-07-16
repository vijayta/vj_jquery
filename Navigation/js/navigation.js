function Navigation(navItem) {
  var $navItem = navItem;
  $navItem.hover(function() {
    var $this = $(this);
    $this.find('ul').toggleClass('hover');
  });
}

$(document).ready(function() { 
  // Assigning values
  var $navItem = $('#nav li');

  // Calling Function
  new Navigation($navItem);
});