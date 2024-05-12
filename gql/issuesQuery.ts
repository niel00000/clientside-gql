import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query Issues {
    issues {
      content
      id
      name
      status
    }
  }
`
