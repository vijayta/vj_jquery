function Contact() {
  // Assigning values
  this.required = $('.required'), 
  this.userEmail = $('#user_email'),
  this.btnAdd = $('#add_button'),
  this.contactList = $('#contact_list'), 
  this.search = $('#search');
}
function ContactManager() {
  this.contact = new Contact();
  this.emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  this.bindEvents();
}
ContactManager.prototype.addContact = function() {
  var _this = this;
  this.contact.btnAdd.click(function() {
    _this.getValue();
  });
}
ContactManager.prototype.getValue = function() {
  var inputVal = [];
  if(this.getInputValue(inputVal) && this.validateEmail()) {
    this.contact.required.val('');
    this.addContactBlock(inputVal[0], inputVal[1]);
  }
}
ContactManager.prototype.getInputValue = function(valueArray) {
  var requiredvalue = this.contact.required;
  for(i = 0, len = requiredvalue.length; i < len; i++) {
    if(!requiredvalue[i].value.trim()) {
      alert(requiredvalue[i].name + " field can't be empty");
      requiredvalue[i].focus();
      return false;
    }
    else {
      valueArray.push(requiredvalue[i].value);
    }
  }
  return valueArray;
}

ContactManager.prototype.validateEmail= function () {
  if(!this.emailReg.test(this.contact.userEmail.val())) {
    alert('Please enter valid email Address');
    this.contact.userEmail.focus();
    return false;
  }
  return true;
}

ContactManager.prototype.addContactBlock = function(elem1, elem2) {
  var $name = $('<div/>').addClass('name').html('Name: ' + elem1),
      $email = $('<div/>').addClass('email').html('Email: ' + elem2),
      $deleteButton = $('<input/>').attr({type: 'button', value: 'Delete'}).addClass('btn_delete'),
      $listItem = $('<li/>').attr('data-name', elem1.toLowerCase()).addClass('item');

  $listItem.append($name, $email, $deleteButton).appendTo(this.contact.contactList);
}

ContactManager.prototype.deleteBlock = function() {
  this.contact.contactList.delegate('.btn_delete', 'click', function () {
    $(this).parent().remove();
  });
}

ContactManager.prototype.searchContact = function() {
  var _this = this;
  _this.contact.search.keyup(function () {
    var text = $(this).val().toLowerCase().trim(),
        $name = _this.contact.contactList.find('.item');

    $name.each(function () {
      var $this = $(this);
      if($this.data('name').indexOf(text) == 0) {
        $this.show();
      }
      else {
        $this.hide();
      }
    });
  });
}
ContactManager.prototype.bindEvents = function(){
  this.addContact();
  this.deleteBlock();
  this.searchContact();
}

$(function () {
  // Calling Function
  contactManager = new ContactManager();
});