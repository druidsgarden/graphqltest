const ContactDetail = require ('../contact/ContactDetail');
const Audit = require ('../audit/Audit');

const PaymentDetail = `
    type PaymentDetail {
        contactDetails: [ContactDetail]
        notes: [Audit]
    }
`;

module.exports.PaymentDetail = PaymentDetail;