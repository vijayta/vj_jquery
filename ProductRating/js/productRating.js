function ManageContacts(required, userName, userEmail, btnAdd, contactList) {
  this.required = required;
  this.userName = userName;
  this.userEmail = userEmail;
  this.btnAdd = btnAdd;
  this.contactList = contactList;
  this.init();
}
ManageContacts.prototype.addContact = function() {
  this.btnAdd.click(function(e){
    var _this = this;
    var $this = $(this);
    var $formId = $(this).parents('form');
    var formAction = $formId.attr('action');
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    $($formId).removeClass('error');
    $('span.error').remove();
    $(_this.required,$formId).each(function(){
      var inputVal = $this.val();
      alert(inputVal);
      var $parentTag = $this.parent();

      if(inputVal == ''){
        $parentTag.addClass('error').append('<span class="error">Required field</span>');
      }
      else{
        $parentTag.removeClass('error');
        _this.contactList.append('<li> <span> User Name = ' + _this.userName.val() + '</span><br /><span> User Email = ' + _this.userEmail.val() + '</span></li>');
      }

      if($(this).hasClass('email') == true){
        if(!emailReg.test(inputVal)){
          $parentTag.addClass('error').append('<span class="error">Enter a valid email address.</span>');
        }
      }
      else{
        $parentTag.removeClass('error');
      }
    });
    e.preventDefault();
  });
}

ManageContacts.prototype.init = function() {
  this.addContact();
}
$(document).ready(function() { 
  // Assigning values
  var $required = $('.required'),
      $userName = $('#user_name'),
      $userEmail = $('#user_email'),
      $btnAdd = $('#add_button'),
      $contactList = $('#contact_list');
      
  // Calling Function
  new ManageContacts($required, $userName, $userEmail, $btnAdd, $contactList);
 
});