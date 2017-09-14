const PriceDetail = require ('../price/PriceDetail');
const ProductCategory = require ('./ProductCategory');
const ProductDocument = require ('./ProductDocument');

const Product = `
    type Product {
        sku: String
        productName: String
        priceDetails: PriceDetail
        category: ProductCategory
        documents: [ProductDocument]
    }
`;

module.exports.Product = Product;
