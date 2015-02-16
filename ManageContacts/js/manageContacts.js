function ContactManager(jq_elements) {
  this.jq_elements = jq_elements;
  this.emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  this.bindEvents();
}
ContactManager.prototype.bindAddButtonListener = function() {
  var _this = this;
  this.jq_elements.btnAdd.click(_this.valicateUserInput.bind(this));
}
ContactManager.prototype.valicateUserInput = function() {
  var inputVal = [];
  if(this.validateInput(inputVal) && this.validateEmail()) {
    this.jq_elements.required.val('');
    this.addContactBlock(inputVal[0], inputVal[1]);
  }
}
ContactManager.prototype.validateInput = function(valueArray) {
  var requiredvalue = this.jq_elements.required;
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
  if(!this.emailReg.test(this.jq_elements.userEmail.val())) {
    alert('Please enter valid email Address');
    this.jq_elements.userEmail.focus();
    return false;
  }
  return true;
}

ContactManager.prototype.addContactBlock = function(elem1, elem2) {
  var $name = $('<div/>').addClass('name').html('Name: ' + elem1),
      $email = $('<div/>').addClass('email').html('Email: ' + elem2),
      $deleteButton = $('<input/>').attr({type: 'button', value: 'Delete'}).addClass('btn_delete'),
      $listItem = $('<li/>').attr('data-name', elem1.toLowerCase()).addClass('item');

  $listItem.append($name, $email, $deleteButton).appendTo(this.jq_elements.contactList);
}

ContactManager.prototype.bindDeleteEventListener = function() {
  this.jq_elements.contactList.delegate('.btn_delete', 'click', function () {
    $(this).parent().remove();
  });
}

ContactManager.prototype.bindSearchEventListener = function() {
  var _this = this;
  _this.jq_elements.search.keyup(function () {
    var text = $(this).val().toLowerCase().trim(),
        $name = _this.jq_elements.contactList.find('.item');
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
  this.bindAddButtonListener();
  this.bindDeleteEventListener();
  this.bindSearchEventListener();
}

$(function () {
  var jq_elements =  {required: $(".required"), userEmail: $('#user_email'), search: $('#search'), contactList: $('#contact_list'), btnAdd: $('#add_button')},
  contactManager = new ContactManager(jq_elements); // Calling Function
});