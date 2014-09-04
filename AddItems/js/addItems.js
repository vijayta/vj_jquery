function addItem(stackHolder, add) {
  this.add = add;
  this.stackHolder = stackHolder;
  this.init(stackHolder);
  this.counter = 1;
}
addItem.prototype.addButtonListener = function() {
  var _this = this;
  this.add.bind('click', function() { 
    _this.stackHolder.prepend($('<div class="newItem"> This is Div "' + _this.counter++ + '"</div>'));
  });
}

addItem.prototype.allItemsListener =function() {
  this.stackHolder.delegate('div.newItem' , "click", function() {
    $(this).toggleClass('highlight');
  });
}
addItem.prototype.lastItemListener = function() {
  var _this = this;
  this.stackHolder.delegate('.newItem:first-child' , "click", function() {
    $(this).remove();
    _this.counter--;
  });
}
addItem.prototype.bindEvents = function() {
  this.addButtonListener();
  this.allItemsListener();
  this.lastItemListener();
}
addItem.prototype.init = function() {
  this.bindEvents();
}

$(document).ready(function() { 
  // Assigning values
  var $stackHolder = $('#stackHolder'), 
      $add = $('#btnAdd');

  // Calling Function
  new addItem($stackHolder, $add);
});