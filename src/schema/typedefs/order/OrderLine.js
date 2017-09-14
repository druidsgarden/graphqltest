const GraphQLDateTime = require ('graphql-iso-date');
const Product = require ('../product/Product');
const PriceDetail = require ('../price/PriceDetail');
const Audit = require ('../audit/AuditType');

const OrderLine = `
    type OrderLine {
        ref: String!
        orderDate: GraphQLDateTime
        product: Product
        priceDetail: PriceDetail
        auditTrail: [Audit]
    }
`;

module.exports.OrderLine = OrderLine;