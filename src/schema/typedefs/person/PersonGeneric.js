const GraphQLDate = require ('graphql-iso-date');
const Product = require ('../address/AddressGeneric');

const PersonGeneric = `
    type PersonGeneric {
        salutation: String
        firstName: String
        middleName: String
        lastName: String
        dateOfBirth: GraphQLDate
        currentAddress: AddressGeneric
    }
`;

module.exports.PersonGeneric = PersonGeneric;