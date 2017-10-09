import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://graphql-pokemon.now.sh',
});

const client = new ApolloClient({ networkInterface });

<BrowserRouter>
  <ApolloProvider client={client}>
    ...
  </ApolloProvider>
</BrowserRouter>
