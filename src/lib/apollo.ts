import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4o7nnz00wyy01xrdg7dhfuq/master",
  cache: new InMemoryCache()
})