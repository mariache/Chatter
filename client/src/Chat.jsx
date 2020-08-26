import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { Container } from "shards-react";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`;

const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES);
  if (!data) {
    return null;
  }
  return JSON.stringify(data);
};

const Chat = () => {
  return (
    <Container>
      <Messages user="Jack" />
    </Container>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
