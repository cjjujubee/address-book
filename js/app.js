var addContacts = function() {
    // should add new contact obj to array
    var firstName = $('input[name="firstName"]').val(),
        lastName = $('input[name="lastName"]').val(),
        phoneNumber = $('input[name="phoneNumber"]').val(),
        street = $('input[name="street"]').val(),
        city = $('input[name="city"]').val(),
        state = $('input[name="state"]').val();
};

var formListener = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
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
