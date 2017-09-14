const uuid = require('uuid');
const docClient = require('./dynamodb');

function createNewMasterCase() {
    return new Promise(function (resolve, reject) {
        console.log("Create New MasterCase Mutation is executing ....");

        const timestamp = new Date().toISOString();
        console.log(timestamp);       
        
        const params = {
            TableName: process.env.CASES_TABLE,
            Item: {
              id: uuid.v4() ,
              createdAt: timestamp,
              updatedAt: timestamp          
             }
            };

        console.log(params);
        
          // write the todo to the database
            docClient.put(params, (error) => {
            // handle potential errors
            if (error) {
              console.error(error);
              resolve(new Error('It wouldn\'t create'));
              return;
            }  
        });      
            // create a response
            return resolve(params["Item"]);
    });
}

function getMasterCase(id) {
    return new Promise(function(resolve, reject) {
      var params = {
        TableName: process.env.CASES_TABLE,
        Key: {
          id: id
        },
        AttributesToGet: [
          'id',
          'createdAt',
          'updatedAt'
        ]
      };
  
      docClient.get(params, function(err, data) {

        if (err) return reject(err);
        console.log (JSON.stringify(data));
        return resolve(data["Item"]);
      });
  
    });
}

function updateMasterCase(caseId) {
    return new Promise(function(resolve, reject) {

        const timestamp = new Date().getTime();
        var params = {
            TableName: process.env.CASES_TABLE,
            Key: {
            id: id
            },
            UpdateExpression : "SET #attrName =:attrValue",
            ExpressionAttributeNames : {
                "#attrName" : "updatedAt"
            },
            ExpressionAttributeValues : {
                ":attrValue" : {
                    "S" : timestamp
                }
            }
        };
    
        docClient.update(params, function(err, data) {
            if (err) return reject(err);
            return resolve(data["Item"]);
        });
  
    });
}

module.exports.createNewMasterCase = createNewMasterCase;
module.exports.getMasterCase = getMasterCase;
module.exports.updateMasterCase = updateMasterCase;
 