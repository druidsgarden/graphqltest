const GeographyPoint = require ('./GeographyPoint');
const ProductDocument = require('../product/ProductDocument');

const Geography = `
    type Geography {
        gridReference: GeographyPoint
        polygon: [GeographyPoint]
        plans: [ProductDocument]
    }
`;

module.exports.Geography = Geography;