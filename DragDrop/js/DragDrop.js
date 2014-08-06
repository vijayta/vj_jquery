function SwapCountries(droppable, draggable) {
  this.init(droppable, draggable);
}
SwapCountries.prototype.dropElem = function(droppable) {
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
SwapCountries.prototype.dragElem = function(draggable) {
   draggable.draggable({
    revert: "invalid",
    helper: "clone",
    cursor: "move",
  });
}
SwapCountries.prototype.init = function(droppable, draggable) {
  this.dropElem(droppable)
  this.dragElem(draggable);
}
$(document).ready(function() { 
  // Assigning values
  var $droppable = $('.droppable'), 
      $draggable = $('.draggable'); 
      
  // Calling Function
  new SwapCountries($droppable, $draggable);
 
});


