function ProductRating() {
  this.init();
}
ProductRating.prototype.createRating = function() {
  this.ratings = ["Love it", "Like it", "No Views", "Dislike it", "Abhor it"];
  var $ratingsContainer = $('#rating_values');
  $.each(this.ratings, function(index, value) {
    $ratingsContainer.append($('<div class="rating" id="' + value.toLowerCase().replace(/ /g, '_') + '">' + value + '</div>'));
  });
}
ProductRating.prototype.createProducts = function() {
  var drinks = ["Coffee", "Tea", "Sodas"], 
      _this = this;
  $.each(drinks, function(index, value) {
    _this.createProductRow(value);
  });
}
ProductRating.prototype.createProductRow = function(productName){
  var product_id = productName.toLowerCase().replace(/ /g, '_'), 
  $containerDiv = $('<div id="' + product_id + '_rating" class="row"></div>').appendTo($('#products_rating'));
  $containerDiv.append($('<div id="' + product_id + '" class="productName">' + productName + '</div>'));
  for (var i = 0, j = this.ratings.length; i < j; i++) {
    $containerDiv.append($('<div class="radio_box"><input class="' + this.ratings[i].toLowerCase().replace(/ /g, '_') + '" type="radio" name="' + product_id + '_rating" disabled /></div>'));  
  }
}
ProductRating.prototype.activeItems = function() {
  $('#products_rating').delegate('.productName', 'click', function () {
    var $this = $(this), 
        id = this.value, 
        product = $this.attr('name');
        
    $this.toggleClass('highlighted').parent().siblings().find('.productName').removeClass('highlighted'); 
  });
  $('#rating_values').delegate('.rating', 'click', function () {
    var $this = $(this);
    $('.highlighted').each(function () {
      $this.addClass('highlighted').siblings().removeClass('highlighted');
      $(this).siblings('div').find('input[class = "' + $this.attr('id') + '"]').prop('checked', true).parent().siblings('div').children().prop('checked', false);
    });
  });
} 

ProductRating.prototype.init = function(){
  this.createRating();
  this.createProducts();
  this.activeItems();
}

$(function() { 
  // Calling Function
  new ProductRating();
});