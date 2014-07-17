function Tabs(module) {
  var $module = module;
  //Hide all of the modules.
  $module.hide().addClass('tabberModule');

  //Create an unordered list element before the first module.
  var $ul = $('<ul></ul>');
  $ul.insertBefore($module.eq(0));

  //Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.
  $module.each(function() {
    var $this = $(this),
        $li = $('<li></li>'),
        h2 = $($this).find('h2').text();
    $ul.addClass('tabs').append($li.append(h2).data('respectiveModule', $this));
  });

  $('.tabs li').click(function() {
    var $this = $(this);
    $this.data('respectiveModule').show();
    $this.addClass('current');
    $this.siblings().data('respectiveModule').hide();
    $this.siblings().removeClass('current');
  });

  //show the first tab.
    $('.tabs li').eq(0).addClass('current');
    $($module).eq(0).show();
}

$(document).ready(function() { 
  var module = $('div.module');
  new Tabs(module);
});