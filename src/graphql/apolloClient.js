import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

const httpLink = new HttpLink({ uri: 'https://master-covid-statistics.herokuapp.com/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = window.localStorage.getItem('Covid-Statistics-Token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? token : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});