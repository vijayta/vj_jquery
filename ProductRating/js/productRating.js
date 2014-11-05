function ProductRating() {
  this.init();
}
ProductRating.prototype.createRating = function() {
  this.ratings = ["Love it", "Like it", "No Views", "Dislike it", "Abhor it"];
  var $ratingsContainer = $('#rating_values');
  $.each(this.ratings, function(index, value) {
    $ratingsContainer.append($('<div class="rating" id="' + value.toLowerCase().replace(/ /g, '-') + '">' + value + '</div>'));
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
  var $containerDiv = $('<div id="' + productName.toLowerCase().replace(/ /g, '-') + '-rating" class="row"></div>').appendTo($('#products_rating'));
  $containerDiv.append($('<div id="' + productName.toLowerCase().replace(/ /g, '-') + '" class="productName">' + productName + '</div>'));
  for (var i = 0, j = this.ratings.length; i < j; i++) {
    $containerDiv.append($('<div class="radio-box"><input value="' + this.ratings[i].toLowerCase().replace(/ /g, '-') + '" type="radio" name="' + productName.toLowerCase().replace(/ /g, '-') + '-rating" /></div>'));  
  }
}
ProductRating.prototype.activeItems = function() {
  $('.row').delegate('input[type="radio"]', 'click', function () {
    var $this = $(this), 
        $id = this.value, 
        $product = $this.attr('name');

    $('#rating_values').find('#' + $id).addClass('highlighted').siblings().removeClass('highlighted');
    $('#products_rating').find('#' + $product).addClass('highlighted').siblings().removeClass('highlighted');
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