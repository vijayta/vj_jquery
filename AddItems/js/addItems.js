function addItem(stackHolder, add) {
  this.add = add;
  this.stackHolder = stackHolder;
  this.init(stackHolder);
  this.counter = 1;
}
addItem.prototype.highlight = function() {
  this.stackHolder.delegate('div.newItem' , "click", function() {
    $(this).toggleClass('highlight');
  });
}
addItem.prototype.removeFirstChild = function() {  
  var _this = this;
  this.stackHolder.delegate('.newItem:first-child' , "click", function() {
    $(this).remove();
    _this.counter--;
  });
}
addItem.prototype.bindEvents = function(stackHolder) {
  var _this = this;
  this.add.bind('click', function() { 
    stackHolder.prepend($('<div class="newItem"> This is Div "' + _this.counter++ + '"</div>'));
  });
}
addItem.prototype.init = function(stackHolder) {
  this.bindEvents(stackHolder);
  this.highlight();
  this.removeFirstChild();
}

$(document).ready(function() { 
  // Assigning values
  var $stackHolder = $('#stackHolder'), 
      $add = $('#btnAdd');

  // Calling Function
  new addItem($stackHolder, $add);
});