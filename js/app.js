var Contact = function(contactTemplate) { //gets the object that has been passed
    this.firstName = contactTemplate.firstName;
    this.lastName = contactTemplate.lastName;
    this.phoneNumber = contactTemplate.phoneNumber;
    this.street = contactTemplate.street;
    this.city = contactTemplate.city;
    this.state = contactTemplate.state;
};

var pushContact = function(newContact, contactsArray){
    // Will add contacts to the array
    contactsArray.push(newContact);
    console.log(contactsArray);

};

var formListener = function(contactsArray) {
    $('form').on('submit', function(e) {
        e.preventDefault();
        var newContact,
            contactTemplate = { //captures the information from the form
            firstName: $('input[name="firstName"]').val(),
            lastName: $('input[name="lastName"]').val(),
            phoneNumber: $('input[name="phoneNumber"]').val(),
            street: $('input[name="street"]').val(),
            city: $('input[name="city"]').val(),
            state: $('input[name="state"]').val()
        };
        // run contactMaker on template object;
        // store result it in variable
        newContact = new Contact(contactTemplate);
        pushContact(newContact, contactsArray);
    });
};

$(document).ready(function() {
    var contactsArray = [];
    formListener(contactsArray);
});
