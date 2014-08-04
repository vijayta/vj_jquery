function addItem(stackHolder, add) {
  this.init(stackHolder, add);
}
addItem.prototype.removeFirstChild = function(stackHolder, counter) {
  stackHolder.delegate('div.newItem' , "click", function() {
    var $this = $(this);
    $this.toggleClass('highlight');
    if($this.is(':first-child')) {
      $this.remove().removeClass('highlight');
      counter--;
    }
  });
}
addItem.prototype.init = function(stackHolder, add) {
  var counter = 1;
  add.bind('click', function() { 
    stackHolder.prepend($('<div class="newItem"> This is Div "' + counter++ + '"</div>'));
  });
  this.removeFirstChild(stackHolder, counter);
}

$(document).ready(function() { 
  // Assigning values
  var $stackHolder = $('#stackHolder'), 
      $add = $('#btnAdd');

  // Calling Function
  new addItem($stackHolder, $add);
});