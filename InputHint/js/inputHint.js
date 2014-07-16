function InputHint(textField, labelVal) {
  var $text = textField, 
      $labelVal = labelVal, 
      hint = $labelVal.remove().text();
  $text.attr('value', hint).addClass('hint');

  $text.bind('focus', function() {
    if($text.hasClass('hint')) {
      $text.attr('value', '').removeClass('hint');
    }
  });

  $text.bind('blur', function() {
    var textValue = $text.val().trim();
    if(textValue == '') {
      $text.attr('value', hint).addClass('hint');
    }
  });  
}

$(document).ready(function() { 
  // Assigning values
  var $textField = $('#search .input_text'), 
      $labelVal = $('#search label');

  // Calling Function
  new InputHint($textField, $labelVal);
});