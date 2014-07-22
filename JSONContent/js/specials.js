function LoadContent(specials) {
  this.specials = specials;
  this.init(specials);
}

LoadContent.prototype.fetchData = function() {
  var $dynamicContent = $("<div></div>").insertAfter(this.specials.find('form')),  
      $select = this.specials.find('select'),
      cached_JSON = {};
      $select.one('change', function() {
        var $value = $(this).val();
        $.getJSON('data/specials.json', function(content) { 
          cached_JSON = content;
          $dynamicContent.html('<h1>' + cached_JSON[$value].title + '</h2>' + '<p>' + cached_JSON[$value].text + '</p>' + '<img src="' + cached_JSON[$value].image + '" />')
          .css("color" , cached_JSON[$value].color);
        });
        $(this).change(function() {
          var $value = $(this).val();
          $dynamicContent.html('<h1>' + cached_JSON[$value].title + '</h2>' + '<p>' + cached_JSON[$value].text + '</p>' + '<img src="' + cached_JSON[$value].image + '" />')
          .css("color" , cached_JSON[$value].color);
        });
      });
}

LoadContent.prototype.init = function() {
  this.specials.find('li.buttons').remove();
  this.fetchData();
}

$(function() { 
  var $specials = $('#specials');
  new LoadContent($specials);
});