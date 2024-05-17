import Resolver from "@forge/resolver";

const resolver = new Resolver();

// TODO: Add resolvers to register and query for nicknames, for example:
// resolver.define('registerNickname', (req) => {
// });

export const handler = resolver.getDefinitions();
