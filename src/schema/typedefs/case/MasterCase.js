const MasterCase = `
    type MasterCase {
        id: String!
        createdAt: String
        updatedAt: String
    }

    type GetMasterCaseQuery {        
        MasterCase(id: String): MasterCase
    }

    type CreateNewMasterCaseMutation {
        createNewMasterCase : CreateNewMasterCasePayload
    }
    
    type CreateNewMasterCasePayload {
        id: String!
        createdAt: String
        updatedAt: String
    }
`;

module.exports.MasterCase = MasterCase;