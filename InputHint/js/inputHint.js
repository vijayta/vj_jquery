$(document).ready(function() { 
  var $text = $('#search .input_text');
  var $hint = $('#search label').remove().text();
  $text.addClass('hint');
  $text.focus(function() {
    if($text.hasClass('hint')) {
      $text.attr('value','');
      $text.removeClass('hint');
    }
  });
  $text.blur(function() {
    var $textValue = $text.val().trim();
    if($textValue == "") {
      $text.attr('value', $hint).addClass('hint');
    }
  });
});