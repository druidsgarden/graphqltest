const GraphQLDate = require ('graphql-iso-date');
const OrderLine = require ('./OrderLine');

const OrderInvoice = `
    type OrderInvoice {
        invoiceRef: String
        invoiceDate: GraphQLDate
        invoice: String
        orderLines: [OrderLine]
    }
`;

module.exports.OrderInvoice = OrderInvoice;