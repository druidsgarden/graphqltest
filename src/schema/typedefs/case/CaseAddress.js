const AddressGeneric = require ('../address/AddressGeneric');
const Geography = require ('../geography/Geography');

const CaseAddress = `
    type CaseAddress {
        addressDetails: AddressGeneric
        geography: Geography
    }
`;
module.exports.CaseAddress = CaseAddress;