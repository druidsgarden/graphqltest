const AddressGeneric = `
#Generic PAF address type
    type AddressGeneric {

        # "Bloggs Legal Solicitors Ltd"
        organisation: String

        department: String

        # Sub Building Name (e.g. 'Flat 1', 'Unit 7')
        subBuildingName: String

        # Building Name (e.g. 'Rose Cottage', 'Willow Mill') 50 Not required if there’s a Building Number
        buildingName: String

        # Building Number (e.g. '22') 
        buildingNumber: String

        # Street e.g. Wentworth Drive
        thoroughfare: String
        
        # Dependent Locality (e.g. 'Blantyre') 35 Yes, if applicable
        dependentThoroughfare: String
            
        # Area - e.g. Caton
        dependentLocality: String
            
        postTown: String
        
        postCode: String
            
        isResidential: String

        # The full address for display
        formattedAddress: String
    }
`;

module.exports.AddressGeneric = AddressGeneric;

