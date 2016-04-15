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

};

var showContactsArray = function(contactsArray){
    // add members of contactsArray to DOM
    // for user to enjoy
    console.log(contactsArray);
    var html = "";
    $.each(contactsArray, function(i, contact){
        html += "<h1 class='contactName'>"+ contact.contactName.first + " " +
        contact.contactName.last +"</h1>";
        $('body').html(html);
    });

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
        showContactsArray(contactsArray);
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
    formListener(contactsArray);
    console.log(contactsArray[0].contactName.first);
});
