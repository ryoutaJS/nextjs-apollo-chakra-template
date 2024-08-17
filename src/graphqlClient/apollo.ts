import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'ここにGraphQLのエンドポイントを指定',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${'ここにアクセストークンを指定'}`,
  },
})
