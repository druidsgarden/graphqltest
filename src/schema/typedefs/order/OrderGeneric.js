const GraphQLDateTime = require ('graphql-iso-date');
const OrderInvoice = require ('./OrderInvoice');
const OrderLine = require ('./OrderLine');

const OrderGeneric = `
    type OrderGeneric {
        ref: String!
        orderDate: GraphQLDateTime
        invoices: [OrderInvoice]
        orderLines: [OrderLine]
    }
`;

module.exports.OrderGeneric = OrderGeneric;