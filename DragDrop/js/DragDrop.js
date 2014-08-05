function swapCountries(droppable, draggable, item, list) {
  this.init(droppable, draggable, item, list);
}
swapCountries.prototype.DropElem = function(droppable, list, item) {
  droppable.droppable({
  drop: function(event, ui) {
      var $this = $(this);
      var $selected = $(".selected");         
      if($selected.length < 1){
        moveItem(ui.draggable, $this);
      }                   
    }, tolerance: "touch"
  }); 
  function moveItem(item, list) {
    item.fadeOut(function() {
      item.remove();
      item.appendTo(list).fadeIn();
    });
  }
}
swapCountries.prototype.DragElem = function(draggable) {
   draggable.draggable({
    revert: "invalid",
    helper: "clone",
    cursor: "move",
  });
}
swapCountries.prototype.init = function(droppable, draggable, item, list) {
  this.DropElem(droppable)
  this.DragElem(draggable);
}
$(document).ready(function() { 
  // Assigning values
  var $droppable = $('.droppable'), 
      $draggable = $('.draggable'), 
      $item = $('.item'), 
      $list = $('.list');
      
  // Calling Function
  new swapCountries($droppable, $draggable, $item, $list);
 
});


