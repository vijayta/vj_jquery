$(document).ready(function() { 
  //Select all of the image elements on the page; log each image's alt attribute.
  $('img').each(function() {
    console.log(this.alt);
  });

  //Select the search input text box, then traverse up to the form and add a class to the form.
  $('#search').addClass('searchForm').find('.input_text');

  //Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
   $("#myList .current").removeClass('current').next('li').addClass('current');

  //Select the select element inside #specials; traverse your way to the submit button.
  console.log($('#specials').find('input[type="submit"]'));

  //Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  $('#slideshow li:eq(0)').addClass('current').siblings().addClass('disabled');
});