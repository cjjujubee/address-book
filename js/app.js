var Contact = function(contactTemplate) {
    this.contactName = {
        first:contactTemplate.firstName,
        last:contactTemplate.lastName
    };
    this.phoneNumber = contactTemplate.phoneNumber;
    this.contactAddress = {
        street:contactTemplate.street,
        city:contactTemplate.city,
        state:contactTemplate.state,
        zipcode:contactTemplate.zipcode
    };
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
    $.each(contactsArray, function(i, contact){ //adds contact information to HTML
        html += '<li><p class="contactInfo"><a href="#">'+ contact.contactName.first + " " +
        contact.contactName.last + '</a></p><p class="contactDisplay">' + contact.phoneNumber + "<br>" + contact.contactAddress.street + "<br>" + contact.contactAddress.city + ", " + contact.contactAddress.state + " " + contact.contactAddress.zipcode + "<br>" + "</p></li>";
        $('.contacts').html(html);
    });
};

$('.contacts').on('click', 'li', (function(e){
            e.preventDefault();
            $(e.target).closest('p').next().slideToggle('slow');
        }));

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
            state: $('input[name="state"]').val(),
            zipcode: $('input[name="zipcode"]').val()
        };
        // run contactMaker on template object;
        // store result in variable
        newContact = new Contact(contactTemplate);
        pushContact(newContact, contactsArray);
        showContactsArray(contactsArray);
        $('form')[0].reset();
    });
};

$(document).ready(function() { //format of contact information
    var contactsArray = [
        // new Contact ({
        //     firstName: "Ann",
        //     lastName: "Perkins",
        //     phoneNumber: "5555555",
        //     street: "478 Mapel Road",
        //     city: "Pawnee",
        //     state: "IN"
        // }),
        // new Contact ({
        //     firstName: "Andy",
        //     lastName: "Dwyer",
        //     phoneNumber: "5555556",
        //     street: "479 Mapel Road",
        //     city: "Pawnee",
        //     state: "IN"
        // }),
        // new Contact ({
        //     firstName: "Donna",
        //     lastName: "Meagle",
        //     phoneNumber: "5555557",
        //     street: "471 Mapel Road",
        //     city: "Pawnee",
        //     state: "IN"
        // })
    ];

    formListener(contactsArray);
    console.log(contactsArray[0].contactName.first);
    showContactsArray(contactsArray);
});
