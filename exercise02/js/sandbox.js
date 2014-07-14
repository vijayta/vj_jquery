$(document).ready(function() { 
  //Select all of the image elements on the page; log each image's alt attribute.
  $('img').each(function(i) {
    console.log(this.alt);
  });
  
});