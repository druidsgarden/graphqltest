const PersonGeneric = require('../person/PersonGeneric');
const AddressGeneric = require('../address/AddressGeneric');
const Phone = require('../phone/Phone');

const ContactDetail = `
        type ContactDetail{
            person : PersonGeneric
            address : AddressGeneric
            email : String
            phoneNumbers : [Phone]
        }
`;

module.exports.ContactDetail = ContactDetail;
