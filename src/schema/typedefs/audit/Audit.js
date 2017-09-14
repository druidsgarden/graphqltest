const GraphQLDateTime = require ('graphql-iso-date');

const Audit = `
    type Audit {
        dateCreated: GraphlQLDateTime
        content: String
        createdBy: String
        permissionLevel: Int    
    }
`;
    
module.exports.Audit = Audit;