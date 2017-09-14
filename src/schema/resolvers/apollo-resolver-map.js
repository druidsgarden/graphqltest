module.exports.resolvers = {
    GetBasketQuery: {
        Basket(obj, args, ctx, info) {
            return ctx.resolvers.GetBasketQuery(args.id);
        }
    }, 
    GetMasterCaseQuery: {
        Case(obj,args,ctx,info){
            return ctx.resolvers.GetMasterCaseQuery(args.id);
        }
    },
    GetCaseQuery: {
        Case(obj,args,ctx,info){
            return ctx.resolvers.GetCaseQuery(args.id);
        }
    },
    CreateNewMasterCaseMutation: {
        createNewMasterCase(obj, args, ctx, info) {
            return ctx.resolvers.createNewMasterCase();
        }
    }
}


