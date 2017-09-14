const server = require("graphql-server-lambda");
const graphqlTools = require("graphql-tools");

const mergeSchemas = require ('merge-graphql-schemas');
const _ = require('lodash');

//All the types

const AddressGeneric = require('./typedefs/address/AddressGeneric').AddressGeneric;
const CaseAddress = require('./typedefs/case/CaseAddress').CaseAddress;
const MasterCase = require('./typedefs/case/MasterCase').MasterCase;
const Basket = require('./typedefs/basket/Basket').Basket;
const GeographyPoint = require('./typedefs/geography/GeographyPoint').GeographyPoint;
const Geography = require('./typedefs/geography/Geography').Geography;
const ProductDocument = require('./typedefs/product/ProductDocument').ProductDocument;

const types = [AddressGeneric,
               CaseAddress,
               GeographyPoint,
               Geography,
               MasterCase,
               ProductDocument];

const schema = mergeSchemas.mergeTypes(types);
console.log(schema);
//All the resolvers
const caseResolver = require("./resolvers/dynamodb/caseResolver");
const basketResolver = require("./resolvers/dynamodb/basketResolver");

const resolverMap = require("./resolvers/apollo-resolver-map").resolvers;
const resolvers = _.merge(caseResolver,basketResolver);
console.log(resolvers);

module.exports.apollo = function (event, context, callback) { 

        const callbackFilter = function (error, output) {
           
            output.headers['Access-Control-Allow-Origin'] = '*';
            callback(error, output);
        };

        console.log("about to merge");
        const jsSchema = graphqlTools.makeExecutableSchema({  typeDefs: schema, resolvers: resolverMap });

        //console.log(jsSchema);

        server.graphqlLambda({
            schema: jsSchema,
            context: {
                "resolvers": resolvers
            },
            debug: true
        })(event, context, callbackFilter);
};