const Product = require ('../product/Product');
const PriceDetail = require ('../price/PriceDetail');

const BasketLine = `
    type BasketLine {
        ref: String!
        product: Product
        priceDetail: PriceDetail
    }
`;

module.exports.BasketLine = BasketLine;