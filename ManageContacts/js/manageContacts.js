function ManageContacts(params) {
  this.params = params;
  this.emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  this.bindEvents();
}
ManageContacts.prototype.addContact = function() {
  var _this = this;
  this.params.$btnAdd.click(function() {
    _this.getValue();
  });
}
ManageContacts.prototype.getValue = function() {
  var inputVal = [];
  if(this.getInputValue(inputVal) && this.validateEmail()) {
    this.params.$required.val('');
    this.addContactBlock(inputVal[0], inputVal[1]);
  }
}
ManageContacts.prototype.getInputValue = function(valueArray) {
  var requiredvalue = this.params.$required;
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

ManageContacts.prototype.validateEmail= function () {
  if(!this.emailReg.test(this.params.$userEmail.val())) {
    alert('Please enter valid email Address');
    this.params.$userEmail.focus();
    return false;
  }
  return true;
}

ManageContacts.prototype.addContactBlock = function(elem1, elem2) {
  var $name = $('<div/>').addClass('name').html('Name: ' + elem1),
      $email = $('<div/>').addClass('email').html('Email: ' + elem2),
      $deleteButton = $('<input/>').attr({type: 'button', value: 'Delete'}).addClass('btn_delete'),
      $listItem = $('<li/>').attr('data-name', elem1.toLowerCase()).addClass('item');

  $listItem.append($name, $email, $deleteButton).appendTo(this.params.$contactList);
}

ManageContacts.prototype.deleteBlock = function() {
  this.params.$contactList.delegate('.btn_delete', 'click', function () {
    $(this).parent().remove();
  });
}

ManageContacts.prototype.searchContact = function() {
  var _this = this;
  _this.params.$search.keyup(function () {
    var text = $(this).val().toLowerCase().trim(),
        $name = _this.params.$contactList.find('.item');

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
ManageContacts.prototype.bindEvents = function(){
  this.addContact();
  this.deleteBlock();
  this.searchContact();
}

$(function () {
  // Assigning values
  var params = { $required: $('.required'), $userName: $('#user_name'),$userEmail: $('#user_email'), $btnAdd: $('#add_button'), $contactList: $('#contact_list'), $search: $('#search')},
  // Calling Function
  manageContacts = new ManageContacts(params);
});