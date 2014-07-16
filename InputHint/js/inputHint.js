function InputHint(textfield, labelVal){
  var $text = textfield, 
      $labelVal = labelVal, 
      hint = $labelVal.remove().text();
  $text.attr('value', hint).addClass('hint');

  $text.bind('focus', function() {
    if($text.hasClass('hint')) {
      $text.attr('value','');
      $text.removeClass('hint');
    }
  });

  $text.bind('blur', function() {
    var textValue = $text.val().trim();
    if(textValue == "") {
      $text.attr('value', hint).addClass('hint');
    }
  });  
}

$(document).ready(function() { 
  // Assigning values
  var $textfield = $('#search .input_text'),
      $labelVal = $('#search label');

  // Calling Function
  new InputHint($textfield, $labelVal);
});