const { GraphQLServer } = require("graphql-yoga");

const messages = [];

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!
    }
    type Query {
        messages: [Messages!]
    }
`;

const resolvers = {
  Query: {
    messages: () => messages,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(({ port }) => {
  console.log(`Server on http://localhost:${port}`);
});
