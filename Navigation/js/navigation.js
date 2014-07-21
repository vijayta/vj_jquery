function Navigation(navItem) {
  navItem.hover(function() {
    $(this).find('ul').toggleClass('hover');
  });
}

$(document).ready(function() { 
  var $navItem = $('#nav li');
  new Navigation($navItem);
});