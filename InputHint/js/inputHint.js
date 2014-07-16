$(document).ready(function() { 
  function $InputHint(textfield, labelVal){
    var $text = textfield;
    var $labelVal = labelVal;
    $hint = $labelVal.remove().text();
    $text.addClass('hint');
    $text.bind('focus', function() {
      if($text.hasClass('hint')) {
        $text.attr('value','');
        $text.removeClass('hint');
      }
    });
    $text.bind('blur', function() {
      var $textValue = $text.val().trim();
      if($textValue == "") {
        $text.attr('value', $hint).addClass('hint');
      }
    });  
  }
  // Assigning values
  var textfield = $('#search .input_text');
  var labelVal = $('#search label');

  // Calling Function
  new $InputHint(textfield, labelVal);
});