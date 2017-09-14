const CaseAddress = require('./CaseAddress');
const Basket = require('../basket/Basket');
const OrderGeneric = require('../order/OrderGeneric');
const ExternalSystemID = require('../externalSystem/ExternalSystemID');
const GraphQLDateTime = require ('graphql-iso-date');
const MasterCase = require('./Case/MasterCase');

const Case = `
    type Case {
        masterCase: MasterCase
        address: CaseAddress
        orders: [OrderGeneric]
        basket: Basket
        externalSystems: [ExternalSystemID]
    }

    type GetCaseQuery {        
        Case(id: String): Case
    }
`;

module.exports.Case = Case;