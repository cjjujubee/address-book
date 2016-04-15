var addContacts = function(){
	// should add new contact obj to array
	var firstName,
		lastName,
		phoneNumber,
		street,
		city,
		state;
	firstName = "Moose";
	alert(firstName);
};

var formListener = function(){
	$('form').on('submit', function(){
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
            first: "Anne",
            last: "Perkins"
        },
        contactPhoneNumber: 5555555,
        contactAddress: {
            street: "478 Maple Rd",
            city: "Pawnee",
            state: "IN"
        }
    }];

    formListener();
});
