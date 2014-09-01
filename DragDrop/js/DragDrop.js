function SwapCountries(droppable, draggable) {
  this.init(droppable, draggable);
}
SwapCountries.prototype.dragNDrop = function(droppable, draggable) {
  droppable.droppable({
  drop: function(event, ui) {
      var $this = $(this), 
          $selected = $(".selected");         
      if($selected.length < 1) {
          moveItem(ui.draggable,$this);
        }                   
      }, tolerance: "touch"
  }); 
  draggable.draggable({
    revert: "invalid",
    helper: "clone",
    cursor: "move",
  });

  function moveItem(item, list) {
    item.fadeOut(function() {
      item.find(".item").remove();
      item.appendTo(list).fadeIn();
    });
  }
}

SwapCountries.prototype.init = function(droppable, draggable) {
  this.dragNDrop(droppable, draggable)
}
$(document).ready(function() { 
  // Assigning values
  var $droppable = $('.droppable'), 
      $draggable = $('.draggable'); 
      
  // Calling Function
  new SwapCountries($droppable, $draggable);
});