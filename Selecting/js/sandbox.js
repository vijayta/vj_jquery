$(document).ready(function() { 
  //Select all of the div elements that have a class of "module" and give class selectedDiv.	
  $("div.module").addClass("selectedDiv"); 
 
  //three selectors that can be use to get the third item in the #myList unordered list
  $('#myListItem').css('color','#00f');
  $('#myList #myListItem').css('color','#00f');
  $('#myList').find('#myListItem').css('color','#00f');
  $('#myList li').eq(2).css('color', '#00f');
  $('#myList li:nth-child(2)').css('color', '#00f');
  //best way is the First one as it refers directly by the id of the element and no depenedency on DOM

  //Select the label for the search input using an attribute selector.
  $("label[for = 'q']").css("color" , "#217e00");

  //Figure out how many elements on the page are hidden
  $count = $('html').find('*:hidden').length;
  console.log('Total hidden elements on the page is: ' + $count);

  //Figure out how many image elements on the page have an alt attribute.
  $countImgWithAlt = $('img[alt]').length;
  console.log('image elements on the page have an alt attribute are: ' + $countImgWithAlt);

  //Select all of the odd table rows in the table body.
 $("#fruits tr:odd").css("background-color" , "#f0f0f0");
  } 
);