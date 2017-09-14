const MasterCase = require ('../case/MasterCase');
const CaseAddress = require ('../case/CaseAddress');
const OwnerDetails = require('../owner/OwnerDetails');

// Need to look at access detail info 

const Basket = `
    type Basket {
        id: String!
        clientRef: String
        label: String
        owner: ownerDetails
        basketAddress: CaseAddress
        masterCase: masterCase
        createdAt: String
        updatedAt: String
    }

    type GetBasketQuery {
        Basket(id:String) : Basket

    }
`;
module.exports.Basket = Basket;