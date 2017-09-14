const OwnerDetails = `
type OwnerDetails {
    clientId: String
    userId: String
}

type Query {        
    OwnerDetails(userId: String): OwnerDetails
    OwnerDetails(clientId: String): OwnerDetails
}
`;

module.exports.OwnerDetails = OwnerDetails;