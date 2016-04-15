var Contact = function(contactTemplate) {
    this.firstName = contactTemplate.firstName;
    this.lastName = contactTemplate.lastName;
    this.phoneNumber = contactTemplate.phoneNumber;
    this.street = contactTemplate.street;
    this.city = contactTemplate.city;
    this.state = contactTemplate.state;
};

var addContacts = function(){
    // Will add contacts to the array
};

var formListener = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        var contactTemplate = {
            firstName: $('input[name="firstName"]').val(),
            lastName: $('input[name="lastName"]').val(),
            phoneNumber: $('input[name="phoneNumber"]').val(),
            street: $('input[name="street"]').val(),
            city: $('input[name="city"]').val(),
            state: $('input[name="state"]').val()
        };
        addContacts();
    });
};

$(document).ready(function() {
    var contactsArray = [{
        contactName: {
            first: "Anne",
            last: "Perkins"
        },
        contactPhoneNumber: 5555555,
        contactAddress: {
            street: "478 Maple Rd",
            city: "Pawnee",
            state: "IN"
        }
    }, {
        contactName: {
            first: "Andy",
            last: "Dwyer"
        },
        contactPhoneNumber: 5555556,
        contactAddress: {
            street: "479 Maple Rd",
            city: "Pawnee",
            state: "IN"
        }
    }, {
        contactName: {
            first: "Donna",
            last: "Meagle"
        },
        contactPhoneNumber: 5555557,
        contactAddress: {
            street: "480 Maple Rd",
            city: "Pawnee",
            state: "IN"
        }
    }];
    formListener();
});
