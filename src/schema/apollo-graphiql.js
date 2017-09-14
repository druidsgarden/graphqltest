const server = require("graphql-server-lambda");

module.exports.graphiql = function (event, context, callback) {
    console.log("GraphiQL handler starting");
    server.graphiqlLambda({
        endpointURL: '/graphql'
    })(event, context, callback);

};