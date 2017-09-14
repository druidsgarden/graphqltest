const uuid = require('uuid');
const docClient = require('./dynamodb');

function createNewBasket() {
    return new Promise(function (resolve, reject) {
        console.log("Create New Basket Mutation is executing ....");

        const timestamp = new Date().toISOString();
        console.log(timestamp);       
        
        const params = {
            TableName: process.env.BASKET_TABLE,
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

function getBasket(id) {
    return new Promise(function(resolve, reject) {
      var params = {
        TableName: process.env.BASKET_TABLE,
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

function updateBasket(id) {
    return new Promise(function(resolve, reject) {

        const timestamp = new Date().getTime();
        var params = {
            TableName: process.env.BASKET_TABLE,
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

module.exports.createNewBasket = createNewBasket;
module.exports.getBasket = getBasket;
module.exports.updateBasket = updateBasket;
 