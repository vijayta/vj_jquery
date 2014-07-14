$(document).ready(function() { 
  //Add five new list items to the end of the unordered list #myList.
  for(var i=1; i<=5; i++){
   $('<li>List item '+ i +'</li>').appendTo('#myList');
  }

  //Remove the odd list items
  $('#myList li:odd').remove();

  //Add another h2 and another paragraph to the last div.module
  var $heading = '<h2>This is another heading added by jQuery</h2>';
  var $paragraph = '<p>This is another paragraph added by jQuery.</p>';
  $('div.module').last().append($heading + $paragraph);

  //Add another option to the select element; give the option the value "Wednesday"
  $('<option value="Wednesday">Wednesday</option>').appendTo('select');

  //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $('<div class="module" />').append($('img:first').clone()).insertAfter('div.module:last');
});