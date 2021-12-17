import {gql} from '@apollo/client'

export  const PERSONS_ALL = gql`
query PersonsAll {
  allPerson {
    id
    name
    vote
    phone
  }
}`